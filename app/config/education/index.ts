import type { EducationData } from "~/types/education"

export const educationConfig: { title: string; data: EducationData } = {
  title: "Education",
  data: {
    education: [
      {
        degree: "Bachelor's in Computer Science",
        institution: "University of California, Riverside",
        location: "Riverside, CA",
        year: "June 2020",
      },
      {
        degree: "High School",
        institution: "Sage Hill School",
        location: "Newport Coast, CA",
        year: "June 2016",
      },
    ],
    period: "•",
  },
}
