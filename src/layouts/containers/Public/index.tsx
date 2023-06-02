'use client'

/* eslint-disable react/jsx-no-constructed-context-values */
import { Loader } from '@mantine/core'
import { ReactComponentLike } from 'prop-types'
import React, { useState } from 'react'
import PublicFooterLayout from './Footer'

interface IProps {
  Component: ReactComponentLike
}

const PublicContext = React.createContext<
  {
    stateLayoutLoading: [boolean, (loading: boolean) => void]
  } & any
>({
  stateLayoutLoading: [false, () => {}],
})

/**
 *
 * @param props
 * @returns
 */
function PublicContainer(props: IProps) {
  const { Component } = props

  const stateLayoutLoading = useState(false)
  const [isLayoutLoading] = stateLayoutLoading

  return (
    <PublicContext.Provider value={{ stateLayoutLoading }}>
      {isLayoutLoading && <Loader />}

      <Component {...props} />

      <PublicFooterLayout />
    </PublicContext.Provider>
  )
}

export default PublicContainer
