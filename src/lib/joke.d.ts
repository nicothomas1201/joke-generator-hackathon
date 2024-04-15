export interface Flags {
  nsfw: boolean
  religious: boolean
  political: boolean
  racist: boolean
  sexist: boolean
  explicit: boolean
}

export interface JokeData {
  error: boolean
  category: string
  type: string
  joke: string
  flags: Flags
  safe: boolean
  id: number
  lang: string
}
