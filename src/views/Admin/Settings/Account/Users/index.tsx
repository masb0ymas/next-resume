/* eslint-disable react/jsx-curly-newline */
import DeleteOutlined from '@ant-design/icons/DeleteOutlined'
import EditTwoTone from '@ant-design/icons/EditTwoTone'
import EyeTwoTone from '@ant-design/icons/EyeTwoTone'
import PlusOutlined from '@ant-design/icons/PlusOutlined'
import cssContent from '@nexys/components/Content/Content.module.scss'
import MyPagination from '@nexys/components/MyPagination/MyPagination'
import Table from '@nexys/components/Table/Table'
import ConstRoles from '@nexys/constants/ConstRoles'
import Lists from '@nexys/helpers/Lists'
import Paginations, { getNumber } from '@nexys/helpers/Paginations'
import formatPhone from '@nexys/helpers/Phone'
import useDebounce from '@nexys/hooks/useDebounce/useDebounce'
import useToggle from '@nexys/hooks/useToggle'
import {
  Button,
  Checkbox,
  Col,
  Input,
  Modal,
  notification,
  Popconfirm,
  Row,
  Select,
  Space,
} from 'antd'
import useProfile from 'data/useProfile'
import useRole from 'data/useRole'
import useUser from 'data/useUser'
import { get, isEmpty } from 'lodash'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import ApiCall from 'services/ApiCall'
import DetailUser from 'views/Admin/Settings/Account/Users/Detail'

interface UsersProps {
  defaultPage: number
}

const defaultData = {
  id: null,
  fullName: null,
  email: null,
  phone: null,
  picturePath: null,
  address: null,
  RoleId: null,
  Role: null,
  referralCode: null,
  createdAt: null,
  updatedAt: null,
  deletedAt: null,
}

