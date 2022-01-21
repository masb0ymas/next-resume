import moment, { Moment } from 'moment'
import { isNil } from 'lodash'
import 'moment/locale/id'

moment.locale('id')

const formatDate = (date: string | Date) => {
  return moment(date).format('DD MMMM YYYY')
}

const formatDateTime = (date: string | Date) => {
  return moment(date).format('DD MMMM YYYY HH:mm:ss')
}

const formatDateYear = (date: string | Date) => {
  return moment(date).format('YYYY')
}

const formatYearToDate = (year: number | string) => {
  return moment([year])
}

function parse(date: string | Moment | null | undefined) {
  if (isNil(date)) {
    return date
  }
  return moment.isMoment(date) ? date : moment(date)
}

export default {
  formatDate,
  formatDateTime,
  formatDateYear,
  formatYearToDate,
  parse,
}
