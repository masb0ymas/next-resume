import numeral from 'numeral'

function numberFormat(value: string | number) {
  const number = numeral(value).format('0,0')

  return number
}

export default numberFormat
