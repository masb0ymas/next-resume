import ActionForm from '@nexys/components/ActionForm/ActionForm'
import cssContent from '@nexys/components/Content/Content.module.scss'
import LoadingForm from '@nexys/components/Loading/partials/LoadingForm'
import Text from '@nexys/components/Typography/Text'
import FCheckbox from '@nexys/fields/FCheckbox/FCheckbox'
import FInput from '@nexys/fields/FInput/FInput'
import FInputPassword from '@nexys/fields/FInputPassword/FInputPassword'
import FSelect from '@nexys/fields/FSelect/FSelect'
import Lists from '@nexys/helpers/Lists'
import { Col, Divider, notification, PageHeader, Row, Space, Spin } from 'antd'
import useRole from 'data/useRole'
import useUserById from 'data/useUserById'
import { Form, Formik } from 'formik'
import { get } from 'lodash'
import Router from 'next/router'
import React from 'react'
import { useMutation } from 'react-query'
import ApiCall from 'services/ApiCall'
import userSchema from 'validations/accounts/users/userSchema'

export interface IUserPost {
  fullName: string
  email: string
  phone: string
  newPassword: string
  confirmNewPassword: string
  RoleId: string
  isActive: boolean
}

interface AbstractFormProps {
  initialValues: any
  validationSchema: any
  isEdit?: boolean
  pageProps?: any
  mutation: ReturnType<typeof useMutation>
}

function AbstractForm(props: AbstractFormProps) {
  const {
    initialValues,
    validationSchema,
    isEdit = false,
    mutation,
    pageProps,
  } = props

  const queryRole = useRole({
    query: {
      defaultValue: {
        pageSize: 9999,
      },
    },
  })

  const optRole = Lists.transform(queryRole.data, 'name', 'id')

  const baseUrl = '/admin/settings/account/users'
  const redirectUrl = get(pageProps, 'query.redirectUrl', baseUrl)

  // Mutation Delete
  const forceDelete = useMutation((id: string) => ApiCall.User.forceDelete(id))

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <div id={cssContent.customPageHeader}>
        <PageHeader
          title="Account"
          onBack={() => Router.push(baseUrl)}
          subTitle={`${isEdit ? 'Edit' : 'Add'} Users`}
        />
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const response = await mutation.mutateAsync(values)
            const message = get(response, 'data.message', '')
            notification.success({ message })
            // Redirect
            Router.push(redirectUrl)
          } catch (error) {
            const description = error?.response?.data?.message
            notification.error({ message: 'Error', description })
          } finally {
            setSubmitting(false)
          }
        }}
      >
        {(formikProps) => {
          const { handleSubmit, isSubmitting } = formikProps
          return (
            <Spin spinning={isSubmitting} size="large">
              <Form onSubmit={handleSubmit}>
                <Row gutter={16}>
                  <Col md={16} xs={24}>
                    <div className={cssContent.contentForm}>
                      <Space
                        direction="vertical"
                        style={{ width: '100%' }}
                        size="large"
                      >
                        <FInput
                          title="Full Name"
                          name="fullName"
                          placeholder="input full name"
                          required
                        />

                        <FInput
                          title="Email"
                          name="email"
                          type="email"
                          placeholder="input email"
                          required
                        />

                        <Row gutter={[16, 16]}>
                          <Col xs={24} sm={24} md={12} lg={12}>
                            <FInputPassword
                              title="New Password"
                              name="newPassword"
                              type="password"
                              placeholder="input new password"
                            />

                            <FInput
                              title="Phone"
                              name="phone"
                              placeholder="input phone"
                              required
                            />
                          </Col>

                          <Col xs={24} sm={24} md={12} lg={12}>
                            <FInputPassword
                              title="Confirm New Password"
                              name="confirmNewPassword"
                              type="password"
                              placeholder="input confirm new password"
                            />
                          </Col>
                        </Row>

                        <FSelect
                          title="Choose Role"
                          name="RoleId"
                          options={optRole}
                          placeholder="choose role"
                          style={{ width: '100%' }}
                        />
                      </Space>
                    </div>
                  </Col>

                  <Col md={8} xs={24}>
                    <ActionForm
                      isEdit={isEdit}
                      initialValues={initialValues}
                      formikProps={formikProps}
                      redirectUrl={redirectUrl}
                      mutationDelete={forceDelete}
                    />

                    <div
                      className={cssContent.contentForm}
                      style={{ marginTop: '1rem' }}
                    >
                      <Space
                        direction="vertical"
                        style={{ width: '100%' }}
                        size="large"
                      >
                        <Text size={16}>Status</Text>
                        <div id={cssContent.customDivider}>
                          <Divider />
                        </div>

                        <FCheckbox
                          title="Active"
                          name="isActive"
                          defaultChecked={initialValues.isActive}
                        />
                      </Space>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Spin>
          )
        }}
      </Formik>
    </Space>
  )
}

function FormAdd() {
  const createData = useMutation((data: IUserPost) => ApiCall.User.create(data))

  return (
    <AbstractForm
      initialValues={{
        fullName: '',
        email: '',
        phone: '',
        newPassword: '',
        confirmNewPassword: '',
        RoleId: '',
        isActive: false,
      }}
      validationSchema={userSchema.create}
      mutation={createData}
    />
  )
}

function FormEdit(props: any) {
  const { pageProps } = props
  const id = pageProps?.query?.id
  const isEdit = Boolean(id)

  const queryUserById = useUserById(id)
  const { isLoading, remove, data } = queryUserById

  const updateData = useMutation(
    (data: IUserPost) => ApiCall.User.update(id, data),
    {
      onSettled() {
        remove()
      },
    },
  )

  if (isLoading) {
    return <LoadingForm />
  }

  return (
    <AbstractForm
      initialValues={{
        ...data,
      }}
      validationSchema={userSchema.update}
      isEdit={isEdit}
      mutation={updateData}
      pageProps={pageProps}
    />
  )
}

export { FormAdd, FormEdit }
