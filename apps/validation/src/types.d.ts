declare interface Config {}

declare interface Persistant {}

declare module '*.md' {
  const value: string
  export default value
}

declare interface VisitStatus {
  total: number
  year: number
  month: number
  day: number
  thisYear: number
  thisMonth: number
  thisDay: number
}
