import type IWorkItem from './IWorkItem'
import type IWorkWithCompany from './IWorkWithCompany'

export default interface HomePageContent {
  data: {
    hero: {
      image: string
      title: string
      description: string
    }
    work: {
      title: string
      description: string
      sections: IWorkItem[]
    }
    workWith: {
      title: string
      companies: IWorkWithCompany[]
    }
  }
}
