declare interface Config {}

declare interface Persistant {}

declare module '*.md' {
  const value: string
  export default value
}
