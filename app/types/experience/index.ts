export interface ExperienceCardFront {
  subtext: string
}

export interface ExperienceCardBack {
  title: string
  bullet: string
  subtext: string
}

export interface ExperienceCard {
  front: ExperienceCardFront
  back: ExperienceCardBack
}

export interface Experience {
  role: string
  company: string
  location: string
  period: string
  responsibilities: string[]
  image: string
}
