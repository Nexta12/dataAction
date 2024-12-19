export interface StudentsProfile {
  _id: string;
  applicantName: string;
  applicantEmail: string;
  phoneNumber: string;
  trainingType: string;
  choiceDate: Date | string;
  cost: number;
  comment: string
  createdAt?: Date | string;
  actions: string;
}




