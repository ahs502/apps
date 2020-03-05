const formElement = document.getElementById('form')
const passwordElement = document.getElementById('password')
const submitElement = document.getElementById('submit')
const errorElement = document.getElementById('error')

const urlParams = new URLSearchParams(window.location.search)
const app = urlParams.get('app')

if (!app) {
  formElement.remove()
}

passwordElement.addEventListener('keydown', ({ keyCode }) => {
  clearError()
  keyCode === 13 && submit()
})
submitElement.addEventListener('click', () => submit())

function setError(error) {
  errorElement.innerText = String(error)
  errorElement.style.display = 'block'
}
function clearError() {
  errorElement.style.display = 'none'
}
function disable() {
  passwordElement.disabled = submitElement.disabled = true
}
function enable() {
  passwordElement.disabled = submitElement.disabled = false
  passwordElement.focus()
}
async function submit() {
  const password = passwordElement.value
  passwordElement.value = ''

  if (!password) {
    setError('No password.')
    return
  }

  disable()
  try {
    const request = await fetch(`/api/auth/login`, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ app, password })
    })
    const response = await request.json()

    if (!response.success) {
      setError('Wrong password.')
      enable()
      return
    }

    window.location.href = `${window.location.origin}/${app}?code=${response.authCode}`
  } catch (reason) {
    console.error(reason)
    setError(reason)
    enable()
  }
}
