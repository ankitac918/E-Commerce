import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UserUpdateDto{
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
    
}