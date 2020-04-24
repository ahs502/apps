import persistant from './persistant'
import { logout } from './auth'

export async function apiRequest<R = void>(method: 'GET' | 'POST' | 'DELETE' | 'PUT', path: string, body?: any, textResult?: boolean): Promise<R> {
  const response = await fetch(`/api/${path}`, {
    method,
    headers: {
      'auth-code': persistant['auth-code']!,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  if (response.status === 401) {
    logout()
    return null as any
  }

  if (!response.ok) throw new Error(`${response.statusText} (${response.status}): ${await response.text()}`)

  return await (textResult ? response.text() : response.json())
}
