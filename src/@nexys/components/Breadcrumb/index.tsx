/* eslint-disable array-callback-return */
import HomeOutlined from '@ant-design/icons/HomeOutlined'
import { Breadcrumb } from 'antd'
import { BreadcrumbProps } from 'antd/lib/breadcrumb'
import { upperFirst } from 'lodash'
import Link from 'next/link'
import { NextRouter, withRouter } from 'next/router'
import React from 'react'
import validator from 'validator'
import cssBreadcrumb from './Breadcrumb.module.scss'

interface RouterProps {
  router: NextRouter
  disabledIndex?: number[]
}

type MyBreadcrumbProps = RouterProps & BreadcrumbProps

function MyBreadcrumb(props: MyBreadcrumbProps) {
  const { router, disabledIndex } = props
  const { asPath } = router
  const items = asPath.split('/')

  const MainBreadCrumbItems = items
    ?.filter((item) => !validator.isUUID(item))
    .map((item, index) => {
      const title = item?.replace('-', ' ')?.split(',')
      if (index > 0) {
        const url = `/${items?.slice(1)?.splice(0, index)?.join('/')}`
        const hRef = (disabledIndex || []).includes(index) ? (
          <span className="heading-tertiary">
            {upperFirst(decodeURIComponent(title[0]))}
          </span>
        ) : (
          <Link href={url}>
            <span className="heading-tertiary">
              {upperFirst(decodeURIComponent(title[0]))}
            </span>
          </Link>
        )
        return (
          <Breadcrumb.Item key={item}>
            {index + 1 === items.length ? (
              <span className="heading-tertiary">
                {upperFirst(decodeURIComponent(title[0]))}
              </span>
            ) : (
              hRef
            )}
          </Breadcrumb.Item>
        )
      }
    })

  const BreadcrumbItems = [
    <Breadcrumb.Item key="home" href="/">
      <Link href="/">
        <HomeOutlined />
      </Link>
    </Breadcrumb.Item>,
  ].concat(MainBreadCrumbItems)

  return (
    <div id={cssBreadcrumb.custom}>
      <Breadcrumb>{BreadcrumbItems}</Breadcrumb>
    </div>
  )
}

export default withRouter(MyBreadcrumb)
