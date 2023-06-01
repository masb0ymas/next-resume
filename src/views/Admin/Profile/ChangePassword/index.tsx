import { Button, Grid, PasswordInput } from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import { IconCheck, IconLock } from '@tabler/icons-react'
import { useMutation } from '@tanstack/react-query'
import _ from 'lodash'
import Router from 'next/router'
import { useState } from 'react'
import MyLoadingOverlay from '~/core/components/MyLoadingOverlay'
import UserRepository from '~/data/repository/UserRepository'
import userSchema from '~/data/validation/master/user'
import { queryClient } from '~/layouts/core'

function ChangePasswordTab() {
  const [visible, setVisible] = useState(false)

  const form = useForm({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
    validate: yupResolver(userSchema.changePassword),
  })

  const updateData = useMutation(
    (data: any) => UserRepository.changePassword(data),
    {
      onSettled() {
        queryClient.invalidateQueries(['/user', '/user-by-id'])
      },
    }
  )

  const onFormSubmit = async () => {
    setVisible(true)

    try {
      const response = await updateData.mutateAsync({ ...form.values })
      const message = _.get(response, 'data.message', '') as string

      showNotification({
        title: 'Submit Successfully',
        message,
        icon: <IconCheck size={16} />,
        color: 'green',
      })

      Router.push('/admin/profile')
    } catch (error) {
      const description = _.get(error, 'response.data.message', '')

      console.log(description)
    } finally {
      setVisible(false)
    }
  }

  return (
    <div style={{ padding: '1rem' }}>
      <MyLoadingOverlay visible={visible} />

      <form onSubmit={form.onSubmit(onFormSubmit)}>
        <Grid gutter="xl" columns={24} align="center">
          <Grid.Col xs={24} sm={12}>
            <PasswordInput
              required
              label="Current Password"
              placeholder="Input Current password"
              icon={<IconLock size={16} />}
              {...form.getInputProps('currentPassword')}
            />
          </Grid.Col>

          <Grid.Col xs={24} sm={12}>
            <PasswordInput
              required
              label="New Password"
              placeholder="Input New password"
              icon={<IconLock size={16} />}
              {...form.getInputProps('newPassword')}
            />
          </Grid.Col>

          <Grid.Col xs={24} sm={12}>
            <PasswordInput
              required
              label="Confirm New Password"
              placeholder="Input Confirm New password"
              icon={<IconLock size={16} />}
              {...form.getInputProps('confirmNewPassword')}
            />
          </Grid.Col>

          <Grid.Col xs={24}>
            <Button radius="md" type="submit">
              Save
            </Button>
          </Grid.Col>
        </Grid>
      </form>
    </div>
  )
}

export default ChangePasswordTab
