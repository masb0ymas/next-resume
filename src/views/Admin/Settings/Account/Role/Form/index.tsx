import ActionForm from '@nexys/components/ActionForm/ActionForm'
import cssContent from '@nexys/components/Content/Content.module.scss'
import LoadingForm from '@nexys/components/Loading/partials/LoadingForm'
import FInput from '@nexys/fields/FInput/FInput'
import { Col, notification, PageHeader, Row, Space, Spin } from 'antd'
import useRoleById from 'data/useRoleById'
import { Form, Formik } from 'formik'
import { get } from 'lodash'
import Router from 'next/router'
import React from 'react'
import { useMutation } from 'react-query'
import ApiCall from 'services/ApiCall'
import roleSchema from 'validations/accounts/role/roleSchema'

export interface IRolePost {
  name: string
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

  const baseUrl = '/admin/settings/account/role'
  const redirectUrl = get(pageProps, 'query.redirectUrl', baseUrl)

  // Mutation Delete
  const forceDelete = useMutation((id: string) => ApiCall.Role.forceDelete(id))

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <div id={cssContent.customPageHeader}>
        <PageHeader
          title="Account"
          onBack={() => Router.push(baseUrl)}
          subTitle={`${isEdit ? 'Edit' : 'Add'} Role`}
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
                          title="Name"
                          name="name"
                          placeholder="input role name"
                          required
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
  const createData = useMutation((data: IRolePost) => ApiCall.Role.create(data))

  return (
    <AbstractForm
      initialValues={{
        name: '',
      }}
      validationSchema={roleSchema.create}
      mutation={createData}
    />
  )
}

function FormEdit(props: any) {
  const { pageProps } = props
  const id = pageProps?.query?.id
  const isEdit = Boolean(id)

  const queryRoleById = useRoleById(id)
  const { isLoading, remove, data } = queryRoleById

  const updateData = useMutation(
    (data: IRolePost) => ApiCall.Role.update(id, data),
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
      validationSchema={roleSchema.update}
      isEdit={isEdit}
      mutation={updateData}
      pageProps={pageProps}
    />
  )
}

export { FormAdd, FormEdit }
