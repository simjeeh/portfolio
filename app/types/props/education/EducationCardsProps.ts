interface Education {
  degree: string
  institution: string
  location: string
  year: string
}

export interface EducationCardsProps {
  data: {
    education: Education[],
    period: string
  }
}
