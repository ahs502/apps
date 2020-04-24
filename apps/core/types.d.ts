declare interface Config {
  readonly app: string
  readonly env: 'development' | 'production'
  readonly loginUrl: string
}
declare const config: Config

declare interface Persistant {
  'auth-code'?: string
}
