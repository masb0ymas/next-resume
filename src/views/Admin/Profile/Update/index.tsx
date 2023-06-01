import {
  Avatar,
  Button,
  Center,
  FileInput,
  Grid,
  Stack,
  TextInput,
  rem,
} from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import {
  IconCheck,
  IconMail,
  IconPhone,
  IconUpload,
  IconUser,
  IconUserShield,
} from '@tabler/icons-react'
import { useMutation } from '@tanstack/react-query'
import _ from 'lodash'
import { useState } from 'react'
import MyLoadingOverlay from '~/core/components/MyLoadingOverlay'
import { useAuthSession } from '~/core/hooks/useAuthSession/useAuthSession'
import { UserAttributes } from '~/data/entities/User'
import UserRepository from '~/data/repository/UserRepository'
import userSchema from '~/data/validation/master/user'
import { queryClient } from '~/layouts/core'

function UpdateProfileTab() {
  const [visible, setVisible] = useState(false)

  const queryAuth = useAuthSession()

  const form = useForm({
    initialValues: {
      fullname: queryAuth.data?.fullname,
      email: queryAuth.data?.email,
      phone: queryAuth.data?.phone ?? '',
      roleAs: queryAuth.data?.Role.name ?? '',
      fileUpload: undefined,
    },
    validate: yupResolver(userSchema.update),
  })

  const updateData = useMutation(
    (data: UserAttributes) =>
      UserRepository.update(String(queryAuth.data?.id), data),
    {
      onSettled() {
        queryClient.invalidateQueries(['/user', '/user-by-id'])
      },
    }
  )

  const onFormSubmit = async () => {
    setVisible(true)

    try {
      const newFormData: any = {
        ...queryAuth.data,
        ...form.values,
        fullname: String(form.values.fullname),
        email: String(form.values.email),
        phone: String(form.values.phone),
      }

      const response = await updateData.mutateAsync(newFormData)
      const message = _.get(response, 'data.message', '') as string

      showNotification({
        title: 'Submit Successfully',
        message,
        icon: <IconCheck size={16} />,
        color: 'green',
      })
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
          <Grid.Col xs={24} sm={18}>
            <Grid columns={24}>
              <Grid.Col xs={12}>
                <TextInput
                  required
                  label="Fullname"
                  placeholder="Input Fullname"
                  icon={<IconUser size={16} />}
                  {...form.getInputProps('fullname')}
                />
              </Grid.Col>

              <Grid.Col xs={12}>
                <TextInput
                  required
                  label="Email"
                  placeholder="Input Email"
                  icon={<IconMail size={16} />}
                  {...form.getInputProps('email')}
                />
              </Grid.Col>

              <Grid.Col xs={12}>
                <TextInput
                  label="Phone"
                  placeholder="Input Phone"
                  icon={<IconPhone size={16} />}
                  {...form.getInputProps('phone')}
                />
              </Grid.Col>

              <Grid.Col xs={12}>
                <TextInput
                  label="Role As"
                  placeholder="Input Role As"
                  icon={<IconUserShield size={16} />}
                  disabled
                  {...form.getInputProps('roleAs')}
                />
              </Grid.Col>
            </Grid>
          </Grid.Col>

          <Grid.Col xs={24} sm={6}>
            <Stack>
              <Center>
                <Avatar
                  src="/static/no_image.jpg"
                  size={rem(60)}
                  radius={rem(30)}
                  alt="it's me"
                />
              </Center>

              <FileInput
                placeholder="Pilih File"
                label="File Upload"
                clearable
                variant="default"
                accept="image/*"
                icon={<IconUpload size={16} />}
                {...form.getInputProps('fileUpload')}
              />
            </Stack>
          </Grid.Col>

          <Grid.Col xs={24}>
            <Button radius="md" type="submit">
              Update
            </Button>
          </Grid.Col>
        </Grid>
      </form>
    </div>
  )
}

export default UpdateProfileTab
