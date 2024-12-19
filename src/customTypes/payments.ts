export interface Payments {
    _id: string;
    customerId: string;
    applicantName: string;
    applicantEmail: string;
    phoneNumber: string;
    paymentFor: string;
    invoice: string;
    status: boolean;
    amount: number;
    createdAt: Date | string;
    actions: string;
  }