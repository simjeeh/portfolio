interface Resume {
  text: string
  url: string
}

export interface ProfileCardProps {
  data: {
    name: string
    image: string
    job: string
    location: string
    resume: Resume
  }
}
