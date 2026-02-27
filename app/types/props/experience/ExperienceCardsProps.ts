interface ExperienceCardFront {
  subtext: string
}

interface ExperienceCardBack {
  title: string
  bullet: string
  subtext: string
}

interface ExperienceCard {
  front: ExperienceCardFront
  back: ExperienceCardBack
}

interface Experience {
  role: string
  company: string
  location: string
  period: string
  responsibilities: string[]
  image: string
}

export interface ExperienceCardsProps {
  data: {
    card: ExperienceCard
    experiences: Experience[]
  }
}
