interface Images {
  url: string
}

export interface CoursesDetail {
    readonly _id: string;
    title: string;
    totalModules: string;
    experienceLevel: string;
    snippet: string;
    duration: string;
    description: string;
    images: Images[];
    courseOutline: Images[];
    whatYoudLearn: string[];
    weeklyTimeRequirement: string;
    price: string | number
    totalEnrolled: string | number
    createdAt: Date | string;
    updatedAt: Date | string;
    actions: string;
  }


 
