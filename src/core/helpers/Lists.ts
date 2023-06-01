import _ from 'lodash'

export interface ITransform {
  label: string
  value: any
  original: any
  key: any
}

// transform to labelInValue select AntDesign
function transform(
  list: any[],
  labelKey?: any,
  valueKey?: any,
  separator?:
    | string
    | ((values: string | string[], item: any, index: any) => string),
): ITransform[] {
  if (!list) return []

  return list.map((item, index) => {
    const name = []
    if (_.isArray(labelKey)) {
      labelKey.forEach((key) => {
        name.push(_.get(item, key))
      })
    } else if (_.isNil(labelKey)) {
      name.push(item)
    } else {
      name.push(_.get(item, labelKey))
    }

    let value
    if (_.isNil(valueKey)) {
      value = item
    } else if (_.isArray(valueKey)) {
      for (let i = 0; i < valueKey.length; i += 1) {
        const val = _.get(item, valueKey[i])
        if (val !== undefined) {
          value = val
          // stop loop jika value ada
          break
        }
      }
    } else {
      value = _.get(item, valueKey)
    }

    const label = _.isFunction(separator)
      ? // @ts-ignore
        separator(name.length <= 1 ? name[0] : name, item, index)
      : // @ts-ignore
        name.join(separator || ' - ')
    return {
      label,
      original: item,
      value,
      key: value,
    }
  })
}

const Lists = {
  transform,
}

export default Lists
