import React, { useState } from 'react'
import { Container, Box, Theme, Hidden, Drawer } from '@material-ui/core'
import { useTheme } from '@material-ui/styles'

import Header from './components/Header'
import SideMenu from './components/SideMenu'
import Content from './components/Content'

export default function App() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false)
  const theme = useTheme<Theme>()

  return (
    <Box>
      <Header onSideMenuClick={() => setSideMenuOpen(true)} />

      {/* Fixed side menu for wider displays */}
      <Hidden mdDown>
        <Box position="fixed" top={theme.spacing(8)} bottom={0} left={0} overflow="auto">
          <SideMenu onClose={() => setSideMenuOpen(false)} />
        </Box>
      </Hidden>

      {/* Drawer side menu for smaller displays */}
      <Hidden lgUp>
        <Drawer anchor="left" open={sideMenuOpen} onClose={() => setSideMenuOpen(false)}>
          <SideMenu onClose={() => setSideMenuOpen(false)} />
        </Drawer>
      </Hidden>

      <Box display="flex">
        {/* Fixed side menu placeholder */}
        <Hidden mdDown>
          <Box flex={`0 0 ${theme.spacing(25)}px`} />
        </Hidden>

        <Container maxWidth="lg">
          <Content />
        </Container>
      </Box>
    </Box>
  )
}
