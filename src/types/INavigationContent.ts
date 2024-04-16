export interface NavButton {
  title: string
  url: string
  icon: string
}

export interface INavigationContent {
  data: {
    title: string
    description: string
    image: string
    buttons: NavButton[]
    copyright: string
  }
}
