import React from 'react'
import { PageHeader, Space, Tabs } from 'antd'
import { capitalize, get } from 'lodash'
import Router, { NextRouter, withRouter } from 'next/router'
import cssSetting from 'views/Admin/Settings/Settings.module.scss'
import cssContent from '@nexys/components/Content/Content.module.scss'
import VehicleRate from 'views/Admin/Settings/Master/VehicleRate'

const { TabPane } = Tabs

interface SettingMasterProps {
  router: NextRouter
}

function SettingMaster(props: SettingMasterProps) {
  const { router } = props
  const { pathname } = router

  const baseUrl = '/admin/settings/master-data'
  const defaultPage = get(props, 'router.query.page', 1)
  const getPathname = pathname.replace(`${baseUrl}/`, '')
  const splitPathname = getPathname.split('-')
  const pageTabs = splitPathname.map((x) => capitalize(x)).join(' ')

  return (
    <Space direction="vertical" style={{ width: '100%' }} size="middle">
      <div id={cssContent.customPageHeader}>
        <PageHeader title="Master Data" subTitle={pageTabs} />
      </div>

      <div id={cssSetting.customTabsCard}>
        <Tabs
          defaultActiveKey={`${baseUrl}/vehicle-rate`}
          activeKey={pathname}
          onChange={(activeKey) => Router.push(activeKey)}
          type="card"
          size="middle"
        >
          <TabPane tab="Vehicle Rate" key={`${baseUrl}/vehicle-rate`}>
            <VehicleRate defaultPage={defaultPage} />
          </TabPane>
        </Tabs>
      </div>
    </Space>
  )
}

export default withRouter(SettingMaster)
