import { Divider, Group, Stack, Text } from '@mantine/core'
import { useStyleModal } from '~/core/components/MyModal/MyModal'
import { formatDateTime } from '~/core/helpers/Date'
import { RoleEntity } from '~/data/entities/Role'

function DetailSettingRoleModal({ data }: { data: RoleEntity }) {
  const { classes } = useStyleModal()

  return (
    <div>
      <Divider variant="solid" />

      <Stack mt="md">
        <Group>
          <Text className={classes.modalLabel} size="sm">
            Name
          </Text>
          <Text size="sm">{data.name}</Text>
        </Group>

        <Divider variant="dashed" />

        <Group>
          <Text className={classes.modalLabel} size="sm">
            Created At
          </Text>
          <Text size="sm">
            {data.createdAt && formatDateTime(data.createdAt)}
          </Text>
        </Group>
      </Stack>
    </div>
  )
}

export default DetailSettingRoleModal
