/* eslint-disable react/jsx-curly-newline */
import React, { useEffect, useState } from 'react'
import { Button, Col, Row, Modal, Space, Input } from 'antd'
import Paginations, { getNumber } from '@nexys/helpers/Paginations'
import EyeTwoTone from '@ant-design/icons/EyeTwoTone'
import MyPagination from '@nexys/components/MyPagination/MyPagination'
import { get } from 'lodash'
import useToggle from '@nexys/hooks/useToggle'
import cssContent from '@nexys/components/Content/Content.module.scss'
import useDebounce from '@nexys/hooks/useDebounce/useDebounce'
import useVehicleRate from 'data/useVehicleRate'
import DetailVehicleRate from 'views/Admin/Settings/Master/VehicleRate/Detail'
import TableFixedColumns from '@nexys/components/Table/TableFixedColumns'

interface VehicleRateProps {
  defaultPage: number
}

function VehicleRate(props: VehicleRateProps) {
  const defaultPage = get(props, 'defaultPage', 1)
  const defaultPageSize = 10

  const [title, setTitle] = useState(undefined)
  const debouncedTitle = useDebounce(title, 500)

  const initialToggle = false
  const stateToggle = useToggle({
    initialToggle,
    initialState: {
      visible: false,
      data: {
        id: null,
        platArea: null,
        wilayahOJK: null,
        tarif_TSFWD_Compre: null,
        tarif_TSFWD_TLO: null,
        tarif_EQ_Compre: null,
        tarif_EQ_TLO: null,
        '1C_0-125': null,
        '2C_>_125-200': null,
        '3C_>_200-400': null,
        '4C_>_400-800': null,
        '5C_>_800': null,
        '1TLO_0-125': null,
        '2TLO_>_125-200': null,
        '3TLO_>_200-400': null,
        '4TLO_>_400-800': null,
        '5TLO_>_800': null,
        SRCC_Com: null,
        SRCC_TLO: null,
        TS_Com: null,
        TS_TLO: null,
        R2TLO: null,
        keterangan: null,
        createdAt: null,
        updatedAt: null,
        deletedAt: null,
      },
    },
  })

  const queryVehicleRate = useVehicleRate({
    query: {
      defaultValue: {
        page: Number(defaultPage),
        pageSize: defaultPageSize,
      },
    },
  })
  const { data, refetch, helpers, isLoading: queryLoading } = queryVehicleRate

  useEffect(() => {
    refetch()

    helpers.setQuery((helper) => {
      helper.query.set('page', undefined)
      helper.filtered.set('platArea', debouncedTitle)
    })
  }, [debouncedTitle])

  const columns = [
    {
      Header: 'No.',
      accessor: 'no',
      width: 70,
      Cell: (row) => {
        const { index, pageSize } = row
        const page = helpers.getQueryById('page')
        return getNumber(page, pageSize, index)
      },
    },
    {
      Header: 'Plat Area',
      accessor: 'platArea',
    },
    {
      Header: 'Wilayah OJK',
      accessor: 'wilayahOJK',
      width: 200,
    },
    {
      Header: 'Tarif TSFWD Compre',
      accessor: 'tarif_TSFWD_Compre',
      width: 180,
    },
    {
      Header: 'Tarif TSFWD TLO',
      accessor: 'tarif_TSFWD_TLO',
      width: 180,
    },
    {
      Header: 'Tarif EQ Compre',
      accessor: 'tarif_EQ_Compre',
      width: 180,
    },
    {
      Header: 'Tarif EQ TLO',
      accessor: 'tarif_EQ_TLO',
      width: 180,
    },
    {
      Header: '1C 0-125',
      accessor: '1C_0-125',
      width: 150,
    },
    {
      Header: '2C > 125-200',
      accessor: '2C_>_125-200',
      width: 150,
    },
    {
      Header: '3C > 200-400',
      accessor: '3C_>_200-400',
      width: 150,
    },
    {
      Header: '4C > 400-800',
      accessor: '4C_>_400-800',
      width: 150,
    },
    {
      Header: '5C > 800',
      accessor: '5C_>_800',
      width: 150,
    },
    {
      Header: '1TLO 0-125',
      accessor: '1TLO_0-125',
      width: 150,
    },
    {
      Header: '2TLO > 125-200',
      accessor: '2TLO_>_125-200',
      width: 150,
    },
    {
      Header: '3TLO > 200-400',
      accessor: '3TLO_>_200-400',
      width: 150,
    },
    {
      Header: '4TLO > 400-800',
      accessor: '4TLO_>_400-800',
      width: 150,
    },
    {
      Header: '5TLO > 800',
      accessor: '5TLO_>_800',
      width: 150,
    },
    {
      Header: 'SRCC Com',
      accessor: 'SRCC_Com',
      width: 150,
    },
    {
      Header: 'SRCC TLO',
      accessor: 'SRCC_TLO',
      width: 150,
    },
    {
      Header: 'TS Com',
      accessor: 'TS_Com',
      width: 150,
    },
    {
      Header: 'TS TLO',
      accessor: 'TS_TLO',
      width: 150,
    },
    {
      Header: 'R2TLO',
      accessor: 'R2TLO',
      width: 150,
    },
    {
      Header: 'Keterangan',
      accessor: 'keterangan',
      width: 250,
    },
    {
      Header: 'Detail',
      accessor: 'detail',
      fixed: 'right',
      width: 70,
      Cell: (row) => {
        const { original } = row
        return (
          <Button
            onClick={() =>
              stateToggle.toggle({
                visible: !initialToggle,
                data: original,
              })
            }
            type="link"
            icon={<EyeTwoTone twoToneColor="#52c41a" />}
          />
        )
      },
    },
  ]

  return (
    <Space direction="vertical" style={{ width: '100%' }} size="middle">
      <Row gutter={[16, 16]}>
        <Col>
          <Input
            placeholder="Search Plat Area"
            onChange={(e) => {
              setTitle(e.target.value)
            }}
            value={title}
          />
        </Col>

        <Col xs={24}>
          <TableFixedColumns
            columns={columns}
            data={data}
            defaultPageSize={defaultPageSize}
            className="-highlight"
            loading={queryLoading}
          />
        </Col>

        <Col xs={24} style={{ textAlign: 'right' }}>
          <MyPagination {...Paginations.getPaginationProps(queryVehicleRate)} />
        </Col>
      </Row>

      <Modal
        title="Vehicle Rate Detail"
        onCancel={() => stateToggle.toggle({ visible: initialToggle })}
        width={700}
        footer={null}
        className={cssContent.contentModalHeader}
        {...stateToggle.state}
      >
        <DetailVehicleRate data={stateToggle.state.data} />
      </Modal>
    </Space>
  )
}

export default VehicleRate
