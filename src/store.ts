import * as path from 'path'
import keyFileStorage from 'key-file-storage'
import cryptoRandomString from 'crypto-random-string'

const store = keyFileStorage(path.join(__dirname, '..', 'data'), false)

type App = 'todo-list' | 'prayers-counter'
interface AuthenticationOptions {
  checkForIp?: boolean
  checkForAgent?: boolean
  lifeTime?: number
}
type Store_Auth_Password_$App = {
  password: string
  scope?: any
  authenticationOptions?: AuthenticationOptions
}[]
type Store_Auth_Sessions_$AuthCode = {
  app: App
  scope?: any
  ip?: string
  agent?: string
  createdAt: number
  expiresAt?: number
}
interface Store {
  auth: {
    passwords: {
      [app in App]: Store_Auth_Password_$App
    }
    sessions: {
      [authCode: string]: Store_Auth_Sessions_$AuthCode
    }
  }
}

/**
 * Logs in and generates the `authCode` if `password` for `app` is valid.
 * Otherwise, provides an empty string.
 * @param app App name
 * @param password Password from the user
 * @param ip Client IP
 * @param agent Client agent
 * @param authenticationOptions The authentication options if nothing is provided by the app password
 */
export async function login(app: App, password: string, ip: string, agent: string, authenticationOptions?: AuthenticationOptions): Promise<string> {
  const appPasswords: Store['auth']['passwords'][App] = await store(`auth/passwords/${app}`)
  const matchingAppPassword = appPasswords.find(appPassword => appPassword.password === password)
  if (!matchingAppPassword) return ''
  const allAuthCodePaths: string[] = await store('auth/sessions/')
  const allAuthCodes = allAuthCodePaths.map(p => p.replace('auth/sessions/', ''))
  let authCode: string
  do {
    authCode = cryptoRandomString({
      length: 24,
      characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    })
  } while (!allAuthCodes.includes(authCode))
  const options: AuthenticationOptions = matchingAppPassword.authenticationOptions || authenticationOptions || {}
  const session: Store['auth']['sessions'][string] = {
    app,
    scope: matchingAppPassword.scope,
    ip: options.checkForIp ? ip : '',
    agent: options.checkForAgent ? agent : '',
    createdAt: Date.now(),
    expiresAt: options.lifeTime ? Date.now() + options.lifeTime : undefined
  }
  await store(`auth/sessions/${authCode}`, session)
  return authCode
}

interface AuthCodeVerificationResult {
  verified?: true
  reason?: 'logged out' | 'app mismatched' | 'ip mismatched' | 'agent mismatched' | 'expired'
  scope?: any
}
/**
 * Verifies the client auth code and provides the scope.
 * @param app App name
 * @param authCode Client auth code
 * @param ip Client IP
 * @param agent Client agent
 */
export async function verifyAuthCode(app: App, authCode: string, ip: string, agent: string): Promise<AuthCodeVerificationResult> {
  const session: Store['auth']['sessions'][string] = await store(`auth/sessions/${authCode}`)
  if (!session) return { reason: 'logged out' }
  if (session.app !== app) return { reason: 'app mismatched' }
  if (session.ip && session.ip !== ip) return { reason: 'ip mismatched' }
  if (session.agent && session.agent !== agent) return { reason: 'agent mismatched' }
  if (session.expiresAt && session.expiresAt < Date.now()) return { reason: 'expired' }
  return {
    verified: true,
    scope: session.scope
  }
}

/**
 * Removes the corresponding session.
 * @param authCode Client auth code
 */
export async function logout(authCode: string): Promise<void> {
  await store(`auth/sessions/${authCode}`)
}
