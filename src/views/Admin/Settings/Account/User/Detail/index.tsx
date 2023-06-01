import { Checkbox, Divider, Group, Stack, Text } from '@mantine/core'
import { UserEntity } from '~/data/entities/User'
import { useStyleModal } from '~/core/components/MyModal/MyModal'
import { formatDateTime } from '~/core/helpers/Date'
import formatPhone from '~/core/helpers/Phone'

function DetailSettingUserModal({ data }: { data: UserEntity }) {
  const { classes } = useStyleModal()

  return (
    <div>
      <Divider variant="solid" />

      <Stack mt="md">
        <Group>
          <Text className={classes.modalLabel} size="sm">
            Fullname
          </Text>
          <Text size="sm">{data.fullname}</Text>
        </Group>

        <Group>
          <Text className={classes.modalLabel} size="sm">
            Email
          </Text>
          <Text size="sm">{data.email}</Text>
        </Group>

        <Group>
          <Text className={classes.modalLabel} size="sm">
            Phone
          </Text>
          <Text size="sm">{formatPhone(data.phone)}</Text>
        </Group>

        <Group>
          <Text className={classes.modalLabel} size="sm">
            Active
          </Text>
          <Checkbox checked={data?.isActive} />
        </Group>

        <Group>
          <Text className={classes.modalLabel} size="sm">
            Block
          </Text>
          <Checkbox checked={data?.isBlocked} />
        </Group>

        <Group>
          <Text className={classes.modalLabel} size="sm">
            Role
          </Text>
          <Text size="sm">{data.Role?.name}</Text>
        </Group>

        <Divider variant="dashed" />

        <Group>
          <Text className={classes.modalLabel} size="sm">
            Register At
          </Text>
          <Text size="sm">
            {data.createdAt && formatDateTime(data.createdAt)}
          </Text>
        </Group>
      </Stack>
    </div>
  )
}

export default DetailSettingUserModal
