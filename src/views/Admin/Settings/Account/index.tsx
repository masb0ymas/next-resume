import cssContent from '@nexys/components/Content/Content.module.scss'
import { PageHeader, Space, Tabs } from 'antd'
import { capitalize, get } from 'lodash'
import Router, { NextRouter, withRouter } from 'next/router'
import React from 'react'
import Role from 'views/Admin/Settings/Account/Role'
import Session from 'views/Admin/Settings/Account/Session'
import Users from 'views/Admin/Settings/Account/Users'
import cssSetting from 'views/Admin/Settings/Settings.module.scss'

const { TabPane } = Tabs

interface SettingAccountProps {
  router: NextRouter
}

function SettingAccount(props: SettingAccountProps) {
  const { router } = props
  const { pathname } = router

  const baseUrl = '/admin/settings/account'
  const defaultPage = get(props, 'router.query.page', 1)
  const getPathname = pathname.replace(`${baseUrl}/`, '')
  const splitPathname = getPathname.split('-')
  const pageTabs = splitPathname.map((x) => capitalize(x)).join(' ')

  return (
    <Space direction="vertical" style={{ width: '100%' }} size="middle">
      <div id={cssContent.customPageHeader}>
        <PageHeader title="Account" subTitle={pageTabs} />
      </div>

      <div id={cssSetting.customTabsCard}>
        <Tabs
          defaultActiveKey={`${baseUrl}/users`}
          activeKey={pathname}
          onChange={(activeKey) => Router.push(activeKey)}
          type="card"
          size="middle"
        >
          <TabPane tab="Account" key={`${baseUrl}/users`}>
            <Users defaultPage={defaultPage} />
          </TabPane>

          <TabPane tab="Role" key={`${baseUrl}/role`}>
            <Role defaultPage={defaultPage} />
          </TabPane>

          <TabPane tab="Session Log" key={`${baseUrl}/session`}>
            <Session defaultPage={defaultPage} />
          </TabPane>
        </Tabs>
      </div>
    </Space>
  )
}

export default withRouter(SettingAccount)
