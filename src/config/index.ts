interface Config {
  apiUrl: string
}

export const config: Config = {
  apiUrl: import.meta.env.API_JOKE,
}
