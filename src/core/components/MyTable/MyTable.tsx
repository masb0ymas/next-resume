import { ActionIcon, Group, Tooltip } from '@mantine/core'
import { IconEdit, IconEye, IconTrash, IconTrashX } from '@tabler/icons-react'
import { DataTable, DataTableColumn } from 'mantine-datatable'
import Router from 'next/router'
import { useState } from 'react'
import { openMultiSelectedModal, openSelectModal } from '../MyModal/MyModal'
import { MyTableEntity } from './interface'

function MyTable<T>(props: MyTableEntity<T>) {
  const {
    query,
    columns,
    baseURL,
    selectedMutation,
    multiSelectedMutation,
    showModalDetail,
    isEdit = true,
    isDeleted = true,
    ...otherProps
  } = props

  const { data, total, isFetching } = query

  const [selectedRecords, setSelectedRecords] = useState<T[]>([])

  // custom columns
  const defaultColumns: DataTableColumn<T | any>[] = [
    ...columns,
    {
      accessor: 'actions',
      title: 'Actions',
      textAlignment: 'center',
      width: 100,
      render: (info) => {
        const id = String(info.id)

        return (
          <Group spacing={4} position="center" noWrap>
            {/* Check Edit */}
            {isEdit && (
              <Tooltip
                transitionProps={{ transition: 'pop', duration: 300 }}
                label="Edit"
              >
                <ActionIcon
                  size="lg"
                  color="blue"
                  component="a"
                  href={`${baseURL}/${id}/edit`}
                >
                  <IconEdit size={22} />
                </ActionIcon>
              </Tooltip>
            )}

            {/* Check Deleted */}
            {isDeleted && (
              <Tooltip
                transitionProps={{ transition: 'pop', duration: 300 }}
                label="Hapus"
              >
                <ActionIcon
                  size="lg"
                  color="red"
                  onClick={() =>
                    // @ts-expect-error
                    openSelectModal({ id, mutation: selectedMutation, query })
                  }
                >
                  <IconTrash size={22} />
                </ActionIcon>
              </Tooltip>
            )}
          </Group>
        )
      },
    },
  ]

  let newColumns: DataTableColumn<T | any>[] = []

  if (!isEdit && !isDeleted) {
    newColumns = [...columns]
  } else {
    newColumns = defaultColumns
  }

  return (
    <DataTable
      withBorder
      minHeight={300}
      borderRadius="md"
      withColumnBorders
      striped={false}
      highlightOnHover
      verticalAlignment="center"
      verticalSpacing="md"
      horizontalSpacing="md"
      fetching={isFetching}
      columns={newColumns}
      records={data ?? []}
      totalRecords={total}
      selectedRecords={selectedRecords}
      onSelectedRecordsChange={setSelectedRecords}
      rowContextMenu={{
        borderRadius: 'md',
        items: (info) => [
          {
            key: 'detail',
            icon: <IconEye size={16} />,
            title: `Detail`,
            onClick: () => showModalDetail(info),
          },
          {
            key: 'edit',
            icon: <IconEdit size={16} />,
            title: `Edit`,
            hidden: !isEdit,
            // @ts-ignore
            onClick: () => Router.push(`${baseURL}/${info.id}/edit`),
          },
          {
            key: 'delete',
            title: `Delete`,
            icon: <IconTrashX size={16} />,
            color: 'red',
            hidden:
              !isDeleted ||
              (selectedRecords.length !== 0 && selectedRecords.length > 1),
            onClick: () =>
              openSelectModal({
                id: info.id,
                // @ts-expect-error
                mutation: selectedMutation,
                query,
              }),
          },
          // @ts-ignore
          { key: 'divider-1', divider: true, color: 'gray' },
          {
            key: 'deleteMany',
            hidden:
              !isDeleted ||
              selectedRecords.length <= 1 ||
              // @ts-ignore
              !selectedRecords.map((r) => r.id).includes(info.id),
            title: `Delete ${selectedRecords.length} selected records`,
            icon: <IconTrash size={16} />,
            color: 'red',
            onClick: () =>
              openMultiSelectedModal({
                // @ts-expect-error
                ids: selectedRecords?.map((e) => e.id),
                // @ts-expect-error
                mutation: multiSelectedMutation,
                query,
              }),
          },
        ],
      }}
      {...otherProps}
    />
  )
}

export default MyTable
