import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UserDto{
    @IsString()
    @IsOptional()
    first_name:string;

    @IsString()
    @IsOptional()
    last_name:string;

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
    @IsNotEmpty()
    password:string
}