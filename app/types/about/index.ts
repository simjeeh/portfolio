export interface Resume {
  text: string
  url: string
}

export interface ProfileCardData {
  name: string
  image: string
  job: string
  location: string
  resume: Resume
}

export interface AboutConfig {
  title: string
  profile: ProfileCardData
}
