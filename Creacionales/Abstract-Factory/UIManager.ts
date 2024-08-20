
import { IButton } from './UIObjects/IButton';
import { IDialog } from './UIObjects/IDialog';
import { AdminButton } from './UIObjects/AdminButton';
import { InstructorButton } from './UIObjects/InstructorButton';
import { StudentButton } from './UIObjects/StudentButton';
import { AdminDialog } from './UIObjects/AdminDialog';
import { InstructorDialog } from './UIObjects/InstructorDialog';
import { StudentDialog } from './UIObjects/StudentDialog';

export class UIManager {
    public createUI(userType: string): { button: IButton, dialog: IDialog } {
        let button: IButton;
        let dialog: IDialog;

        if (userType === 'admin') {
            button = new AdminButton();
            dialog = new AdminDialog();
        } else if (userType === 'instructor') {
            button = new InstructorButton();
            dialog = new InstructorDialog();
        } else if (userType === 'student') {
            button = new StudentButton();
            dialog = new StudentDialog();
        } else {
            throw new Error('Tipo de usuario no reconocido');
        }

        return { button, dialog };
    }
}
