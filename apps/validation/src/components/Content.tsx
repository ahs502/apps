import React from 'react'
import { Paper, Box } from '@material-ui/core'
import ReactMarkdown from 'react-markdown'

import content from '../content'
import useSections from '../utils/use-sections'

export default function Content() {
  const sections = useSections()

  function flattenMarkdowns(section: typeof content[number], parentKey: string = ''): { key: string; markdown: string }[] {
    return [
      {
        key: `${parentKey}/${section.code}`,
        markdown: section.markdown
      },
      ...(section.content || []).flatMap(subSection => flattenMarkdowns(subSection, `${parentKey}/${section.code}`))
    ]
  }
  const markdowns = flattenMarkdowns(sections[0])

  return (
    <>
      {markdowns.map(({ key, markdown }) => (
        <ReactMarkdown key={key} source={markdown} />
      ))}
    </>
  )
}
