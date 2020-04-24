/**
 * Removes the app name from the pathname in production.
 * @param locationPathname The real pathname from window.location.
 */
export function extractPathname(locationPathname: string): string {
  const appPrefix = `/${config.app}`
  if (config.env !== 'development' && locationPathname.startsWith(appPrefix)) return locationPathname.replace(appPrefix, '')
  return locationPathname
}

/**
 * Adds the app name to the pathname in production.
 * @param realPathname The real pathname without app name.
 */
export function intractPathname(realPathname: string): string {
  const appPrefix = `/${config.app}`
  if (config.env !== 'development') return `${appPrefix}/${realPathname}`
  return realPathname
}
