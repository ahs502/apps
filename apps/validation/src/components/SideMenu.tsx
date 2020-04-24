import React from 'react'
import { Paper, Theme, Box, List, ListItem, Typography, Divider } from '@material-ui/core'
import { useTheme } from '@material-ui/styles'
import { useHistory, useLocation } from 'react-router-dom'

import content from '../content'
import useSections from '../utils/use-sections'
import { intractPathname } from '../../../core/location'

interface Props {
  onClick?(): void
}

export default function SideMenu({ onClick }: Props) {
  // const [expandedSideMenuItemCode, setExpandedSideMenuItemCode] = useState<string | null>(null)
  const theme = useTheme<Theme>()
  const location = useLocation()
  const history = useHistory()

  const [section, subSection, subSubSection] = useSections()

  return (
    <Box minWidth={theme.spacing(30)}>
      <Paper square variant="outlined">
        <Box paddingY={2}>
          <List>
            {content.flatMap(item => [
              <ListItem
                key={item.code}
                button
                selected={item.code === section?.code && !item.content?.some(({ code }) => code === subSection?.code)}
                onClick={() => {
                  history.push(intractPathname(`/${item.code}`))
                  onClick?.()
                }}
              >
                <Typography
                  variant="h5"
                  color={item.code !== section?.code ? 'initial' : item.content?.some(({ code }) => code === subSection?.code) ? 'primary' : 'secondary'}
                >
                  {item.label}
                </Typography>
              </ListItem>,
              ...(item.content || []).flatMap(subItem => [
                <ListItem
                  key={`${item.code}/${subItem.code}`}
                  button
                  dense
                  selected={
                    item.code === section?.code && subItem.code === subSection?.code && !subItem.content?.some(({ code }) => code === subSubSection?.code)
                  }
                  onClick={() => {
                    history.push(intractPathname(`/${item.code}/${subItem.code}`))
                    onClick?.()
                  }}
                >
                  <Box paddingLeft={4}>
                    <Typography
                      variant="h6"
                      color={
                        item.code !== section?.code || subItem.code !== subSection?.code
                          ? 'initial'
                          : subItem.content?.some(({ code }) => code === subSubSection?.code)
                          ? 'primary'
                          : 'secondary'
                      }
                    >
                      {subItem.label}
                    </Typography>
                  </Box>
                </ListItem>,
                ...(subItem.content || []).map(subSubItem => (
                  <ListItem
                    key={`${item.code}/${subItem.code}/${subSubItem.code}`}
                    button
                    dense
                    selected={item.code === section?.code && subItem.code === subSection?.code && subSubItem.code === subSubSection?.code}
                    onClick={() => {
                      history.push(intractPathname(`/${item.code}/${subItem.code}/${subSubItem.code}`))
                      onClick?.()
                    }}
                  >
                    <Box paddingLeft={8}>
                      <Typography
                        variant="subtitle1"
                        color={
                          item.code !== section?.code || subItem.code !== subSection?.code || subSubItem.code !== subSubSection?.code ? 'initial' : 'secondary'
                        }
                      >
                        {subSubItem.label}
                      </Typography>
                    </Box>
                  </ListItem>
                )),
                item.content && subItem !== item.content[item.content.length - 1] && <Box key={`${item.code}/${subItem.code} separator`} marginBottom={1} />
              ]),
              item !== content[content.length - 1] && <Box key={`${item.code} separator`} marginBottom={2} />
            ])}
          </List>
        </Box>
      </Paper>
    </Box>
  )
}
