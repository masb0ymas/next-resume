import { Button, Divider, Grid, Input } from '@mantine/core'
import { useDebouncedValue } from '@mantine/hooks'
import { openModal } from '@mantine/modals'
import { IconPlus, IconSearch } from '@tabler/icons-react'
import { useMutation } from '@tanstack/react-query'
import { DataTableColumn } from 'mantine-datatable'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useStyleModal } from '~/core/components/MyModal/MyModal'
import MyTable from '~/core/components/MyTable/MyTable'
import { RoleEntity } from '~/data/entities/Role'
import useRole from '~/data/query/Role/useRole'
import RoleRepository from '~/data/repository/RoleRepository'
import { queryClient } from '~/layouts/core'
import DetailSettingRoleModal from './Detail'

function AccountRoleTab() {
  const { classes } = useStyleModal()

  const [page, setPage] = useState(1)
  const [pageSize] = useState(10)

  const [name, setName] = useState(undefined)
  const [debouncedName] = useDebouncedValue(name, 500)

  const baseURL = '/admin/settings/account/role'

  const queryData = useRole({
    query: {
      defaultValue: {
        page,
        pageSize,
      },
    },
  })

  const { helpers } = queryData

  useEffect(() => {
    helpers.setQuery((helper) => {
      helper.query.set('page', undefined)
      helper.filtered.set('name', debouncedName)
    })
  }, [debouncedName])

  useEffect(() => {
    helpers.setQuery((helper) => {
      helper.query.set('page', page ?? 1)
    })
  }, [page])

  // Mutation Delete
  const softDelete = useMutation(
    (id: string) => RoleRepository.softDelete(id),
    {
      onSettled() {
        queryClient.invalidateQueries(['/role'])
      },
    }
  )

  // Mutation Multiple Delete
  const multipleSoftDelete = useMutation(
    (listChecked: string | string[]) =>
      RoleRepository.multipleSoftDelete({ ids: listChecked }),
    {
      onSettled() {
        queryClient.invalidateQueries(['/role'])
      },
    }
  )

  const columns: DataTableColumn<RoleEntity>[] = [
    {
      accessor: 'name',
      title: 'Name',
      textAlignment: 'center',
    },
  ]

  return (
    <div>
      <Divider variant="dashed" />

      <Grid my={12}>
        <Grid.Col span={3}>
          <Input
            icon={<IconSearch size={16} />}
            placeholder="Search..."
            onChange={(e: any) => setName(e.target.value)}
          />
        </Grid.Col>

        <Grid.Col span="auto" />

        <Grid.Col span={2} style={{ textAlign: 'right' }}>
          <Link href={`${baseURL}/add`}>
            <Button leftIcon={<IconPlus size={18} />}>Add</Button>
          </Link>
        </Grid.Col>
      </Grid>

      <MyTable<RoleEntity>
        baseURL={baseURL}
        columns={columns}
        query={queryData}
        page={page}
        onPageChange={setPage}
        recordsPerPage={pageSize}
        showModalDetail={(info: RoleEntity) => {
          openModal({
            centered: true,
            title: `Detail Role`,
            classNames: { title: classes.modalTitle },
            children: <DetailSettingRoleModal data={info} />,
          })
        }}
        // @ts-expect-error
        selectedMutation={softDelete}
        // @ts-expect-error
        multiSelectedMutation={multipleSoftDelete}
      />
    </div>
  )
}

export default AccountRoleTab
