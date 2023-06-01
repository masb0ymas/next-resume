import _ from 'lodash'
import Router from 'next/router'
import { useEffect } from 'react'
import useVerifySession from '~/data/query/useVerifySession'

export function useAuthSession() {
  const { data, isLoading, isFetching, error } = useVerifySession()

  useEffect(() => {
    if (!isLoading && !_.isEmpty(error)) {
      // @ts-ignore
      const message = error?.response?.data?.message as string
      const isSessionOver =
        message?.includes('jwt') || message?.includes('session')
      if (_.isEmpty(data) && isSessionOver) {
        Router.push('/login')
      }
    }
  }, [data, isLoading])

  return { data, isFetching }
}
