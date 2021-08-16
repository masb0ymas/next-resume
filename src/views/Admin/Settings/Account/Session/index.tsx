import MyPagination from '@nexys/components/MyPagination/MyPagination'
import Table from '@nexys/components/Table/Table'
import Paginations, { getNumber } from '@nexys/helpers/Paginations'
import { Col, Row } from 'antd'
import useSession from 'data/useSession'
import { get } from 'lodash'
import React, { useEffect } from 'react'

interface SessionProps {
  defaultPage: number
}

function Session(props: SessionProps) {
  const defaultPage = get(props, 'defaultPage', 1)
  const defaultPageSize = 10

  const querySession = useSession({
    query: {
      defaultValue: {
        page: Number(defaultPage),
        pageSize: defaultPageSize,
      },
    },
  })
  const { data, refetch, helpers, isLoading: queryLoading } = querySession

  useEffect(() => {
    refetch()
  }, [])

  const columns = [
    {
      Header: 'No',
      accessor: 'no',
      width: 70,
      Cell: (row) => {
        const { index, pageSize } = row
        const page = helpers.getQueryById('page')
        return getNumber(page, pageSize, index)
      },
    },
    {
      Header: 'Name',
      accessor: 'User.fullName',
    },
    {
      Header: 'Device',
      accessor: 'device',
    },
    {
      Header: 'IP Address',
      accessor: 'ipAddress',
    },
    {
      Header: 'Platform',
      accessor: 'platform',
    },
  ]

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24}>
        <Table
          columns={columns}
          data={data}
          defaultPageSize={defaultPageSize}
          className="-highlight"
          loading={queryLoading}
        />
      </Col>

      <Col xs={24} style={{ textAlign: 'right' }}>
        <MyPagination {...Paginations.getPaginationProps(querySession)} />
      </Col>
    </Row>
  )
}

export default Session
