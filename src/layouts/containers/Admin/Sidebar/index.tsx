import { Navbar, ScrollArea } from '@mantine/core'
import React from 'react'
import AdminNavbarMenus from './NavbarMenu'
import UserFooter from './UserFooter'

interface AdminSidebarLayoutProps {
  opened: boolean
}

function AdminSidebarLayout(props: AdminSidebarLayoutProps) {
  const { opened } = props

  return (
    <Navbar
      p="md"
      hiddenBreakpoint={2560}
      hidden={!opened}
      width={{ sm: 240, md: 260 }}
    >
      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        <AdminNavbarMenus />
      </Navbar.Section>

      <Navbar.Section>
        <UserFooter />
      </Navbar.Section>
    </Navbar>
  )
}

export default AdminSidebarLayout
