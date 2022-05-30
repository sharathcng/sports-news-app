export interface UpcomingData {
  matchScheduleMap: MatchScheduleMap[]
}

export interface MatchScheduleMap {
  scheduleAdWrapper: ScheduleAdWrapper
}

export interface ScheduleAdWrapper {
  date: string
  matchScheduleList: MatchScheduleList[]
}

export interface MatchScheduleList {
  seriesName: string
  matchInfo: MatchInfo[]
  seriesId: number
}

export interface MatchInfo {
  matchId: number
  seriesId: number
  matchDesc: string
  matchFormat: string
  startDate: string
  endDate: string
  team1: Team1
  team2: Team2
  venueInfo: VenueInfo
}

export interface Team1 {
  teamId: number
  teamName: string
  teamSName: string
  imageId: number
}

export interface Team2 {
  teamId: number
  teamName: string
  teamSName: string
  imageId: number
}

export interface VenueInfo {
  ground: string
  city: string
  timezone: string
}
