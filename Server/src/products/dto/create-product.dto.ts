import { IsInt, Min, IsString, MaxLength, MinLength, Max } from "class-validator";


export class CreateProductDto {
    
    @IsString()
    @MinLength(4)
    @MaxLength(50)
    name:string
    
    @IsString()
    @MinLength(4)
    img:string

    @IsString()
    @MinLength(4)
    @MaxLength(300)
    description:string

    @IsInt()
    @Min(1000)
    @Max(2000000)
    price:number

    @IsInt()
    @Min(1)
    ownerId:number
}
