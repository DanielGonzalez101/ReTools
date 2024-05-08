import { IsString, MinLength, MaxLength } from "class-validator"

export class LoginUserDto {
    @IsString()
    @MinLength(10)
    @MaxLength(50)
    email:string
    
    @IsString()
    @MinLength(4)
    @MaxLength(30)
    password:string
}