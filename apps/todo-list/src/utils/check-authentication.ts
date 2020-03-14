import persistant from './persistant'

export default function checkAuthentication(): void {
  const urlParams = new URLSearchParams(window.location.search)
  const authCodeFromUrl = urlParams.get('auth-code')
  const authCodeFromLocalStorage = persistant['auth-code']

  if (authCodeFromUrl) {
    persistant['auth-code'] = authCodeFromUrl
    window.history.replaceState(null, '', window.location.pathname)
  } else if (!authCodeFromLocalStorage) {
    window.location.href = `${config.loginUrl}/auth/login/?app=${config.app}&url=${window.location.origin}`
  }
}
