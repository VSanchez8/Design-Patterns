"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingService = void 0;
const NotificationManager_1 = require("./NotificationManager");
class BillingService {
    constructor() {
        this.notificationManager = NotificationManager_1.NotificationManager.getSingleInstance();
    }
    notifyPaymentDue(studentEmail) {
        // Lógica para verificar el estado de pago...
        console.log(`Notificación de pago enviada a: ${studentEmail}`);
        // Notificación de vencimiento de pago
        this.notificationManager.notifyByEmail('Tu pago de colegiatura está próximo a vencer', studentEmail);
        this.notificationManager.ownNotifyByTelegram('561156264', 'Urgente el pago de tu colegiatura');
    }
}
exports.BillingService = BillingService;
