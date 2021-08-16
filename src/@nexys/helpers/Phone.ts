import parsePhoneNumber from 'libphonenumber-js'

function formatPhone(phone: string) {
  if (phone) {
    const phoneNumber = parsePhoneNumber(phone)
    return phoneNumber.formatInternational()
  }

  return '-'
}

export default formatPhone
