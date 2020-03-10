import persistant from './persistant'

export const authenticationHeader = {
  'auth-code': persistant['auth-code']!
}

export const authenticationJsonContentHeaders = {
  ...authenticationHeader,
  'Content-Type': 'application/json'
}
