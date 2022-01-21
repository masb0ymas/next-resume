import useUrlQuery from '@nexys/hooks/useUrlQuery/useUrlQuery'
import { PaginationConfig } from 'antd/lib/pagination'
import { QueryObserverBaseResult } from 'react-query'

export function getNumber(page: number, pageSize: number, index: number) {
  const currentNumber = Number(pageSize) * Number(page - 1) + Number(index) + 1
  return currentNumber
}

function getCurrentNumber(
  index: number,
  page: number,
  pageSize: number,
): number {
  return (page - 1) * pageSize + index + 1
}

interface PaginationProps extends PaginationConfig {
  current: number
  pageSize: number
  total: number
  onChange: (page, pageSize) => void
}

type Query = QueryObserverBaseResult & {
  helpers: ReturnType<typeof useUrlQuery>
  total: number
}

function getPaginationProps(query: Query): PaginationProps {
  const page = query.helpers.getQueryById('page') || 0
  const pageSize = query.helpers.getQueryById('pageSize') || 10

  return {
    current: page,
    onShowSizeChange: (page, pageSize) => {
      query.helpers.setQuery((helper) => {
        helper.query.set('page', page)
      })
      query.helpers.setQuery((helper) => {
        helper.query.set('pageSize', pageSize)
      })
    },
    onChange: (page, pageSize) => {
      query.helpers.setQuery((helper) => {
        helper.query.set('page', page)
      })
      query.helpers.setQuery((helper) => {
        helper.query.set('pageSize', pageSize)
      })
    },
    pageSize,
    total: query.total || 0,
  }
}

export default { getCurrentNumber, getPaginationProps }
