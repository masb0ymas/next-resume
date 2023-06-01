import {
  Button,
  Checkbox,
  Divider,
  Grid,
  Paper,
  PasswordInput,
  Select,
  Text,
  TextInput,
} from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import { useDisclosure } from '@mantine/hooks'
import { showNotification } from '@mantine/notifications'
import { IconCheck } from '@tabler/icons-react'
import { useMutation } from '@tanstack/react-query'
import { get } from 'lodash'
import Router, { useRouter } from 'next/router'
import { useState } from 'react'
import MyLoadingOverlay from '~/core/components/MyLoadingOverlay'
import PageHeader from '~/core/components/PageHeader'
import Lists from '~/core/helpers/Lists'
import { UserAttributes } from '~/data/entities/User'
import useRole from '~/data/query/Role/useRole'
import useUserById from '~/data/query/User/useUserById'
import UserRepository from '~/data/repository/UserRepository'
import userSchema from '~/data/validation/master/user'

interface AbstractFormProps {
  initialValues: Record<string, any>
  validate: Record<string, any>
  isEdit?: boolean
  mutation: ReturnType<typeof useMutation<any, any, any, any>>
}

function AbstractForm({
  isEdit,
  mutation,
  initialValues,
  validate,
}: AbstractFormProps) {
  const [visible, setVisible] = useState<boolean>(false)
  const [visiblePass, { toggle: togglePass }] = useDisclosure(false)
  const [visibleCPass, { toggle: toggleCPass }] = useDisclosure(false)

  const baseURL = '/admin/settings/account?tabs=user'

  const form = useForm({
    initialValues,
    validate,
  })

  const queryRole = useRole({
    query: {
      defaultValue: {
        page: 1,
        pageSize: 999,
      },
    },
  })

  const optRole = Lists.transform(queryRole.data || [], 'name', 'id')

  const onFormSubmit = async () => {
    setVisible(true)

    try {
      const response = await mutation.mutateAsync(form.values)
      const message = get(response, 'data.message', '') as string
      showNotification({
        title: 'Submit Successfully',
        message,
        icon: <IconCheck size={16} />,
        color: 'green',
      })

      // redirect
      Router.push(baseURL)
    } catch (error) {
      const description = get(error, 'response.data.message', '')

      console.log(description)
    } finally {
      setVisible(false)
    }
  }

  return (
    <div style={{ position: 'relative' }}>
      <MyLoadingOverlay visible={visible} />

      <PageHeader
        title="Account"
        subTitle={`${isEdit ? 'Edit' : 'Add'} User`}
        onBack={() => Router.back()}
      />

      <Divider variant="dashed" my="sm" />

      <form onSubmit={form.onSubmit(onFormSubmit)}>
        <Grid gutter="xl" columns={24}>
          <Grid.Col xs={24} md={16}>
            <Paper shadow="sm" radius="md" p="lg">
              <Grid gutter="xl" columns={24}>
                <Grid.Col xs={24} md={12}>
                  <TextInput
                    required
                    label="Fullname"
                    placeholder="Your full name"
                    {...form.getInputProps('fullname')}
                  />
                </Grid.Col>

                <Grid.Col xs={24} md={12}>
                  <TextInput
                    required
                    label="Email"
                    placeholder="you@mantine.dev"
                    {...form.getInputProps('email')}
                  />
                </Grid.Col>

                <Grid.Col xs={24} md={12}>
                  <PasswordInput
                    label="Password"
                    required={!isEdit}
                    visible={visiblePass}
                    onVisibilityChange={togglePass}
                    placeholder="******"
                    {...form.getInputProps('newPassword')}
                  />
                </Grid.Col>

                <Grid.Col xs={24} md={12}>
                  <PasswordInput
                    label="Confirm password"
                    required={!isEdit}
                    visible={visibleCPass}
                    onVisibilityChange={toggleCPass}
                    placeholder="******"
                    {...form.getInputProps('confirmNewPassword')}
                  />
                </Grid.Col>

                <Grid.Col xs={24} md={12}>
                  <TextInput
                    label="Phone"
                    placeholder="0816442*****"
                    {...form.getInputProps('phone')}
                  />
                </Grid.Col>

                <Grid.Col xs={24} md={12}>
                  <Select
                    required
                    label="Role"
                    placeholder="Pilih Role"
                    data={optRole}
                    {...form.getInputProps('RoleId')}
                  />
                </Grid.Col>
              </Grid>
            </Paper>
          </Grid.Col>

          <Grid.Col xs={24} md={8}>
            <Paper shadow="sm" radius="md" p="lg">
              <Text mb="md" size="md" weight="bold">
                Action
              </Text>

              <Divider variant="dashed" />

              <Grid columns={24}>
                <Grid.Col xs={12}>
                  <Button
                    fullWidth
                    mt="xl"
                    radius="md"
                    color="red"
                    variant="light"
                    onClick={() => Router.push(baseURL)}
                  >
                    Back
                  </Button>
                </Grid.Col>

                <Grid.Col xs={12}>
                  <Button fullWidth mt="xl" radius="md" type="submit">
                    {isEdit ? 'Save Changes' : 'Save'}
                  </Button>
                </Grid.Col>
              </Grid>
            </Paper>

            <Divider my="lg" variant="dotted" />

            <Paper shadow="sm" radius="md" p="lg">
              <Text mb="md" size="md" weight="bold">
                Additional
              </Text>

              <Divider my="md" variant="dashed" />

              <Grid>
                <Grid.Col xs={24}>
                  <Checkbox
                    label="Active"
                    checked={form.values.isActive}
                    {...form.getInputProps('isActive')}
                  />
                </Grid.Col>

                <Grid.Col xs={24}>
                  <Checkbox
                    label="Block"
                    checked={form.values.isBlocked}
                    {...form.getInputProps('isBlocked')}
                  />
                </Grid.Col>
              </Grid>
            </Paper>
          </Grid.Col>
        </Grid>
      </form>
    </div>
  )
}

function FormAdd() {
  const createData = useMutation((data: UserAttributes) =>
    UserRepository.create(data)
  )

  return (
    <AbstractForm
      initialValues={{
        fullname: '',
        newPassword: '',
        email: '',
        RoleId: '',
        phone: '',
        confirmNewPassword: '',
        isActive: false,
      }}
      validate={yupResolver(userSchema.create)}
      mutation={createData}
    />
  )
}

function FormEdit() {
  const router = useRouter()
  const id = router?.query?.id
  const isEdit = Boolean(id)

  const queryUserById = useUserById(String(id), {}, { enabled: !!id })
  const { isLoading, remove, data } = queryUserById

  const updateData = useMutation(
    (data: UserAttributes) => UserRepository.update(String(id), data),
    {
      onSettled() {
        remove()
      },
    }
  )

  if (isLoading) {
    return (
      <div>
        <MyLoadingOverlay visible />
      </div>
    )
  }

  return (
    <AbstractForm
      initialValues={{
        ...data,
        newPassword: undefined,
        confirmNewPassword: undefined,
      }}
      validate={yupResolver(userSchema.create)}
      isEdit={isEdit}
      mutation={updateData}
    />
  )
}

export { FormAdd, FormEdit }
