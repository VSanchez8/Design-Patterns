
import { IButton } from './IButton';

export class AdminButton implements IButton {
    public render(): void {
        console.log('Renderizando botón para Administrador');
    }
}
