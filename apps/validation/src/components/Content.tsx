import React, { useEffect } from 'react'
import { Box, Theme } from '@material-ui/core'
import { useTheme } from '@material-ui/styles'
import ReactMarkdown from 'react-markdown'

import content from '../content'
import useSections from '../utils/use-sections'
import { intractPathname } from '../../../core/location'

export default function Content() {
  const theme = useTheme<Theme>()
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

  const intendedKey = '/' + sections.map(({ code }) => code).join('/')
  useEffect(() => {
    if (intendedKey === markdowns[0].key) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = window.document.getElementById(intendedKey)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [intendedKey])

  return (
    <>
      {/* {markdowns.map(({ key, markdown }) => (
        <Box key={key} id={key} paddingTop={2}>
          <Box position="relative" top={theme.spacing(8)}>
            <ReactMarkdown source={markdown} />
          </Box>
        </Box>
      ))} */}
      <Box textAlign="center" paddingTop={20}>
        <img src={intractPathname('/under-construction.png')} alt="This page is under construction." />
      </Box>
      <Box key="margin buttom" marginBottom={16} />
    </>
  )
}
