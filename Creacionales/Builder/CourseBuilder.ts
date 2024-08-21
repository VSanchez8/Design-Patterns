import { IInstructorDetails } from "./IInstructorDetails";
import { ISchedule } from "./ISchedule";
import { IStudent } from "./IStudent";
import { Course } from "./Course";

export class CourseBuilder {
    public name: string = '';
    public description: string = '';
    public materials: string[] = [];
    public instructorDetails: IInstructorDetails = { name: '', email: '', experience: 0 };
    public schedule: ISchedule | null = null;
    public students: IStudent[] | null = null;
    public startDate: Date | null = null;
    public endDate: Date | null = null;

    private customMethod:(cadena: string)=>void = (cadena: string)=> {

    }

    public setName(name: string): CourseBuilder {
        this.name = name;
        return this;
    }

    public setDescription(description: string): CourseBuilder {
        this.description = description;
        return this;
    }
 
    public setMaterials(materials: string[]): CourseBuilder {
        this.materials = materials;
        return this;
    }

    public setInstructor(instructor: IInstructorDetails): CourseBuilder {
        this.instructorDetails = instructor;
        return this;
    }

    // public setSchedule(schedule: ISchedule): CourseBuilder {
    //     this.schedule = schedule;
    //     return this
    // }

    public setstudents (students: IStudent[]): CourseBuilder {
        this.students = students
        return this
    }

    public setstartDate(startDate: Date): CourseBuilder {
        this.startDate = startDate
        return this
    }

    public setendDate(endDate: Date) {
        this.endDate = endDate
        return this
    }

    public setCustomMethod(method: (cadena:string)=>void): CourseBuilder{
        this.customMethod = method
        return this
    }

    public buildCourse(): Course {
        const course = new Course(
            this.name,
            this.description,
            this.materials,
            this.instructorDetails,
            this.schedule,
            this.students,
            this.startDate,
            this.endDate
        );
        course.addExtraBehavior = this.customMethod;
        return course;
    }

    public addStudent(student: IStudent): CourseBuilder {
        if (!this.students) {
            this.students = [];
        }
        this.students.push(student);
        return this;
    }
}