import { IInstructorDetails } from "./IInstructorDetails";
import { ISchedule } from "./ISchedule";
import { IStudent } from "./IStudent";

export class Course {
    private name: string;
    private description: string;
    private materials: string[];
    private instructorDetails: IInstructorDetails;
    private schedule: ISchedule | null;
    private students: IStudent[] | null;
    private startDate: Date | null;
    private endDate: Date | null;

    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public getMaterials(): string[] {
        return this.materials;
    }

    public getInstructorDetails(): IInstructorDetails {
        return this.instructorDetails;
    }

    public getSchedule(): ISchedule | null {
        return this.schedule;
    }

    public get getStudents(): IStudent[] | null {
        return this.students;
    }

    public getStartDate(): Date | null {
        return this.startDate;
    }

    public get getEndDate(): Date | null {
        return this.endDate;
    }

    public getExtraBehavior(): (cadena: string) => void {
        return this.addExtraBehavior;
    }

    constructor(
        name: string,
        description: string,
        materials: string[],
        instructorDetails: IInstructorDetails,
        schedule: ISchedule | null,
        students: IStudent[] | null,
        startDate: Date | null,
        endDate: Date | null
    ) {
        this.name = name;
        this.description = description || 'No description available';
        this.materials = materials || []; // Valor por defecto
        this.instructorDetails = instructorDetails;
        this.schedule = schedule || { days: [], time: '' }; // Valor por defecto
        this.students = students || []; // Lista vacía por defecto
        this.startDate = startDate || new Date(); // Valor por defecto
        this.endDate = endDate || new Date(); // Valor por defecto
    }

    public displayCourseInfo(): void {
        console.log(`Curso: ${this.name}`);
        console.log(`Descripción: ${this.description}`);
        console.log(`Instructor: ${this.instructorDetails.name}, Email: ${this.instructorDetails.email}, Experiencia: ${this.instructorDetails.experience} años`);
        console.log(`Horario: ${this.schedule?.days.join(', ')} a las ${this.schedule?.time}`);
        console.log(`Fecha de inicio: ${this.startDate?.toDateString()}`);
        console.log(`Fecha de fin: ${this.endDate?.toDateString()}`);
        console.log(`Materiales: ${this.materials.join(', ')}`);
        console.log(`Estudiantes inscritos: ${this.students?.map(s => s.name).join(', ')}`);
    }

    public addExtraBehavior(cadena: string): void {
        
    }

    public clone(): Course {
        return new Course(
            this.name, 
            this.description,
            [...this.materials],
            { ...this.instructorDetails },
            this.schedule ? { ...this.schedule } : null,
            this.students ? this.students.map(student => ({ ...student })) : null,
            this.startDate,
            this.endDate
        );
    } 

    // public addStudent(student: IStudent) {
    //     if (!this.students) {
    //         this.students = [];
    //     }
    //     this.students.push(student);
    //     return this;
    // }
}
