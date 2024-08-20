
import { IButton } from './IButton';

export class InstructorButton implements IButton {
    public render(): void {
        console.log('Renderizando botón para Instructor');
    }
}
