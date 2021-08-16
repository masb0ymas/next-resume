import { Col, notification, PageHeader, Row, Space, Spin } from 'antd'
import LoadingForm from '@nexys/components/Loading/partials/LoadingForm'
import FInput from '@nexys/fields/FInput/FInput'
import { Form, Formik } from 'formik'
import { get } from 'lodash'
import Router from 'next/router'
import React from 'react'
import { useMutation } from 'react-query'
import ApiCall from 'services/ApiCall'
import cssContent from '@nexys/components/Content/Content.module.scss'
import ActionForm from '@nexys/components/ActionForm/ActionForm'
import productCategorySchema from 'validations/master/productCategorySchema'
import useProductCategoryById from 'data/useProductCategoryById'

export interface IVehicleBrandPost {
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

  const baseUrl = '/admin/settings/master-data/product-category'
  const redirectUrl = get(pageProps, 'query.redirectUrl', baseUrl)

  // Mutation Delete
  const forceDelete = useMutation((id: string) =>
    ApiCall.ProductCategory.forceDelete(id),
  )

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <div id={cssContent.customPageHeader}>
        <PageHeader
          title="Master Data"
          onBack={() => Router.push(baseUrl)}
          subTitle={`${isEdit ? 'Edit' : 'Add'} Product Category`}
        />
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const response = await mutation.mutateAsync(values)
            const message = get(response, 'data.message', '')
            notification.success({
              message,
            })
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
                          placeholder="input name"
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
  const createData = useMutation((data: IVehicleBrandPost) =>
    ApiCall.ProductCategory.create(data),
  )

  return (
    <AbstractForm
      initialValues={{
        name: '',
      }}
      validationSchema={productCategorySchema.create}
      mutation={createData}
    />
  )
}

function FormEdit(props: any) {
  const { pageProps } = props
  const id = pageProps?.query?.id
  const isEdit = Boolean(id)

  const queryProductCategoryById = useProductCategoryById(id)
  const { isLoading, remove, data } = queryProductCategoryById

  const updateData = useMutation(
    (data: IVehicleBrandPost) => ApiCall.ProductCategory.update(id, data),
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
      validationSchema={productCategorySchema.update}
      isEdit={isEdit}
      mutation={updateData}
      pageProps={pageProps}
    />
  )
}

export { FormAdd, FormEdit }
