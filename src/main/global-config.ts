const environment = import.meta.env.ENVIRONMENT

export const GlobalConfig = {
  apiHost: environment === "prod"
    ? import.meta.env.API_HOST_PROD
    : environment === "hml"
      ? import.meta.env.API_HOST_HML
      : import.meta.env.API_HOST_LOCAL

}