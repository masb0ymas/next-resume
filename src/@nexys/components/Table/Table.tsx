import cssTable from '@nexys/components/Table/Table.module.scss'
import { Col, Row } from 'antd'
import cx from 'classnames'
import ReactTable, { TableProps } from 'react-table-6'
import 'react-table-6/react-table.css'

function Table<D>(props: Partial<TableProps<D>>) {
  const { className, ...otherProps } = props

  return (
    <div id={cssTable.customTable}>
      <Row>
        <Col xs={24}>
          <ReactTable
            className={cx(className)}
            {...otherProps}
            showPagination={false}
          />
        </Col>
      </Row>
    </div>
  )
}

export default Table
