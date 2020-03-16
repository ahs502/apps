declare interface Config {
  readonly app: string
  readonly loginUrl: string
}
declare const config: Config

declare interface Persistant {
  'auth-code'?: string
}
