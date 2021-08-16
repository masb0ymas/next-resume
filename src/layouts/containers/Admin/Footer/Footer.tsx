import { Layout } from 'antd'
import React from 'react'

const { Footer: AntFooter } = Layout

const brand = process.env.BRAND || 'My Resume'

function Footer() {
  const dateNow = new Date()
  const yearNow = dateNow.getFullYear()

  return (
    <React.Fragment>
      <AntFooter style={{ textAlign: 'center' }}>
        &copy; &nbsp;
        {yearNow}
        &nbsp; Created by &nbsp;
        <b>{brand}</b>
      </AntFooter>
    </React.Fragment>
  )
}

export default Footer
