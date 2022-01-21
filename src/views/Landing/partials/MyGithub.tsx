/* eslint-disable @next/next/no-img-element */
import LazyImgwrapper from '@nexys/components/LazyImgWrapper'
import Text from '@nexys/components/Typography/Text'
import Title from '@nexys/components/Typography/Title'
import { Card, Col, Divider, Row } from 'antd'
import Link from 'next/link'
import React from 'react'

function MyGithub() {
  const data = [
    {
      id: 1,
      title: 'expresso',
      urlRepo: 'https://github.com/masb0ymas/expresso',
      urlImage:
        'https://github-readme-stats.vercel.app/api/pin/?username=masb0ymas&repo=expresso&theme=vue-dark',
    },
    {
      id: 2,
      title: 'expresso-mongoose',
      urlRepo: 'https://github.com/masb0ymas/expresso-mongoose',
      urlImage:
        'https://github-readme-stats.vercel.app/api/pin/?username=masb0ymas&repo=expresso-mongoose&theme=vue-dark',
    },
    {
      id: 3,
      title: 'expresso-gateway',
      urlRepo: 'https://github.com/masb0ymas/expresso-gateway',
      urlImage:
        'https://github-readme-stats.vercel.app/api/pin/?username=masb0ymas&repo=expresso-gateway&theme=vue-dark',
    },
    {
      id: 4,
      title: 'express-functions-typescript',
      urlRepo: 'https://github.com/masb0ymas/express-functions-typescript',
      urlImage:
        'https://github-readme-stats.vercel.app/api/pin/?username=masb0ymas&repo=express-functions-typescript&theme=vue-dark',
    },
    {
      id: 5,
      title: 'expresso-typeorm',
      urlRepo: 'https://github.com/masb0ymas/expresso-typeorm',
      urlImage:
        'https://github-readme-stats.vercel.app/api/pin/?username=masb0ymas&repo=expresso-typeorm&theme=vue-dark',
    },
    {
      id: 6,
      title: 'gintama',
      urlRepo: 'https://github.com/masb0ymas/gintama',
      urlImage:
        'https://github-readme-stats.vercel.app/api/pin/?username=masb0ymas&repo=gintama&theme=vue-dark',
    },
  ]

  return (
    <React.Fragment>
      <Title color="#269e9a">{`My Open source github`}</Title>
      <Text size={14}>{`My activities on open source github`}</Text>

      <Divider />

      <Row gutter={[16, 16]}>
        {data.map((item) => {
          return (
            <Col lg={8} md={8} sm={8} xs={24} key={item.id}>
              <Card
                hoverable
                bordered={false}
                style={{ borderRadius: '10px' }}
                bodyStyle={{ padding: 0 }}
                cover={
                  <Link href={item.urlRepo} key={item.id}>
                    <a>
                      <LazyImgwrapper>
                        <img width={'100%'} alt="example" src={item.urlImage} />
                      </LazyImgwrapper>
                    </a>
                  </Link>
                }
              />
            </Col>
          )
        })}
      </Row>
    </React.Fragment>
  )
}

export default MyGithub
