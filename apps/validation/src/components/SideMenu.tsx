import React /* useState */ from 'react'
import { Paper, Theme, Box, List, ListItem, Typography, Divider } from '@material-ui/core'
import { useTheme } from '@material-ui/styles'
import { useLocation, useHistory } from 'react-router-dom'

import sideMenuItemsData from '../utils/side-menu-items-data'

interface Props {
  onClick?(): void
}

export default function SideMenu({ onClick }: Props) {
  // const [expandedSideMenuItemCode, setExpandedSideMenuItemCode] = useState<string | null>(null)
  const theme = useTheme<Theme>()
  const location = useLocation()
  const history = useHistory()

  const [itemCode, subItemCode, subSubItemCode] = location.pathname.split('/').slice(1)

  return (
    <Box minWidth={theme.spacing(30)}>
      <Paper square variant="outlined">
        <List>
          {sideMenuItemsData.flatMap(item => [
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
                color={item.code !== itemCode ? 'initial' : item.subItems?.some(({ code }) => code === subItemCode) ? 'primary' : 'secondary'}
              >
                {item.label}
              </Typography>
            </ListItem>,
            ...(item.subItems || []).flatMap(subItem => [
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
                      item.code !== itemCode || subItem.code !== subItemCode
                        ? 'initial'
                        : subItem.subItems?.some(({ code }) => code === subSubItemCode)
                        ? 'primary'
                        : 'secondary'
                    }
                  >
                    {subItem.label}
                  </Typography>
                </Box>
              </ListItem>,
              ...(subItem.subItems || []).map(subSubItem => (
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
                      color={item.code !== itemCode || subItem.code !== subItemCode || subSubItem.code !== subSubItemCode ? 'initial' : 'secondary'}
                    >
                      {subSubItem.label}
                    </Typography>
                  </Box>
                </ListItem>
              ))
            ]),
            item !== sideMenuItemsData[sideMenuItemsData.length - 1] && <Divider key={`${item.code} separator`} />
          ])}
        </List>
      </Paper>
    </Box>
  )
}
