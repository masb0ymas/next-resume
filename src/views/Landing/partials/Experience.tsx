import Text from '@nexys/components/Typography/Text'
import Title from '@nexys/components/Typography/Title'
import { Card, Col, Divider, Row } from 'antd'
import React from 'react'

function Experience() {
  const data = [
    {
      id: 1,
      title: 'Minang IT Camp',
      subTitle: 'Minang Programmer Community',
      description:
        'I joined this community at the end of 2017. I learned a lot here from versioning with git, learning coding with case studies, and managing a project in the field. And now I manage this community both in terms of websites and participants who want to learn together.',
      period: 'Okt 2017 - Present',
      isActive: false,
    },
    {
      id: 2,
      title: 'Nusantech',
      subTitle: 'Web Developer ( Fulltime )',
      description:
        'The development of an application using the sprint method, the task that is carried out becomes more neat and directed. I also explore various programming languages. and I build a coding standard that is used in the office, especially for projects and products.',
      period: 'Jun 2019 - Sep 2020',
      isActive: false,
    },
    {
      id: 3,
      title: 'Nusantech',
      subTitle: 'Full Stack Developer ( Fulltime )',
      description:
        'With the experience I got before, now I maintain open source code, also analyze an application that will be built or developed in the future what it looks like. As well as finding critical solutions when there are major changes.',
      period: 'Sep 2020 - Mar 2021',
      isActive: false,
    },
    {
      id: 4,
      title: 'Karcisbola',
      subTitle: 'Software Engineer ( Fulltime )',
      description:
        'With the experience I got before, now I maintain open source code, also analyze an application that will be built or developed in the future what it looks like. As well as finding critical solutions when there are major changes.',
      period: 'Mar 2021 - Present',
      isActive: true,
    },
  ]

  const styleContent = { textAlign: 'left', borderRadius: '10px' }

  return (
    <React.Fragment>
      <Title color="#269e9a">{`Experience`}</Title>
      <Text size={14}>{`My experience in both work and community`}</Text>

      <Divider />

      <Row gutter={[16, 16]}>
        {data.reverse().map((item) => {
          return (
            <Col lg={12} md={12} sm={12} xs={24} key={item.id}>
              <Card
                title={item.title}
                hoverable
                bordered={false}
                headStyle={item.isActive ? { color: '#fff' } : {}}
                // @ts-ignore
                style={
                  item.isActive
                    ? {
                        backgroundColor: '#269e9a',
                        color: '#fff',
                        ...styleContent,
                      }
                    : { ...styleContent }
                }
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

export default Experience
