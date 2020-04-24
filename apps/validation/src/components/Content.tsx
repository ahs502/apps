import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { Paper, Box } from '@material-ui/core'
import ReactMarkdown from 'react-markdown'

import content from '../content'

export default function Content() {
  const location = useLocation()
  const history = useHistory()

  const [sectionCode, subSectionCode, subSubSectionCode, ...otherParams] = location.pathname.split('/').slice(1)

  const sectionIndex = content.findIndex(({ code }) => code === sectionCode)
  const subSectionIndex = content[sectionIndex]?.content?.findIndex(({ code }) => code === subSectionCode) ?? -1
  const subSubSectionIndex = content[sectionIndex]?.content?.[subSectionIndex]?.content?.findIndex(({ code }) => code === subSubSectionCode) ?? -1

  if (
    !sectionCode ||
    (sectionCode && sectionIndex < 0) ||
    (subSectionCode && subSectionIndex < 0) ||
    (subSubSectionCode && subSubSectionIndex < 0) ||
    otherParams.length
  ) {
    history.push('/introduction')
    return null
  }

  function flattenMarkdowns(section: typeof content[number], parentKey: string = ''): { key: string; markdown: string }[] {
    return [
      {
        key: `${parentKey}/${section.code}`,
        markdown: section.markdown
      },
      ...(section.content || []).flatMap(subSection => flattenMarkdowns(subSection, `${parentKey}/${section.code}`))
    ]
  }
  const markdowns = flattenMarkdowns(content[sectionIndex])

  return (
    <>
      {markdowns.map(({ key, markdown }) => (
        <ReactMarkdown key={key} source={markdown} />
      ))}
    </>
  )
}
