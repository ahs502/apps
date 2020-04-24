import { useLocation, useHistory } from 'react-router-dom'

import { extractPathname, intractPathname } from '../../../core/location'
import content, { Section, Content } from '../content'

export default function useSections(): Section[] {
  const location = useLocation()
  const history = useHistory()

  const codes = extractPathname(location.pathname).split('/').slice(1).filter(Boolean)
  if (codes.length === 0) {
    const defaultSection = content[0]
    history.push(intractPathname(`/${defaultSection.code}`))
    return [defaultSection]
  }

  const sections: Section[] = []
  let sectionContent: Content = content
  let pathname = ''
  while (codes.length) {
    const code = codes.shift()
    const nextSection = sectionContent.find(s => s.code === code)
    if (!nextSection) {
      history.push(intractPathname(pathname))
      return sections
    }
    pathname = `${pathname}/${nextSection.code}`
    sectionContent = nextSection.content || []
    sections.push(nextSection)
  }

  return sections
}
