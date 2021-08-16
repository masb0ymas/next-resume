import Content from '@nexys/components/Content/Content'
import LazyImgwrapper from '@nexys/components/LazyImgWrapper'
import Text from '@nexys/components/Typography/Text'
import Title from '@nexys/components/Typography/Title'
import { Card, Col, Divider, Row } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import Link from 'next/link'
import React from 'react'
import Welcome from 'views/Home/partials/Welcome'

const styleContent = {
  paddingTop: 50,
  paddingBottom: 50,
  maxWidth: 1240,
}

function Home() {
  return (
    <div>
      <Content style={{ ...styleContent }}>
        <Welcome />
      </Content>

      <Content
        styleContainer={{
          backgroundColor: '#f3f3f3',
        }}
        style={{
          ...styleContent,
        }}
      >
        <Title>{`About Me`}</Title>

        <Divider />

        <Text>
          {`Hi, I'm  Nurul Fajri , a Full Stack Developer 🚀 from Indonesia, currently, I'm a working on Karcisbola.
Beside's programming, I enjoy eating food and traveling.
I'm still learning to get the best experience.
I like to explore 🏔️ new things related to technology.
I'm love playing with 🐧 penguins and eating 🍏 apples.`}
        </Text>
      </Content>

      <Content
        style={{
          ...styleContent,
          textAlign: 'center',
        }}
      >
        <Row gutter={[16, 16]}>
          <Col xs={24}>
            <Title>{`Skill & Portfolio`}</Title>
            <Text>
              {`My skills and experience gained while working on projects`}
            </Text>
          </Col>
        </Row>

        <Divider />

        <Row gutter={[16, 16]}>
          <Col lg={6} md={8} sm={12} xs={24}>
            <Card
              hoverable
              bordered={false}
              cover={
                <LazyImgwrapper>
                  <img
                    width={'100%'}
                    alt="example"
                    src="https://picsum.photos/600/400/?random"
                  />
                </LazyImgwrapper>
              }
            >
              <Row gutter={[16, 16]} justify="center" align="middle">
                <Col xs={6}>
                  <Avatar src="/static/bri_agro.png" />
                </Col>
                <Col xs={18}>
                  <Title size={16}>{`BRI Agro Learning`}</Title>
                  <Text>{`FullStack ( Frontend, Backend & Mobile )`}</Text>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col lg={6} md={8} sm={12} xs={24}>
            <Card
              hoverable
              bordered={false}
              cover={
                <LazyImgwrapper>
                  <img
                    width={'100%'}
                    alt="example"
                    src="https://picsum.photos/600/400/?random"
                  />
                </LazyImgwrapper>
              }
            >
              <Row gutter={[16, 16]} justify="center" align="middle">
                <Col xs={6}>
                  <Avatar src="https://upload.wikimedia.org/wikipedia/commons/7/73/Logo_kementerian_keuangan_republik_indonesia.png" />
                </Col>
                <Col xs={18}>
                  <Title size={16}>{`Nadine ( Kemenkeu )`}</Title>
                  <Text>{`Backend ( Microservice )`}</Text>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col lg={6} md={8} sm={12} xs={24}>
            <Card
              hoverable
              bordered={false}
              cover={
                <LazyImgwrapper>
                  <img
                    width={'100%'}
                    alt="example"
                    src="https://picsum.photos/600/400/?random"
                  />
                </LazyImgwrapper>
              }
            >
              <Row gutter={[16, 16]} justify="center" align="middle">
                <Col xs={6}>
                  <Avatar src="https://lh3.googleusercontent.com/proxy/O1awYMQfZ5R9FIn0yOFO_hHc5a5HpMxKMxBPfs_1iOfYctA9WXtMv99Jlc7ZX0V4WJzgn7pvkWOGXa18ZOXS8xpTONn7" />
                </Col>
                <Col xs={18}>
                  <Title size={16}>{`SIMPEL ( Kementan )`}</Title>
                  <Text>{`FullStack ( Frontend & Backend )`}</Text>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col lg={6} md={8} sm={12} xs={24}>
            <Card
              hoverable
              bordered={false}
              cover={
                <LazyImgwrapper>
                  <img
                    width={'100%'}
                    alt="example"
                    src="https://picsum.photos/600/400/?random"
                  />
                </LazyImgwrapper>
              }
            >
              <Row gutter={[16, 16]} justify="center" align="middle">
                <Col xs={6}>
                  <Avatar src="https://rekreartive.com/wp-content/uploads/2019/03/Logo-Kabupaten-Indramayu-Warna.jpg" />
                </Col>
                <Col xs={18}>
                  <Title size={16}>{`Indramayu Kependudukan`}</Title>
                  <Text>{`FullStack ( Frontend & Backend )`}</Text>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col lg={6} md={8} sm={12} xs={24}>
            <Card
              hoverable
              bordered={false}
              cover={
                <LazyImgwrapper>
                  <img
                    width={'100%'}
                    alt="example"
                    src="https://picsum.photos/600/400/?random"
                  />
                </LazyImgwrapper>
              }
            >
              <Row gutter={[16, 16]} justify="center" align="middle">
                <Col xs={6}>
                  <Avatar src="https://rekreartive.com/wp-content/uploads/2019/03/Logo-Kabupaten-Indramayu-Warna.jpg" />
                </Col>
                <Col xs={18}>
                  <Title size={16}>{`Indramayu All In One`}</Title>
                  <Text>{`FullStack ( Frontend & Backend )`}</Text>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Content>

      <Content
        styleContainer={{
          backgroundColor: '#f3f3f3',
        }}
        style={{
          ...styleContent,
          textAlign: 'center',
        }}
      >
        <Title>{`Education & Certification`}</Title>
        <Text>{`Education and certification that I have obtained`}</Text>

        <Divider />

        <Row gutter={[16, 16]}>
          <Col lg={12} md={12} sm={12} xs={24}>
            <Card
              title="Computer Science"
              bordered={false}
              style={{ textAlign: 'left' }}
            >
              <Text size={18} bold>
                {`Universitas Putra Indonesia YPTK Padang`}
              </Text>
              <br />
              <Text size={14}>{`Agust 2013 - Mar 2017`}</Text>
              <br />
              <br />
              <Text>
                {`I continue my education in computer science, understand how to analyze a problem and find a solution, then this is applied to an application / software. Besides that, we also understand AI in broad outline, not in detail, such as: machine learning, deep learning, and neural networks.`}
              </Text>
            </Card>
          </Col>
        </Row>
      </Content>

      <Content
        styleContainer={{
          backgroundColor: '#f3f3f3',
        }}
        style={{
          ...styleContent,
          textAlign: 'center',
        }}
      >
        <Title>{`Experience`}</Title>
        <Text>{`My experience in both work and community`}</Text>

        <Divider />

        <Row gutter={[16, 16]}>
          <Col lg={12} md={12} sm={12} xs={24}>
            <Card
              title="Minang IT Camp"
              bordered={false}
              style={{ textAlign: 'left' }}
            >
              <Text size={18} bold>
                {`Minang Programmer Community`}
              </Text>
              <br />
              <Text size={14}>{`Okt 2017 - Present`}</Text>
              <br />
              <br />
              <Text>
                {`I joined this community at the end of 2017. I learned a lot here from versioning with git, learning coding with case studies, and managing a project in the field. And now I manage this community both in terms of websites and participants who want to learn together.`}
              </Text>
            </Card>
          </Col>

          <Col lg={12} md={12} sm={12} xs={24}>
            <Card
              title="Nusantech"
              bordered={false}
              style={{ textAlign: 'left' }}
            >
              <Text size={18} bold>
                {`Web Developer ( Fulltime )`}
              </Text>
              <br />
              <Text size={14}>{`Jun 2019 - Sep 2020`}</Text>
              <br />
              <br />
              <Text>
                {`The development of an application using the sprint method, the task that is carried out becomes more neat and directed. I also explore various programming languages. and I build a coding standard that is used in the office, especially for projects and products.`}
              </Text>
            </Card>
          </Col>

          <Col lg={12} md={12} sm={12} xs={24}>
            <Card
              title="Nusantech"
              bordered={false}
              style={{ textAlign: 'left' }}
            >
              <Text size={18} bold>
                {`Full Stack Developer ( Fulltime )`}
              </Text>
              <br />
              <Text size={14}>{`Sep 2020 - Mar 2021`}</Text>
              <br />
              <br />
              <Text>
                {`With the experience I got before, now I maintain open source code, also analyze an application that will be built or developed in the future what it looks like. As well as finding critical solutions when there are major changes.`}
              </Text>
            </Card>
          </Col>

          <Col lg={12} md={12} sm={12} xs={24}>
            <Card
              title="Karcisbola"
              bordered={false}
              style={{ textAlign: 'left' }}
            >
              <Text size={18} bold>
                {`Software Engineer ( Fulltime )`}
              </Text>
              <br />
              <Text size={14}>{`Mar 2021 - Present`}</Text>
              <br />
              <br />
              <Text>
                {`With the experience I got before, now I maintain open source code, also analyze an application that will be built or developed in the future what it looks like. As well as finding critical solutions when there are major changes.`}
              </Text>
            </Card>
          </Col>
        </Row>
      </Content>

      <Content
        style={{
          ...styleContent,
        }}
      >
        <Title>{`My Open source github`}</Title>
        <Text>{`My activities on open source github`}</Text>

        <Divider />

        <Row gutter={[16, 16]}>
          <Col lg={8} md={12} sm={12} xs={24}>
            <Link href="https://github.com/masb0ymas/expresso">
              <a>
                <img
                  src="https://github-readme-stats.vercel.app/api/pin/?username=masb0ymas&repo=expresso&theme=vue-dark"
                  alt="expresso"
                />
              </a>
            </Link>
          </Col>

          <Col lg={8} md={12} sm={12} xs={24}>
            <Link href="https://github.com/masb0ymas/expresso-mongose">
              <a>
                <img
                  src="https://github-readme-stats.vercel.app/api/pin/?username=masb0ymas&repo=expresso-mongose&theme=vue-dark"
                  alt="expresso-mongose"
                />
              </a>
            </Link>
          </Col>

          <Col lg={8} md={12} sm={12} xs={24}>
            <Link href="https://github.com/masb0ymas/expresso-gateway">
              <a>
                <img
                  src="https://github-readme-stats.vercel.app/api/pin/?username=masb0ymas&repo=expresso-gateway&theme=vue-dark"
                  alt="expresso-gateway"
                />
              </a>
            </Link>
          </Col>

          <Col lg={8} md={12} sm={12} xs={24}>
            <Link href="https://github.com/masb0ymas/express-functions-typescript">
              <a>
                <img
                  src="https://github-readme-stats.vercel.app/api/pin/?username=masb0ymas&repo=express-functions-typescript&theme=vue-dark"
                  alt="express-functions-typescript"
                />
              </a>
            </Link>
          </Col>

          <Col lg={8} md={12} sm={12} xs={24}>
            <Link href="https://github.com/chornos13/nexys">
              <a>
                <img
                  src="https://github-readme-stats.vercel.app/api/pin/?username=chornos13&repo=nexys&theme=vue-dark"
                  alt="nexys"
                />
              </a>
            </Link>
          </Col>

          <Col lg={8} md={12} sm={12} xs={24}>
            <Link href="https://github.com/masb0ymas/gintama">
              <a>
                <img
                  src="https://github-readme-stats.vercel.app/api/pin/?username=masb0ymas&repo=gintama&theme=vue-dark"
                  alt="gintama"
                />
              </a>
            </Link>
          </Col>
        </Row>

        <Row gutter={[16, 16]} style={{ marginTop: '1rem' }}>
          <Col lg={12} md={12} sm={12} xs={24}>
            <Link href="https://github.com/masb0ymas">
              <a>
                <img
                  src="https://github-readme-stats.vercel.app/api?username=masb0ymas&show_icons=true&hide_border=true&theme=vue-dark"
                  alt="my board github"
                />
              </a>
            </Link>
          </Col>
        </Row>
      </Content>
    </div>
  )
}

export default Home
