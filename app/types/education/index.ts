export interface Education {
  degree: string
  institution: string
  location: string
  year: string
}

export interface EducationData {
  education: Education[]
  period: string
}
