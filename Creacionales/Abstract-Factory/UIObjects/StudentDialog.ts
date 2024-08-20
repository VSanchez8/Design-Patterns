
import { IDialog } from './IDialog';

export class StudentDialog implements IDialog {
    public show(): void {
        console.log('Mostrando cuadro de diálogo para Estudiante');
    }
}
