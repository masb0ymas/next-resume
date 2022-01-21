/* eslint-disable @next/next/no-img-element */
import MailOutlined from '@ant-design/icons/MailOutlined'
import LazyImgwrapper from '@nexys/components/LazyImgWrapper'
import Text from '@nexys/components/Typography/Text'
import Title from '@nexys/components/Typography/Title'
import { Button, Col, Row } from 'antd'
import Link from 'next/link'
import React from 'react'

function Welcome() {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={12} style={{ alignSelf: 'center' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24}>
            <Title size={18} noMargin>
              {`Hello i'm`}
            </Title>
          </Col>
          <Col xs={24}>
            <Title size={30} noMargin>
              {`Nurul Fajri`}
            </Title>
          </Col>
          <Col xs={24}>
            <Text size={21}>{`Software Enginner`}</Text>
            <Text size={21}>{` at `}</Text>
            <Text size={21} color="#269e9a" bold>{`Karcisbola`}</Text>
          </Col>
          <Col xs={24}>
            <Link href="mailto:n.fajri@outlook.com">
              <a>
                <Button
                  icon={<MailOutlined />}
                  style={{ borderColor: '#269e9a', color: '#269e9a' }}
                >
                  n.fajri@outlook.com
                </Button>
              </a>
            </Link>
          </Col>
        </Row>
      </Col>
      <Col xs={24} sm={12} style={{ textAlign: 'center' }}>
        <LazyImgwrapper>
          <img
            width={'60%'}
            src={
              'https://avatars2.githubusercontent.com/u/30567103?s=460&u=f86346bbbb9034bbab000b3cc24133c22f8f711b&v=4'
            }
            alt={'illustration'}
            style={{ borderRadius: '9999px' }}
          />
        </LazyImgwrapper>
      </Col>
    </Row>
  )
}

export default Welcome
