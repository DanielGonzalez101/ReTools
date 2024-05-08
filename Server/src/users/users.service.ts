import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {

  constructor(private prisma : PrismaService) {}

  async register(user: CreateUserDto) : Promise<string> {
    const correoregistrado = await this.prisma.user.findUnique({
      where:{email:user.email}
    })
    const cedularegistrada = await this.prisma.user.findUnique({
      where: {cedula: user.cedula}
    })
    if (correoregistrado) {
      throw new ConflictException('El correo ya esta registrado')
    } else {
      if (cedularegistrada) {
        throw new ConflictException('La cedula ya esta registrada')
      } else {
        await this.prisma.user.create({data:user})
        return 'usuario registrado con exito'
      }
    }
  }

  async login(user: LoginUserDto) : Promise<String> {
    const usuarioEncontrado = await this.prisma.user.findUnique({
      where: {email: user.email,}
    })
    if (usuarioEncontrado) {
      if (user.password === usuarioEncontrado.password) {
        return 'El usuario se encuentra registrado'
      } else {
        throw new BadRequestException('Contraseña incorrecta')
      }
    }
    else {
      throw new BadRequestException( `No hay ningun correo llamado ${user.email}`)
    }
  }
  
}
