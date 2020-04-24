import React from 'react'
import { Paper, Theme, Box, List, ListItem, Typography, Divider } from '@material-ui/core'
import { useTheme } from '@material-ui/styles'
import { useHistory } from 'react-router-dom'

import content from '../content'
import useSections from '../utils/use-sections'

interface Props {
  onClick?(): void
}

export default function SideMenu({ onClick }: Props) {
  // const [expandedSideMenuItemCode, setExpandedSideMenuItemCode] = useState<string | null>(null)
  const theme = useTheme<Theme>()
  const history = useHistory()

  const [section, subSection, subSubSection] = useSections()

  return (
    <Box minWidth={theme.spacing(30)}>
      <Paper square variant="outlined">
        <List>
          {content.flatMap(item => [
            <ListItem
              key={item.code}
              button
              onClick={() => {
                history.push(`/${item.code}`)
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
                onClick={() => {
                  history.push(`/${item.code}/${subItem.code}`)
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
                  onClick={() => {
                    history.push(`/${item.code}/${subItem.code}/${subSubItem.code}`)
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
              ))
            ]),
            item !== content[content.length - 1] && <Divider key={`${item.code} separator`} />
          ])}
        </List>
      </Paper>
    </Box>
  )
}
