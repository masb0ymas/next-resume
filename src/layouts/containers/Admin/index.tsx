'use client'

/* eslint-disable react/jsx-no-constructed-context-values */
import { AppShell, Loader, useMantineTheme } from '@mantine/core'
import _ from 'lodash'
import { ReactComponentLike } from 'prop-types'
import React, { useState } from 'react'
import VerifyPage from '~/core/components/VerifyPage'
import { useAuthSession } from '~/core/hooks/useAuthSession/useAuthSession'
import AdminFooterLayout from './Footer'
import AdminHeaderLayout from './Header'
import AdminSidebarLayout from './Sidebar'

interface IProps {
  Component: ReactComponentLike
}

const AdminContext = React.createContext<
  {
    stateLayoutLoading: [boolean, (loading: boolean) => void]
  } & any
>({
  stateLayoutLoading: [false, () => {}],
})

/**
 *
 * @param props
 * @returns
 */
function AdminContainer(props: IProps) {
  const { Component } = props

  const userAuth = useAuthSession()

  const stateLayoutLoading = useState(false)
  const [isLayoutLoading] = stateLayoutLoading

  const theme = useMantineTheme()
  const [opened, setOpened] = useState(false)

  // authorize user
  if (_.isEmpty(userAuth.data)) {
    return <VerifyPage loading={userAuth.isFetching} />
  }

  return (
    <AdminContext.Provider value={{ stateLayoutLoading }}>
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint={opened ? 'sm' : 2560}
        navbar={<AdminSidebarLayout opened={opened} />}
        header={<AdminHeaderLayout opened={opened} setOpened={setOpened} />}
        footer={<AdminFooterLayout />}
      >
        {isLayoutLoading && <Loader />}
        {/* start render component */}

        <Component {...props} />

        {/* end render component */}
      </AppShell>
    </AdminContext.Provider>
  )
}

export default AdminContainer
