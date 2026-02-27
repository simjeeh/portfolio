interface ProjectCardsFront {
  subtext: string
}

interface ProjectCardsBack {
  techStack: string
  code: string
  live: string
  subtext: string
}

interface ProjectCards {
  front: ProjectCardsFront
  back: ProjectCardsBack
}

interface Projects {
  title: string
  description: string
  techStack: string[]
  code: string
  live: string
  image: string
}

export interface ProjectCardsProps {
  data: {
    card: ProjectCards
    projects: Projects[]
  }
}
