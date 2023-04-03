import { IsOptional, IsString } from "class-validator";

export class addressDto {
    @IsString()
    @IsOptional()
    userId:string

    @IsString()
    @IsOptional()
    token:string

    @IsString()
    categories:string;

    @IsString()
    streetAddress:string;

    @IsString()
    city :string

    @IsString()
    zipCode:string

    @IsString()
    @IsOptional()
    deliveryInstruction:string

    @IsString()
    @IsOptional()
    feedback:string

    @IsString()
    locationType:string

}