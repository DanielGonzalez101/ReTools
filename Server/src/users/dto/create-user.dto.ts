import { IsString, MaxLength, MinLength } from "class-validator"


export class CreateUserDto {
    
    @IsString()
    @MinLength(3)
    @MaxLength(30)
    name:string

    @IsString()
    @MinLength(10)
    @MaxLength(50)
    email:string
    
    @IsString()
    @MinLength(4)
    @MaxLength(30)
    password:string

    @IsString()
    @MinLength(8)
    @MaxLength(10)
    cedula:string
}
