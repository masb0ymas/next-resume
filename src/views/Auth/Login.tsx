import {
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
  createStyles,
} from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import { IconCheck, IconLockOpen, IconMail } from '@tabler/icons-react'
import { useMutation } from '@tanstack/react-query'
import _ from 'lodash'
import Link from 'next/link'
import Router from 'next/router'
import { useState } from 'react'
import { BRAND, LOCAL_STORAGE_SESSION } from '~/config/env'
import { ColorSchemeToggle } from '~/core/components/ColorSchemeToggle/ColorSchemeToggle'
import MyLoadingOverlay from '~/core/components/MyLoadingOverlay'
import { useAuthSession } from '~/core/hooks/useAuthSession/useAuthSession'
import { LoginAttributes } from '~/data/entities/User'
import AuthRepository from '~/data/repository/AuthRepository'
import authSchema from '~/data/validation/auth'

const useStyles = createStyles(() => ({
  rootLink: {
    fontWeight: 500,
    textDecoration: 'none',
  },
}))

function LoginPage() {
  const { classes } = useStyles()
  const [visible, setVisible] = useState(false)

  const userAuth = useAuthSession()

  const form = useForm({
    initialValues: { password: '', email: '' },

    // functions will be used to validate values at corresponding key
    validate: yupResolver(authSchema.login),
  })

  const postLogin = useMutation((data: LoginAttributes) =>
    AuthRepository.login(data)
  )

  const onFormSubmit = async () => {
    setVisible(true)
    try {
      const response = await postLogin.mutateAsync(form.values)
      const message = _.get(response, 'data.message', '') as string
      const fullname = _.get(response, 'data.fullname', 'John Doe') as string
      const accessToken = _.get(response, 'data.accessToken', {}) as string

      // save session
      localStorage.setItem(LOCAL_STORAGE_SESSION, accessToken)

      // show notif
      showNotification({
        title: `Welcome back, ${fullname}`,
        message,
        color: 'green',
        withCloseButton: false,
        icon: <IconCheck size={16} />,
      })

      // direct success login
      Router.push('/admin/dashboard')
    } catch (error) {
      const errMessage = _.get(error, 'response.data.message', '')

      console.log(error, errMessage)
    } finally {
      setVisible(false)
    }
  }

  if (!_.isEmpty(userAuth.data)) {
    Router.push('/admin/dashboard')
  }

  return (
    <Container size={420} my={100}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        {BRAND}
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        {`Do not have an account yet? `}

        <Link href="/register" className={classes.rootLink}>
          <Text size="sm">Create account</Text>
        </Link>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <MyLoadingOverlay visible={visible} />

        <form onSubmit={form.onSubmit(onFormSubmit)}>
          <TextInput
            label="Email"
            placeholder="you@mantine.dev"
            icon={<IconMail size={18} />}
            required
            {...form.getInputProps('email')}
          />

          <PasswordInput
            label="Password"
            placeholder="Your password"
            mt="sm"
            icon={<IconLockOpen size={18} />}
            required
            {...form.getInputProps('password')}
          />

          <Group position="apart" mt="md">
            <Checkbox label="Remember me" />

            <Link href="/forgot-password" className={classes.rootLink}>
              <Text size="sm">Forgot password?</Text>
            </Link>
          </Group>

          <Button fullWidth mt="xl" type="submit" loading={visible}>
            Sign in
          </Button>
        </form>
      </Paper>

      <ColorSchemeToggle />
    </Container>
  )
}

export default LoginPage
