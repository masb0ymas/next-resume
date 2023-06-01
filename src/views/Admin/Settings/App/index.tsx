import { Divider, Paper, Tabs } from '@mantine/core'
import { IconBell, IconMessage2Question } from '@tabler/icons-react'
import { useRouter } from 'next/router'
import EmptyTab from '~/core/components/MyTabs/EmptyTab'
import PageHeader from '~/core/components/PageHeader'
import { capitalizeFirstLetter } from '~/core/helpers/String'

function SettingAppPage() {
  const router = useRouter()
  const baseUrl = `/admin/settings/app`

  const subTitle = capitalizeFirstLetter(
    (router.query.tabs as string) || 'Notification'
  )

  return (
    <Paper shadow="sm" p="xl" radius="md">
      <PageHeader title="Application" subTitle={subTitle} />

      <Divider variant="dashed" my="xs" />

      <Tabs
        keepMounted={false}
        variant="pills"
        radius="md"
        my="sm"
        defaultValue="notification"
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
          <Tabs.Tab value="notification" icon={<IconBell size={18} />}>
            Notification
          </Tabs.Tab>

          <Tabs.Tab value="faq" icon={<IconMessage2Question size={18} />}>
            FAQ
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="notification" pt="xs">
          <EmptyTab />
        </Tabs.Panel>

        <Tabs.Panel value="faq" pt="xs">
          <EmptyTab />
        </Tabs.Panel>
      </Tabs>
    </Paper>
  )
}

export default SettingAppPage
