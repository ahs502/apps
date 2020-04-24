import content, { Section, Content } from '../content'
import { useLocation, useHistory } from 'react-router-dom'

export default function useSections(): Section[] {
  const location = useLocation()
  const history = useHistory()

  const codes = location.pathname.split('/').slice(1).filter(Boolean)
  let pathname = codes[0] === config.app ? `/${codes.shift()}` : ''
  if (codes.length === 0) {
    const defaultSection = content[0]
    history.push(`${pathname}/${defaultSection.code}`)
    return [defaultSection]
  }

  const sections: Section[] = []
  let sectionContent: Content = content
  while (codes.length) {
    const code = codes.shift()
    const nextSection = sectionContent.find(s => s.code === code)
    if (!nextSection) {
      history.push(pathname)
      return sections
    }
    pathname = `${pathname}/${nextSection.code}`
    sectionContent = nextSection.content || []
    sections.push(nextSection)
  }

  return sections
}
