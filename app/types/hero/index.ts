export type SocialIcon = "github" | "linkedin" | "mail"

export interface SocialLink {
  icon: SocialIcon
  href: string
  label: string
}

export interface ScrollData {
  text: string
  subtext: string
  target: string
}

export interface HeroConfig {
  name: string
  title: string
  backgroundImage: string
  socialLinks: SocialLink[]
  scrollDown: ScrollData
}
