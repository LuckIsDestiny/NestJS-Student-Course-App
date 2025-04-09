import { IsDate, IsNotEmpty, IsOptional, IsString, Length } from "class-validator";

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
    @IsDate()
    startDate: Date;

    @IsOptional()
    @IsDate()
    endDate: Date;
}
