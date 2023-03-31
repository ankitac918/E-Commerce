import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UserDto{
    @IsOptional()
    deletedAt:string;

    @IsString()
    @IsOptional()
    firstName:string;

    @IsString()
    @IsOptional()
    lastName:string;

    @IsString()
    @IsOptional()
    address:string

    @IsString()
    @IsOptional()
    phone:string
    
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email:string

    @IsString()
    @IsOptional()
    image: string;

    @IsString()
    @IsNotEmpty()
    password:string
}