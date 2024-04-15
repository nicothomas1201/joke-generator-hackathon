/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly API_JOKE: string
  // más variables de entorno...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
