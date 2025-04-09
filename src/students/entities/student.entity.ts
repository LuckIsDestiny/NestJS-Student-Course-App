import { Course } from "src/courses/entities/course.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

export enum Gender {
    MALE = "male",
    FEMALE = "female",
    OTHER = "other"
}

@Entity({ name: "student" })
export class Student {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    age: number;
    @Column({ type: "enum", enum: Gender })
    gender: Gender;
    @Column()
    address: string;
    @Column({ nullable: true })
    phone: string;
    @Column()
    email: string;

    @ManyToMany(() => Course, (course) => course.students)
    @JoinTable({
        name: "student_course",
        joinColumn: { name: "student_id", referencedColumnName: "id" },
        inverseJoinColumn: { name: "course_id", referencedColumnName: "id" }
    })
    courses: Course[];
}
