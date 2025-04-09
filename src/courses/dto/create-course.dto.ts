import { IsDateString, IsNotEmpty, IsOptional, IsString, Length } from "class-validator";

export class CreateCourseDto {
    
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsString()
    @Length(20, 100)
    description: string;

    @IsNotEmpty()
    @IsString()
    instructor: string;

    @IsNotEmpty()
    @IsDateString()
    startDate: Date;

    @IsOptional()
    @IsDateString()
    endDate: Date;
}
