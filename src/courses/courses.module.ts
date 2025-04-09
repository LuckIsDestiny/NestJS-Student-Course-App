import { forwardRef, Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { StudentsModule } from 'src/students/students.module';
import { Student } from 'src/students/entities/student.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Course, Student]),
    forwardRef(() => StudentsModule)
  ],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule { }
