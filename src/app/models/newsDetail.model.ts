export interface NewsDetailData {
  id: number
  context: string
  headline: string
  publishTime: string
  coverImage: CoverImage
  content: Content[]
  authors: Author[]
  appIndex: AppIndex
  storyType: string
  lastUpdatedTime: string
  intro: string
  source: string
}

export interface CoverImage {
  id: string
  caption: string
  source: string
}

export interface Content {
  content: Content2
}

export interface Content2 {
  contentType: string
  contentValue: string
}

export interface Author {
  id: number
  name: string
  imageId: number
}

export interface AppIndex {
  seoTitle: string
  webURL: string
}
