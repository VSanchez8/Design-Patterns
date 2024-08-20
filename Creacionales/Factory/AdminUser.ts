
import { IUser } from './IUser';

export class AdminUser implements IUser {
    public id: number;
    public name: string;
    public role: string;
    public permissions: string[];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.role = 'admin';
        this.permissions = ['manage_courses', 'manage_users', 'view_reports'];
    }
}