function Users(props: UsersProps) {
  const defaultPage = get(props, 'defaultPage', 1)
  const defaultPageSize = 10
  const baseUrlPage = `/admin/settings/account/users`

  const [checked, setChecked] = useState([])
  const [isCheckedkAll, setIsCheckedkAll] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const [email, setEmail] = useState(undefined)
  const [phone, setPhone] = useState(undefined)

  const debouncedEmail = useDebounce(email, 500)
  const debouncedPhone = useDebounce(phone, 500)

  const initialToggle = false
  const stateToggle = useToggle({
    initialToggle,
    initialState: {
      visible: false,
      data: defaultData,
    },
  })

  const queryProfile = useProfile()

  const queryUser = useUser({
    query: {
      defaultValue: {
        page: Number(defaultPage),
        pageSize: defaultPageSize,
      },
    },
  })
  const { data, refetch, helpers, isLoading: queryLoading } = queryUser

  useEffect(() => {
    refetch()

    helpers.setQuery((helper) => {
      helper.query.set('page', undefined)
      helper.filtered.set('email', debouncedEmail)
      helper.filtered.set('phone', debouncedPhone)
    })
  }, [debouncedEmail, debouncedPhone])

  const queryRole = useRole({
    query: {
      defaultValue: {
        pageSize: 9999,
      },
    },
  })

  const optRole = Lists.transform(queryRole.data, 'name', 'id')

  function handleMultiCheck(e) {
    let selected = [...checked]
    const isCheck = e.target.checked

    for (let i = 0; i < data.length; i += 1) {
      const item = data[i]
      // checked or unchecked
      if (isCheck) {
        selected.push(item.id)
      } else {
        selected = []
      }
    }

    // pick unique item array
    const uniqSelected = [...new Set(selected)]

    setIsCheckedkAll(!isCheckedkAll)
    setChecked(uniqSelected)
  }

  function handleSingleCheck(id: string) {
    // index dari id yg dipilih didalam array checked
    // if key index >= 0 splice index else push ke checked
    const selected = [...checked]
    const keyIndex = selected.indexOf(id)

    if (keyIndex > -1) {
      selected.splice(keyIndex, 1)
    } else {
      selected.push(id)
    }
    setChecked(selected)
  }

  // Mutation Delete
  const multipleDelete = useMutation((listChecked: string | string[]) =>
    ApiCall.User.multipleForceDelete({ ids: listChecked }),
  )
  async function handleDelete(listChecked: string[]) {
    if (!isEmpty(listChecked)) {
      setIsLoading(true)

      try {
        const response = await multipleDelete.mutateAsync(listChecked)
        const message = get(response, 'data.message', '')
        notification.success({ message })
      } catch (error) {
        const description = error?.response?.data?.message
        notification.error({ message: 'Error', description })
      } finally {
        // refetch after delete data
        refetch()
        setIsCheckedkAll(false)
        setIsLoading(false)
        setChecked([])
        setIsVisible(false)
      }
    } else {
      setIsVisible(false)
      notification.warning({
        message: 'Select a data / record to be deleted',
      })
    }
  }

  const columns = [
    {
      Header: () => (
        <Checkbox
          onChange={(e) => handleMultiCheck(e)}
          checked={isCheckedkAll}
        />
      ),
      accessor: 'id',
      width: 70,
      Cell: (row) => {
        const { value } = row
        return (
          <Checkbox
            checked={checked.includes(value)}
            onChange={() => handleSingleCheck(value)}
          />
        )
      },
    },
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
      Header: 'Name',
      accessor: 'fullName',
      width: 180,
    },
    {
      Header: 'Email',
      accessor: 'email',
      width: 180,
    },
    {
      Header: 'Phone',
      accessor: 'phone',
      width: 180,
      Cell: (row) => {
        const { value } = row
        return formatPhone(value)
      },
    },
    {
      Header: 'Active',
      accessor: 'isActive',
      Cell: (row) => {
        const { value } = row
        return <Checkbox checked={value} />
      },
    },
    {
      Header: 'Role',
      accessor: 'Role.name',
      width: 180,
    },
    {
      Header: 'Detail',
      accessor: 'detail',
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
    {
      Header: 'Edit',
      accessor: 'edit',
      width: 70,
      Cell: (row) => {
        const { original } = row
        const page = helpers.getQueryById('page') || 1

        return (
          <Link
            href={`${baseUrlPage}/edit/${original?.id}?redirectUrl=${baseUrlPage}?page=${page}`}
          >
            <a>
              <Button type="link" icon={<EditTwoTone />} />
            </a>
          </Link>
        )
      },
    },
  ]

  return (
    <Space direction="vertical" style={{ width: '100%' }} size="middle">
      <Row gutter={[16, 16]}>
        <Col>
          <Input
            placeholder="Search Email"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            value={email}
          />
        </Col>

        <Col>
          <Input
            placeholder="Search Phone"
            onChange={(e) => {
              setPhone(e.target.value)
            }}
            value={phone}
          />
        </Col>

        <Col xs={5}>
          <Select
            options={optRole}
            placeholder="Choose Role"
            allowClear
            style={{ width: '100%' }}
            onChange={(value) => {
              queryUser.helpers.setQuery((helper) => {
                helper.query.set('page', undefined)
                helper.query.set('type', undefined)
                helper.filtered.set('RoleId', value)
              })
            }}
          />
        </Col>

        {/* Only Super Admin */}
        {queryProfile?.data?.RoleId === ConstRoles.ID_SUPER_ADMIN && (
          <Col flex="auto">
            <Popconfirm
              visible={isVisible}
              title="Are you sure to delete this user ?"
              onConfirm={() => handleDelete(checked)}
              onCancel={() => setIsVisible(!isVisible)}
              okText="Yes"
              cancelText="No"
            >
              <Button
                danger
                icon={<DeleteOutlined />}
                loading={isLoading}
                onClick={() => setIsVisible(true)}
              >
                Delete
              </Button>
            </Popconfirm>
          </Col>
        )}

        <Col flex="auto" />

        <Col>
          <Link href={`${baseUrlPage}/add`}>
            <a>
              <Button type="primary" icon={<PlusOutlined />}>
                Add
              </Button>
            </a>
          </Link>
        </Col>

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
          <MyPagination {...Paginations.getPaginationProps(queryUser)} />
        </Col>
      </Row>

      <Modal
        title="User Detail"
        onCancel={() => stateToggle.toggle({ visible: initialToggle })}
        width={700}
        footer={null}
        className={cssContent.contentModalHeader}
        {...stateToggle.state}
      >
        <DetailUser data={stateToggle.state.data} />
      </Modal>
    </Space>
  )
}

export default Users
