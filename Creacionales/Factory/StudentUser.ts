
import { IUser } from './IUser';

export class StudentUser implements IUser {
    public id: number;
    public name: string;
    public role: string;
    public permissions: string[];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.role = 'student';
        this.permissions = ['enroll_courses', 'view_materials', 'submit_assignments'];
    }
}
