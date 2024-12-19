export interface Messages {
    _id: string;
    name: string;
    email: string;
    message?: string;
    snippet?: string;
    createdAt: Date | string;
    actions: string;
  }
   