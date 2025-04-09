import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString, Length, Max, Min } from "class-validator";
import { Gender } from "../entities/student.entity";

export class CreateStudentDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(15)
    @Max(60)
    age: number;

    @IsNotEmpty()
    @IsEnum(Gender)
    gender: Gender;

    @IsOptional()
    @IsString()
    @Length(20, 100)
    address: string;

    @IsOptional()
    @IsPhoneNumber("IN")
    phone: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}
