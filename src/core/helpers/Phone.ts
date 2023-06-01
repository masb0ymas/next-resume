import parsePhoneNumber from 'libphonenumber-js'
import _ from 'lodash'

/**
 * 
 * @param phone 
 * @returns 
 */
function formatPhone(phone?: string | null) {
  if (!_.isEmpty(phone)) {
    const phoneNumber = parsePhoneNumber(String(phone))
    return phoneNumber?.formatInternational()
  }

  return '-'
}

export default formatPhone
