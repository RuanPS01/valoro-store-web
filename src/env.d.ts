/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AUTHENTICATION_API_HOST: string
  readonly VITE_PATH_LOGIN: string
  readonly VITE_PRODUCTS_API_HOST: string
  readonly VITE_PATH_LIST_PRODUCTS: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
