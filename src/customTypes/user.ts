export enum UserRole {
    admin = 'Admin',
    regularUser = 'User',
  }

export interface AdminProfile{
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: UserRole
    createdAt: Date | string;
    updatedAt: Date | string;
    actions: string
}