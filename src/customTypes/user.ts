export enum UserRole {
  admin = "Admin",
  staff = "Staff",
  editor = "Editor",
  superAdmin = "Super Admin",
  accounts = "Accounts",
}

export interface AdminProfile {
  _id: string;
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: UserRole;
  createdAt: Date | string;
  updatedAt: Date | string;
  actions: string;
}
