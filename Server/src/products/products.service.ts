import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma.service';
@Injectable()
export class ProductsService {

  constructor (private prisma : PrismaService) {}

  async create(product: CreateProductDto) {
    const usuarioRegistrado = await this.prisma.user.findUnique({where:{id:product.ownerId}})
    if (usuarioRegistrado) {
      const nuevoProduct = await this.prisma.product.create({data:product})
      return nuevoProduct
    } else {
      throw new BadRequestException(`El usuario con el ${product.ownerId} no existe`)
    }
  }

  findAll() {
    return this.prisma.product.findMany()
  }

  async findOne(id: number) {
    const productoRegistrado = await this.prisma.product.findUnique({where:{id:id}})
    if (productoRegistrado) {
      return productoRegistrado;
    } else {
      throw new NotFoundException(`No se encontro el producto con el id ${id}`)
    }
  }

  async update(id: number, updateUser: UpdateProductDto) {
    const productoRegistrado = await this.prisma.product.findUnique({where:{id:id}})
    if (productoRegistrado) {
      return await this.prisma.product.update({where:{id:id},data:updateUser});
    } else {
      throw new NotFoundException(`No se encontro el producto con el id ${id}`)
    }  
  }

  async remove(id: number) {
    const productoRegistrado = await this.prisma.product.findUnique({where:{id:id}})
    if (productoRegistrado) {
      return await this.prisma.product.delete({where:{id:id}});
    } else {
      throw new NotFoundException(`No se encontro el producto con el id ${id}`)
    }  
  }
}
