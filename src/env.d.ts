/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly ENVIRONMENT: string
  readonly API_HOST_LOCAL: string
  readonly API_HOST_HML: string
  readonly API_HOST_PROD: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
