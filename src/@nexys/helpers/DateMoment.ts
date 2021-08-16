import moment, { Moment } from 'moment'
import { isNil } from 'lodash'
import 'moment/locale/id'

moment.locale('id')

class DateMoment {
  public static formatDate(date: string | Date) {
    return moment(date).format('DD MMMM YYYY')
  }

  public static formatDateTime(date: string | Date) {
    return moment(date).format('DD MMMM YYYY HH:mm:ss')
  }

  public static parse(date: string | Moment | null | undefined) {
    if (isNil(date)) {
      return date
    }
    return moment.isMoment(date) ? date : moment(date)
  }
}

export default DateMoment
