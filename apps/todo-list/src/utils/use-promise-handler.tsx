import React, { useState } from 'react'
import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

export default function usePromiseHandler() {
  const [error, setError] = useState<string | null>(null)

  async function handlePromise<T>(
    makePromise: () => Promise<T>,
    makeErrorMessage?: (reason: any) => string
  ): Promise<{ success: true; result: T } | { success: false }> {
    try {
      const result = await makePromise()
      setError(null)
      return { success: true, result }
    } catch (reason) {
      console.error(reason)
      setError(makeErrorMessage ? makeErrorMessage(reason) : String(reason))
      return { success: false }
    }
  }

  const errorSnackbar = (
    <Snackbar open={!!error} autoHideDuration={5000} onClose={() => setError(null)}>
      <Alert severity="error" onClose={() => setError(null)}>
        {error}
      </Alert>
    </Snackbar>
  )

  return {
    handlePromise,
    errorSnackbar
  }
}
