export type TechIcon = {
  icon: string
  name: string
}

export default interface IWorkItem {
  title: string
  content: string
  description: string
  description2?: string
  icon: string
  techIcons: TechIcon[]
}
