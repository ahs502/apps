import persistant from './persistant'

/**
 * Checks authentication status, resolves `auth-code` from URL,
 * returns true iff the app is authenticated and allowed to continue running.
 */
export function authenticate(): boolean {
  const urlParams = new URLSearchParams(window.location.search)
  const authCodeFromUrl = urlParams.get('auth-code')
  const authCodeFromLocalStorage = persistant['auth-code']

  if (authCodeFromUrl) {
    persistant['auth-code'] = authCodeFromUrl
    window.history.replaceState(null, '', window.location.pathname)
  } else if (!authCodeFromLocalStorage) {
    window.location.href = `${config.loginUrl}?app=${config.app}&url=${window.location.origin}${window.location.pathname}`
    return false
  }
  return true
}

/**
 * Removes authentication and reloads the app,
 * pretty much redirecting it to the login page.
 */
export function logout(): void {
  delete persistant['auth-code']
  window.location.reload()
}
