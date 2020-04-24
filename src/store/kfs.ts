import * as path from 'path'
import keyFileStorage from 'key-file-storage'

const storagePath =
  process.env['STORAGE_PATH'] ||
  (process.env['RELATIVE_STORAGE_PATH'] && path.join(__dirname, '../..', process.env['RELATIVE_STORAGE_PATH'])) ||
  path.join(__dirname, '../..', 'data')
console.log('>>'.yellow.bold, 'Storage path is'.yellow, storagePath.yellow.bold)

const kfs = keyFileStorage(storagePath, false)

export default kfs

export interface Store {
  readonly auth: {
    readonly passwords: {
      readonly [app in App]: JsonFile<
        {
          readonly password: string
          readonly scope?: any
          readonly authenticationOptions?: AuthenticationOptions
        }[]
      >
    }
    readonly sessions: {
      readonly [authCode: string]: JsonFile<{
        readonly app: App
        readonly scope?: any
        readonly ip?: string
        readonly agent?: string
        readonly createdAt: number
        readonly expiresAt?: number
      }>
    }
  }
  readonly books: {
    readonly [bookName: string]: JsonFile<{
      readonly version: 1
      readonly timestamp: number
      readonly idBase: number
      readonly list: {
        readonly id: number
        readonly title: string
        readonly checked?: boolean
      }[]
    }>
  }
  readonly validation: {
    readonly visits: JsonFile<{
      readonly count: number
      readonly year: {
        readonly [year: number]: {
          readonly count: number
          readonly month: {
            readonly [month: number]: {
              readonly count: number
              readonly day: {
                readonly [day: number]: number
              }
            }
          }
        }
      }
    }>
  }
}

export type App = 'website' | 'todo-list' | 'validation' //TODO: Add all apps here.

export interface AuthenticationOptions {
  readonly checkForIp?: boolean
  readonly checkForAgent?: boolean
  readonly lifeTime?: number
}

type JsonFile<T> = T | null
