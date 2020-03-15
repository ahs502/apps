import persistant from './persistant'

export function apiFetch(method: 'GET' | 'POST' | 'DELETE' | 'PUT', path: string, body?: any) {
  return fetch(`/api/${path}`, {
    method,
    headers: {
      'auth-code': persistant['auth-code']!,
      'Content-Type': 'application/json'
    },
    body: body ? JSON.stringify(body) : undefined
  })
}
