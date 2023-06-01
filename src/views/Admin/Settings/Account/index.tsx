import { Divider, Paper, Tabs } from '@mantine/core'
import { IconAdjustmentsAlt, IconUsers } from '@tabler/icons-react'
import { useRouter } from 'next/router'
import PageHeader from '~/core/components/PageHeader'
import { capitalizeFirstLetter } from '~/core/helpers/String'
import AccountRoleTab from './Role'
import AccountUserTab from './User'

function SettingAccountPage() {
  const router = useRouter()
  const baseUrl = `/admin/settings/account`

  const subTitle = capitalizeFirstLetter(
    (router.query.tabs as string) || 'User'
  )

  return (
    <Paper shadow="sm" p="xl" radius="md">
      <PageHeader title="Account" subTitle={subTitle} />

      <Divider variant="dashed" my="xs" />

      <Tabs
        keepMounted={false}
        variant="pills"
        radius="md"
        my="sm"
        defaultValue="user"
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
        <Tabs.List grow>
          <Tabs.Tab value="user" icon={<IconUsers size={18} />}>
            User
          </Tabs.Tab>

          <Tabs.Tab value="role" icon={<IconAdjustmentsAlt size={18} />}>
            Role
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="user" pt="xs">
          <AccountUserTab />
        </Tabs.Panel>

        <Tabs.Panel value="role" pt="xs">
          <AccountRoleTab />
        </Tabs.Panel>
      </Tabs>
    </Paper>
  )
}

export default SettingAccountPage
