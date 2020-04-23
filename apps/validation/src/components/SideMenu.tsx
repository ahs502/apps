import React from 'react'
import { Paper } from '@material-ui/core'

interface Props {
  onClose?(): void
}

export default function SideMenu({ onClose }: Props) {
  return (
    <Paper>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
    </Paper>
  )
}
