
import { IUser } from './IUser';

export class InstructorUser implements IUser {
    public id: number;
    public name: string;
    public role: string;
    public permissions: string[];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.role = 'instructor';
        this.permissions = ['create_courses', 'edit_courses', 'grade_students'];
    }
}
