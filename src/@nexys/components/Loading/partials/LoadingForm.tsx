import React from 'react'
import { Spin } from 'antd'
import cx from 'classnames'
import cssLoading from '../Loading.module.scss'

const LoadingForm = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className={cx(cssLoading.fullLoading)} ref={ref}>
      <Spin size="large" tip="Loading..." />
    </div>
  )
}) as any

export default LoadingForm
