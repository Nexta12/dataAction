export interface ServicesDetail {
  _id: string;
  title: string;
  category: string;
  price: string | number
  createdAt: Date | string;
  updatedAt: Date | string;
  actions: string;
}
