import { DifficultyLevel } from "./general";


export interface ProjectDetails {
    _id: string;
    title: string;
    slug:string;
    industry: string;
    purpose: string;
    price: number;
    keytext:string;
    difficultyLevel: DifficultyLevel;
    actions: string;
  }
