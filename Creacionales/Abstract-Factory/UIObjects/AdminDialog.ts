
import { IDialog } from './IDialog';

export class AdminDialog implements IDialog {
    public show(): void {
        console.log('Mostrando cuadro de diálogo para Administrador');
    }
}
