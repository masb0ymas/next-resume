/* eslint-disable @next/next/no-img-element */
import Content from '@nexys/components/Content/Content'
import LazyImgwrapper from '@nexys/components/LazyImgWrapper'
import { Col, Row } from 'antd'
import Link from 'next/link'
import React from 'react'
import About from './partials/About'
import Education from './partials/Education'
import Experience from './partials/Experience'
import MyGithub from './partials/MyGithub'
import Portfolio from './partials/Portfolio'
import Welcome from './partials/Welcome'

const styleContent = {
  paddingTop: 50,
  paddingBottom: 50,
  maxWidth: 1240,
}

function Landing() {
  return (
    <React.Fragment>
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
        <About />
      </Content>

      <Content
        style={{
          ...styleContent,
          textAlign: 'center',
        }}
      >
        <Portfolio />
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
        <Education />
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
        <Experience />
      </Content>

      <Content
        style={{
          ...styleContent,
        }}
      >
        <MyGithub />

        <Row gutter={[16, 16]} style={{ marginTop: '1.5rem' }}>
          <Col lg={12} md={12} sm={12} xs={24}>
            <Link href="https://github.com/masb0ymas">
              <a>
                <LazyImgwrapper>
                  <img
                    src="https://github-readme-stats.vercel.app/api?username=masb0ymas&show_icons=true&hide_border=true&theme=vue-dark"
                    alt="my board github"
                    width="100%"
                  />
                </LazyImgwrapper>
              </a>
            </Link>
          </Col>
        </Row>
      </Content>
    </React.Fragment>
  )
}

export default Landing
