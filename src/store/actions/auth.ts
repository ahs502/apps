import * as cryptoRandomString from 'crypto-random-string'

import kfs, { Store, App, AuthenticationOptions } from '../kfs'

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
  const appPasswords: Store['auth']['passwords'][App] = await kfs(`auth/passwords/${app}`)
  const matchingAppPassword = appPasswords && appPasswords.find(appPassword => appPassword.password === password)
  if (!matchingAppPassword) return ''
  const allAuthCodePaths: string[] = await kfs('auth/sessions/')
  const allAuthCodes = allAuthCodePaths.map(p => p.replace('auth/sessions/', ''))
  let authCode: string
  do {
    authCode = cryptoRandomString({
      length: 8,
      characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    })
  } while (allAuthCodes.includes(authCode))
  const options: AuthenticationOptions = matchingAppPassword.authenticationOptions ||
    authenticationOptions || {
      checkForAgent: true,
      lifeTime: 356 * 24 * 60 * 60 * 1000 // 1 year
    }
  const session: Store['auth']['sessions'][string] = {
    app,
    scope: matchingAppPassword.scope,
    ip: options.checkForIp ? ip : '',
    agent: options.checkForAgent ? agent : '',
    createdAt: Date.now(),
    expiresAt: options.lifeTime ? Date.now() + options.lifeTime : undefined
  }
  await kfs(`auth/sessions/${authCode}`, session)
  return authCode
}

interface AuthCodeVerificationResult {
  verified?: true
  reason?: 'logged out' | 'app mismatched' | 'ip mismatched' | 'agent mismatched' | 'expired'
  scope?: any
}
/**
 * Verifies the client auth code and provides the scope.
 * If verification fails, logs out automatically.
 * @param app App name
 * @param authCode Client auth code
 * @param ip Client IP
 * @param agent Client agent
 */
export async function verifyAuthCode(app: App, authCode: string, ip: string, agent: string): Promise<AuthCodeVerificationResult> {
  const session: Store['auth']['sessions'][string] = authCode ? await kfs(`auth/sessions/${authCode}`) : null
  const result = verify()
  if (!result.verified) {
    await logout(authCode)
  }
  return result

  function verify(): AuthCodeVerificationResult {
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
}

/**
 * Removes the corresponding session.
 * @param authCode Client auth code
 */
export async function logout(authCode: string): Promise<void> {
  await new kfs(`auth/sessions/${authCode}`)
}
