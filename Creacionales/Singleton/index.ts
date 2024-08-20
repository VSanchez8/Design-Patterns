
import { EnrollmentService } from './EnrollmentService';
import { BillingService } from './BillingService';

const inscriptionService = new EnrollmentService
const billingService = new BillingService
const contactMail = 'victorhugo.sanchez@axity.com'

inscriptionService.enrollStudent(contactMail);
billingService.notifyPaymentDue(contactMail);



