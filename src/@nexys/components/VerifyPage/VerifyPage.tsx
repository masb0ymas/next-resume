import Text from '@nexys/components/Typography/Text'
import cssVerifying from '@nexys/components/VerifyPage/VerifyPage.module.scss'
import { Avatar } from 'antd'
import cx from 'classnames'
import React from 'react'

interface VerifyPageProps {
  loading: boolean
  title: string
}

const brand = process.env.BRAND || 'Your Brand'

function VerifyPage(props: VerifyPageProps) {
  const { loading, title } = props

  return (
    <div className={cx(cssVerifying.container)}>
      <div className="App">
        <header className="App-header">
          <Avatar
            className={cx('App-logo', { anim: loading })}
            alt="logo"
            src={'/static/images/logo.png'}
            style={{ backgroundColor: '#fff' }}
          >
            {brand}
          </Avatar>
          <Text color={'white'} size={18}>
            {title}
          </Text>
        </header>
      </div>
    </div>
  )
}

export default VerifyPage
