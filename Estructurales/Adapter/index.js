"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EnrollmentService_1 = require("./EnrollmentService");
const BillingService_1 = require("./BillingService");
const inscriptionService = new EnrollmentService_1.EnrollmentService;
const billingService = new BillingService_1.BillingService;
const contactMail = 'victorhugo.sanchez@axity.com';
inscriptionService.enrollStudent(contactMail);
billingService.notifyPaymentDue(contactMail);
