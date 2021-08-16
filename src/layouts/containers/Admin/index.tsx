import Content from '@nexys/components/Content/Content'
import VerifyPage from '@nexys/components/VerifyPage/VerifyPage'
import { Layout, Spin } from 'antd'
import useProfile from 'data/useProfile'
import Footer from 'layouts/containers/Admin/Footer/Footer'
import Header from 'layouts/containers/Admin/Header'
import Sidebar from 'layouts/containers/Admin/Sidebar'
import Router from 'next/router'
import { ReactComponentLike } from 'prop-types'
import React, { useEffect, useState } from 'react'

interface IProps {
  Component: ReactComponentLike
}

export const AdminContext = React.createContext<
  {
    stateLayoutLoading: [boolean, (loading: boolean) => void]
  } & any
>({
  stateLayoutLoading: [false, () => {}],
})

function AdminContainer(props: IProps) {
  const { Component } = props
  const queryProfile = useProfile()
  const stateLayoutLoading = useState(false)
  const [isLayoutLoading] = stateLayoutLoading

  useEffect(() => {
    if (queryProfile.isLoading) {
      return
    }

    if (queryProfile.error?.response?.status !== 401) {
      return
    }

    queryProfile.remove()
    Router.push('/')
  }, [
    queryProfile.error?.response?.status,
    queryProfile.isLoading,
    queryProfile.dataUpdatedAt,
  ])

  if (queryProfile.isLoading) {
    return <VerifyPage loading={queryProfile.isLoading} title="Loading..." />
  }

  return (
    <AdminContext.Provider
      value={{
        stateLayoutLoading,
      }}
    >
      <Layout style={{ height: 'auto', minHeight: '100%' }}>
        <Spin spinning={isLayoutLoading} size="large" tip="Logging Out...">
          <Layout style={{ maxWidth: 1440, minHeight: '100vh' }}>
            <Sidebar />

            <Layout style={{ minHeight: '100vh', margin: 'auto' }}>
              <Header />

              <Content
                style={{
                  minHeight: '100vh',
                  background: '#f0f2f5',
                  height: '100%',
                  padding: 31,
                }}
                styleContainer={{ width: '100%' }}
              >
                <Component {...props} />
              </Content>

              <Footer />
            </Layout>
          </Layout>
        </Spin>
      </Layout>
    </AdminContext.Provider>
  )
}

export default AdminContainer
