export interface SuccessResponse<T> {
  message: string;
  data: T;
}

export enum DifficultyLevel {
  beginner = 'Beginner',
  intermediate = 'Intermediate',
  advanced = 'Advanced'
}