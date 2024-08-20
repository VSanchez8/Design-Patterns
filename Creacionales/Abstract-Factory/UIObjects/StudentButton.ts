
import { IButton } from './IButton';

export class StudentButton implements IButton {
    public render(): void {
        console.log('Renderizando botón para Estudiante');
    }
}
