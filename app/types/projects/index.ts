export interface Project {
  id?: string | number
  title: string
  image: string
  description: string
  techStack: string[]
  code?: string
  live?: string
}

export interface ProjectCardConfig {
  front: { subtext: string }
  back: {
    subtext: string
    techStack: string
    code: string
    live: string
  }
}
