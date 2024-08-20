
import { IDialog } from './IDialog';

export class InstructorDialog implements IDialog {
    public show(): void {
        console.log('Mostrando cuadro de diálogo para Instructor');
    }
}
