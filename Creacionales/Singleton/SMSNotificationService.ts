
import { INotificationService } from './INotificationService';

export class SMSNotificationService implements INotificationService {
    public sendNotification(message: string, recipient: string): void {
        console.log(`Enviando SMS a ${recipient}: ${message}`);
    }
}
