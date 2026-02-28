export interface NavLink {
  id: string
  label: string
}

export interface NavbarConfig {
  leftAlignText: string
  navLinks: NavLink[]
}
