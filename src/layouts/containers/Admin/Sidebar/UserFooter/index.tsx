import {
  Avatar,
  Box,
  createStyles,
  Group,
  Menu,
  Text,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { showNotification } from '@mantine/notifications'
import {
  IconCheck,
  IconChevronLeft,
  IconChevronRight,
  IconLogout,
  IconUser,
  IconX,
} from '@tabler/icons-react'
import { useMutation } from '@tanstack/react-query'
import _ from 'lodash'
import Router from 'next/router'
import { LOCAL_STORAGE_SESSION } from '~/config/env'
import { getInitialName } from '~/core/helpers/Formatter'
import { useAuthSession } from '~/core/hooks/useAuthSession/useAuthSession'
import useVerifySession from '~/data/query/useVerifySession'
import AuthRepository from '~/data/repository/AuthRepository'

const useStyles = createStyles(() => ({
  elipsis: {
    width: 115,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
}))

function UserFooter() {
  const { classes } = useStyles()

  const theme = useMantineTheme()
  const match = useMediaQuery('(max-width: 980px)')

  const userAuth = useAuthSession()
  const { remove } = useVerifySession()

  const postLogout = useMutation(() =>
    AuthRepository.logout({ UserId: String(userAuth?.data?.id) })
  )

  async function handleLogout() {
    try {
      const response = await postLogout.mutateAsync()
      const message = _.get(response, 'data.message', '')

      // remove session
      localStorage.removeItem(LOCAL_STORAGE_SESSION)
      remove() // remove cache react query

      // show notif
      showNotification({
        title: `See you again!`,
        message,
        color: 'green',
        withCloseButton: false,
        icon: <IconCheck size={16} />,
      })

      // direct success login
      Router.push('/login')
    } catch (error) {
      const errMessage = _.get(error, 'response.data.message', '')

      showNotification({
        title: 'Error',
        message: errMessage,
        icon: <IconX size={16} />,
        color: 'red',
      })
    }
  }

  return (
    <Box
      sx={{
        paddingTop: theme.spacing.sm,
        borderTop: `1px solid ${
          theme.colorScheme === 'dark'
            ? theme.colors.dark[4]
            : theme.colors.gray[2]
        }`,
      }}
    >
      <UnstyledButton
        sx={{
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        }}
      >
        <Menu
          withArrow
          transitionProps={{ transition: 'pop', duration: 150 }}
          position={match ? 'top-end' : 'right'}
        >
          <Menu.Target>
            <Group>
              {!match && (
                <Avatar color="cyan" radius="xl">
                  {userAuth.data && getInitialName(userAuth.data?.fullname)}
                </Avatar>
              )}

              {userAuth.data && (
                <Box sx={{ flex: 1 }}>
                  <Text size="sm" weight={500} className={classes.elipsis}>
                    {`Hi, ${userAuth?.data?.fullname}`}
                  </Text>
                  <Text color="dimmed" size="xs" className={classes.elipsis}>
                    {userAuth?.data?.email}
                  </Text>
                </Box>
              )}

              {theme.dir === 'ltr' ? (
                <IconChevronRight size={18} />
              ) : (
                <IconChevronLeft size={18} />
              )}
            </Group>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item
              aria-label="profile"
              icon={<IconUser size={16} stroke={1.5} />}
              onClick={() => Router.push('/admin/profile')}
            >
              Profile
            </Menu.Item>
            <Menu.Item
              aria-label="logout"
              icon={<IconLogout size={16} stroke={1.5} />}
              color="red"
              onClick={() => handleLogout()}
            >
              Logout
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </UnstyledButton>
    </Box>
  )
}

export default UserFooter
