import { Pagination } from 'antd'
import { PaginationProps } from 'antd/lib/pagination'
import React from 'react'

function MyPagination(props: PaginationProps) {
  return (
    <Pagination
      responsive
      size="small"
      showTotal={(total) => `Total ${total} items`}
      showSizeChanger={false}
      {...props}
    />
  )
}

export default MyPagination
