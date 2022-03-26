/* eslint-disable @next/next/no-img-element */
import LazyImgwrapper from '@nexys/components/LazyImgWrapper'
import Text from '@nexys/components/Typography/Text'
import Title from '@nexys/components/Typography/Title'
import { Card, Col, Divider, Row } from 'antd'
import React from 'react'

function Portfolio() {
  const data = [
    {
      id: 1,
      urlImage: '/static/website-indramayu-satu.png',
      brand: '/static/indramayu-logo.jpg',
      title: 'Indramayu All In One',
      description: 'FullStack ( Frontend & Backend )',
    },
    {
      id: 2,
      urlImage: '/static/website-indramayu-kependudukan.png',
      brand: '/static/indramayu-logo.jpg',
      title: 'Indramayu Kependudukan',
      description: 'FullStack ( Frontend & Backend )',
    },
    {
      id: 3,
      urlImage: '/static/website-kementan.png',
      brand: '/static/kementan-logo.png',
      title: 'SIMPEL ( Kementan )',
      description: 'FullStack ( Frontend & Backend )',
    },
    {
      id: 4,
      urlImage: '/static/website-nadine.png',
      brand: '/static/kemenkeu-logo.png',
      title: 'Nadine ( Kemenkeu )',
      description: 'Backend ( Microservice )',
    },
    {
      id: 5,
      urlImage: '/static/website-bri-agro-learning.png',
      brand: '/static/bri_agro.png',
      title: 'BRI Agro Learning',
      description: 'FullStack ( Frontend, Backend & Mobile )',
    },
    {
      id: 6,
      urlImage: '/static/website-app-karcisbola.png',
      brand: '/static/logo-karcisbola.png',
      title: 'Karcisbola',
      description: 'FullStack ( Frontend & Backend )',
    },
  ]

  return (
    <React.Fragment>
      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <Title color="#269e9a">{`Skill & Portfolio`}</Title>
          <Text size={14}>
            {`My skills and experience gained while working on projects`}
          </Text>
        </Col>
      </Row>

      <Divider />

      <Row gutter={[16, 16]}>
        {data.reverse().map((item) => {
          return (
            <Col lg={6} md={8} sm={12} xs={24} key={item.id}>
              <Card
                hoverable
                bordered={false}
                style={{ borderRadius: '10px' }}
                cover={
                  <LazyImgwrapper>
                    <img width={'100%'} alt="example" src={item.urlImage} />
                  </LazyImgwrapper>
                }
              >
                <Row gutter={[16, 16]} justify="center" align="middle">
                  <Col xs={6}>
                    <LazyImgwrapper>
                      <img
                        width={'32'}
                        height={'32'}
                        src={item.brand}
                        alt={item.title}
                      />
                    </LazyImgwrapper>
                  </Col>
                  <Col xs={18}>
                    <Title size={16}>{item.title}</Title>
                    <Text>{item.description}</Text>
                  </Col>
                </Row>
              </Card>
            </Col>
          )
        })}
      </Row>
    </React.Fragment>
  )
}

export default Portfolio
