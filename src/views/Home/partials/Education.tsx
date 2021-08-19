import Text from '@nexys/components/Typography/Text'
import Title from '@nexys/components/Typography/Title'
import { Card, Col, Divider, Row } from 'antd'
import React from 'react'

function Education() {
  const data = [
    {
      id: 1,
      title: 'Computer Science',
      subTitle: 'Universitas Putra Indonesia YPTK Padang',
      description:
        'I continue my education in computer science, understand how to analyze a problem and find a solution, then this is applied to an application / software. Besides that, we also understand AI in broad outline, not in detail, such as: machine learning, deep learning, and neural networks.',
      period: 'Agust 2013 - Mar 2017',
    },
  ]

  return (
    <React.Fragment>
      <Title color="#269e9a">{`Education & Certification`}</Title>
      <Text>{`Education and certification that I have obtained`}</Text>

      <Divider />

      <Row gutter={[16, 16]}>
        {data.map((item) => {
          return (
            <Col lg={12} md={12} sm={12} xs={24} key={item.id}>
              <Card
                title={item.title}
                hoverable
                bordered={false}
                style={{ textAlign: 'left' }}
              >
                <Text size={18} bold>
                  {item.subTitle}
                </Text>
                <br />
                <Text size={14}>{item.period}</Text>
                <br />
                <br />
                <Text>{item.description}</Text>
              </Card>
            </Col>
          )
        })}
      </Row>
    </React.Fragment>
  )
}

export default Education
