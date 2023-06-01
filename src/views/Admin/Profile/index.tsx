import { Divider, Paper, Tabs } from '@mantine/core'
import { IconLockCog, IconUser } from '@tabler/icons-react'
import { useRouter } from 'next/router'
import PageHeader from '~/core/components/PageHeader'
import { capitalizeFirstLetter } from '~/core/helpers/String'
import ChangePasswordTab from './ChangePassword'
import UpdateProfileTab from './Update'

function ProfilePage() {
  const router = useRouter()
  const baseUrl = `/admin/profile`

  const subTitle = capitalizeFirstLetter(
    (router.query.tabs as string) || 'Update'
  )

  return (
    <Paper shadow="sm" p="xl" radius="md">
      <PageHeader title="Profile" subTitle={subTitle} />

      <Divider variant="dashed" my="xs" />

      <Tabs
        keepMounted={false}
        variant="pills"
        radius="md"
        orientation="vertical"
        defaultValue="update"
        value={router.query.tabs as string}
        onTabChange={(value) => router.push(`${baseUrl}?tabs=${value}`)}
        styles={(theme) => ({
          tab: {
            ...theme.fn.focusStyles(),
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.blue[0],
            color:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[0]
                : theme.colors.gray[9],
          },
        })}
      >
        <Tabs.List>
          <Tabs.Tab value="update" icon={<IconUser size={18} />}>
            Update
          </Tabs.Tab>
          <Tabs.Tab value="change-password" icon={<IconLockCog size={18} />}>
            Change Password
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="update" pl="xs">
          <UpdateProfileTab />
        </Tabs.Panel>

        <Tabs.Panel value="change-password" pl="xs">
          <ChangePasswordTab />
        </Tabs.Panel>
      </Tabs>
    </Paper>
  )
}

export default ProfilePage
