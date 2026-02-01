export interface ApiResponse<T> {
    message: string;
    code: number;
    data: T;
}

export interface Profile {
    id: number;
    fullName: string;
    title: string;
    shortIntro: string;
    biography: string;
    careerObjective: string;
    profileImageUrl: string;
    email: string;
    phone: string;
    location: string;
}

export interface Education {
    institutionName: string;
    degree: string;
    fieldOfStudy: string;
    startYear: string;
    endYear: string;
    description: string;
}

export interface Skill {
    name: string;
    category: "TECHNICAL" | "SOFT";
    level: number; // 0 - 100
}

export interface Experience {
    role: string;
    company: string;
    startDate: string;
    endDate: string;
    type: "INTERNSHIP" | "JOB" | "VOLUNTEER";
    description: string;
}

export interface Certification {
    name: string;
    issuer: string;
    year: string;
    credentialUrl: string;
}

export interface SocialLink {
    platform: string; // LinkedIn, GitHub, Facebook
    url: string;
}

export interface Project {
    title: string;
    description: string;
    imageUrl: string;
    githubUrl?: string | null;
    demoUrl?: string | null;
    technologies: string[];
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export interface ContactMessageRequest {
  name: string;
  email: string;
  message: string;
}
