import LockOutlined from '@ant-design/icons/LockFilled'
import UserOutlined from '@ant-design/icons/UserOutlined'
import Text from '@nexys/components/Typography/Text'
import Title from '@nexys/components/Typography/Title'
import cssFont from '@nexys/css/cssFont.scss'
import FInput from '@nexys/fields/FInput/FInput'
import FInputPassword from '@nexys/fields/FInputPassword/FInputPassword'
import { Button, Col, notification, Row, Space } from 'antd'
import cx from 'classnames'
import useProfile from 'data/useProfile'
import { Form, Formik } from 'formik'
import { get, isEmpty } from 'lodash'
import Link from 'next/link'
import Router from 'next/router'
import React from 'react'
import { useMutation } from 'react-query'
import ApiCall from 'services/ApiCall'
import loginSchema from 'validations/auth/loginSchema'
import cssLogin from 'views/Login/Login.module.scss'
// import Image from 'next/image'

export interface LoginAttributes {
  email: string
  password: string
}

const brand = process.env.BRAND || 'Your Brand'

function Login() {
  const postLogin = useMutation((data: LoginAttributes) => ApiCall.login(data))

  // check kalo udah login
  const profile = useProfile()
  if (profile.isSuccess && !isEmpty(profile.data)) {
    Router.push('/admin/dashboard')
  }

  return (
    <Row
      className={cx(cssLogin.container, cssFont.normal)}
      align="middle"
      justify="center"
      gutter={[0, 16]}
    >
      <Col xs={24} sm={12} md={12} lg={10}>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={loginSchema.validation}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const response = await postLogin.mutateAsync(values)
              const message = get(response, 'data.message', '')
              const accessToken = get(response, 'data.accessToken', {})

              localStorage.setItem('access_token', accessToken)
              notification.success({ message })
              // Redirect
              Router.push('/admin/dashboard')
            } catch (error) {
              const description = get(error, 'response.data.message', '')
              notification.error({ message: 'Error!', description })
            } finally {
              setSubmitting(false)
            }
          }}
        >
          {({ handleSubmit }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <Row gutter={[12, 12]} align="middle" justify="center">
                  <Col xs={16}>
                    <Row justify="center" gutter={[0, 14]}>
                      <Col style={{ marginBottom: '10px' }}>
                        <Space direction="vertical" align="center">
                          {/* <Image
                            layout="fixed"
                            width={250}
                            height={40}
                            src="/static/images/logo.png"
                            alt="your_brand_logo"
                          /> */}
                          <Title>{brand}</Title>
                          <Text size={14}>
                            Log in to your&nbsp;
                            {brand}
                            &nbsp;Account
                          </Text>
                        </Space>
                      </Col>

                      <Col xs={24}>
                        <FInput
                          title="Email"
                          name="email"
                          type="email"
                          placeholder="input email"
                          size="large"
                          prefix={<UserOutlined color="primary" />}
                        />
                      </Col>

                      <Col xs={24}>
                        <FInputPassword
                          title="Password"
                          name="password"
                          type="password"
                          placeholder="input password"
                          size="large"
                          prefix={<LockOutlined />}
                        />
                      </Col>

                      <Col xs={24}>
                        <Button
                          type="primary"
                          size="large"
                          block
                          htmlType="submit"
                        >
                          Log In
                        </Button>
                      </Col>
                      <Col>
                        <Space
                          direction="vertical"
                          align="center"
                          style={{ width: '100%' }}
                        >
                          <Link href="/">
                            <a>Forgot password ?</a>
                          </Link>
                        </Space>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
            )
          }}
        </Formik>
      </Col>
    </Row>
  )
}

export default Login
