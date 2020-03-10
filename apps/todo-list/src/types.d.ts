declare const config: {
  readonly app: string
  readonly loginUrl: string
}

declare interface Persistant {
  'auth-code'?: string
}

declare interface Book {
  readonly name: string
  readonly version: 1
  readonly timestamp: number
  readonly idBase: number
  readonly list: {
    readonly id: number
    readonly title: string
    readonly checked?: boolean
  }[]
}
