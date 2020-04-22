declare interface Config {}

declare interface Persistant {}

declare interface Book {
  readonly name: string
  readonly version: 1
  readonly timestamp: number
  readonly list: {
    readonly id: number
    readonly title: string
    readonly checked?: boolean
  }[]
}
