import { DifficultyLevel } from "./general";


export interface ProjectDetails {
    _id: string;
    title: string;
    industry: string;
    purpose: string;
    price: number;
    difficultyLevel: DifficultyLevel;
    actions: string;
  }
