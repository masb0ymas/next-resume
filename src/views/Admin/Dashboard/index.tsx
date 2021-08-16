import SolutionOutlined from '@ant-design/icons/SolutionOutlined'
import TeamOutlined from '@ant-design/icons/TeamOutlined'
import cssContent from '@nexys/components/Content/Content.module.scss'
import { Col, PageHeader, Row, Space, Statistic } from 'antd'
import React from 'react'

function Dashboard() {
  return (
    <Space direction="vertical" style={{ width: '100%' }} size="middle">
      <div id={cssContent.customPageHeader}>
        <PageHeader title="Dashboard" subTitle="Statistics" />
      </div>

      <Row gutter={16}>
        <Col xs={24} sm={12} md={12} lg={6}>
          <div className={cssContent.contentPage}>
            <Statistic
              title="Product"
              value={10}
              valueStyle={{ color: '#209eee' }}
              prefix={<SolutionOutlined />}
            />
          </div>
        </Col>

        <Col xs={24} sm={12} md={12} lg={6}>
          <div className={cssContent.contentPage}>
            <Statistic
              title="Active Users"
              value={210}
              prefix={<TeamOutlined />}
            />
          </div>
        </Col>
      </Row>
    </Space>
  )
}

export default Dashboard
