export interface Consultations {
  _id: string;
  applicantName: string;
  applicantEmail: string;
  phoneNumber?: string;
  consultationType: string;
  choiceDate: Date | string;
  price: number;
  status: boolean;
  comment: string
  actions: string;
}

