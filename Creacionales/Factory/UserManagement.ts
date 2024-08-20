
import { IUser } from './IUser';
import { AdminUser } from './AdminUser';
import { InstructorUser } from './InstructorUser';
import { StudentUser } from './StudentUser';

export class UserManagement {
    public createUser(type: string, id: number, name: string): IUser {
        if (type === 'admin') {
            return new AdminUser(id, name);
        } else if (type === 'instructor') {
            return new InstructorUser(id, name);
        } else if (type === 'student') {
            return new StudentUser(id, name);
        } else {
            throw new Error('Tipo de usuario no reconocido');
        }
    }
}