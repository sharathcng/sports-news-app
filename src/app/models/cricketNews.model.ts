export interface CricketNewsData {
  storyList: StoryList[]
}

export interface StoryList {
  story: Story
}

export interface Story {
  id: string
  hline: string
  intro: string
  pubTime: string
  source: string
  storyType: string
  imageId: string
  seoHeadline: string
  context: string
  coverImage: CoverImage
}

export interface CoverImage {
  id: string
  caption: string
  source: string
}
