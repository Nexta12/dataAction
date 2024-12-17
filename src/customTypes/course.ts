interface Images {
  url: string
}
export interface LearningTopics{
  point: string
}

export interface CoursesDetail {
    readonly _id: string;
    title: string;
    readonly slug: string;
    totalModules: string;
    experienceLevel: string;
    snippet: string;
    duration: string;
    description: string;
    images: Images[];
    courseOutline: Images[];
    whatYoudLearn: LearningTopics[];
    weeklyTimeRequirement: string;
    price: string | number
    totalEnrolled: string | number
    createdAt?: Date | string;
    updatedAt?: Date | string;
    actions?: string;
  }


 
