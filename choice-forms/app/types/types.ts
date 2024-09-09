// type.ts
// Define the types for the Personal Data form
export interface PersonalData {
    surname: string;
    firstName: string;
    lastName?: string;
    gender: 'male' | 'female';
    dob: string;
    image?: File;
    level: string;
    department: string;
    christDate: string;
    baptized: 'yes' | 'no';
    baptizedDate?: string;
    homeChurch: string;
    parentsBornAgain: 'yes' | 'no';
    parentsSupport: 'yes' | 'no';
    stayBack: 'yes' | 'no';
  }
  
  // Define the types for the Academic Status form
  export interface AcademicStatus {
    otherCommitments: 'yes' | 'no';
    leadershipExperience: 'yes' | 'no';
    payTithes: 'yes' | 'no';
    cgp: string;
    outstandingCourses: 'yes' | 'no';
    copeWithFellowship: 'yes' | 'no';
    foreseeAbsence: 'yes' | 'no';
  }
  
  // Define the types for the Commitment to Fellowship form
  export interface CommitmentToFellowship {
    joinDate: string;
    attendPrograms: 'yes' | 'no';
    unitsBelongTo: string;
    readyToServe: 'yes' | 'no';
    commitmentHindrances: string;
    burdenForCACYOF: string;
  }
  
  // Define the types for the Marital Status form
  export interface MaritalStatus {
    engaged: 'yes' | 'no';
    engagedSince?: string;
    partnerName?: string;
    partnerAddress?: string;
    plansToEngage: 'yes' | 'no';
    pastRelationship: 'yes' | 'no';
  }
  
  // Define a type that combines all sections for the complete form data
  export interface FormData {
    personalData: PersonalData;
    academicStatus: AcademicStatus;
    commitmentToFellowship: CommitmentToFellowship;
    maritalStatus: MaritalStatus;
  }
  