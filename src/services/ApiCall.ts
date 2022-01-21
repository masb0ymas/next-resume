import Fetcher from 'services/Fetcher'
import { AxiosInstance } from 'axios'
import { BASE_API_URL } from 'constant'

interface IMultipleIds {
  ids: string | string[]
}

const LOCAL_STORAGE_SESSION =
  process.env.LOCAL_STORAGE_SESSION ?? 'token_sharaikios'

class BaseApiCall {
  public api: AxiosInstance

  constructor() {
    this.api = Fetcher.createAuthAxios(BASE_API_URL, LOCAL_STORAGE_SESSION)
  }

  login(data) {
    return this.api.post(`/auth/sign-in`, data)
  }

  Product = {
    create: (data: any) => {
      const formData = new FormData()
      Object.entries(data)?.forEach((items) => {
        const [key, value]: any = items

        // file multiple upload
        if (key === 'fileCover' || key === 'fileProducts') {
          if (value?.length > 0) {
            for (let i = 0; i < value.length; i += 1) {
              const item = value[i]

              formData.append(key, item?.originFileObj)
            }
          } else {
            formData.append(key, value)
          }
        } else {
          formData.append(key, value)
        }
      })
      return this.api.post(`/product`, formData)
    },
    update: (id: string, data: any) => {
      const formData = new FormData()
      Object.entries(data)?.forEach((items) => {
        const [key, value]: any = items

        // file multiple upload
        if (key === 'fileCover' || key === 'fileProducts') {
          if (value?.length > 0) {
            for (let i = 0; i < value.length; i += 1) {
              const item = value[i]

              formData.append(key, item?.originFileObj)
            }
          } else {
            formData.append(key, value)
          }
        } else {
          formData.append(key, value)
        }
      })
      return this.api.put(`/product/${id}`, data)
    },
    softDelete: (id: string) => {
      return this.api.delete(`/product/soft-delete/${id}`)
    },
    forceDelete: (id: string) => {
      return this.api.delete(`/product/force-delete/${id}`)
    },
    restore: (id: string) => {
      return this.api.put(`/product/restore/${id}`)
    },
    multipleSoftDelete: (data: IMultipleIds) => {
      return this.api.post(`/product/multiple/soft-delete`, data)
    },
    multipleForceDelete: (data: IMultipleIds) => {
      return this.api.post(`/product/multiple/force-delete`, data)
    },
    multipleRestore: (data: IMultipleIds) => {
      return this.api.post(`/product/multiple/restore`, data)
    },
  }

  InsuranceProduct = {
    create: (data: any) => {
      const formData = new FormData()
      Object.entries(data)?.forEach((items) => {
        const [key, value]: any = items

        // file multiple upload
        if (key === 'fileBrandLogo') {
          if (value?.length > 0) {
            for (let i = 0; i < value.length; i += 1) {
              const item = value[i]

              formData.append(key, item?.originFileObj)
            }
          } else {
            formData.append(key, value)
          }
        } else {
          formData.append(key, value)
        }
      })
      return this.api.post(`/insurance-product`, formData)
    },
    update: (id: string, data: any) => {
      const formData = new FormData()
      Object.entries(data)?.forEach((items) => {
        const [key, value]: any = items

        // file multiple upload
        if (key === 'fileBrandLogo') {
          if (value?.length > 0) {
            for (let i = 0; i < value.length; i += 1) {
              const item = value[i]

              formData.append(key, item?.originFileObj)
            }
          } else {
            formData.append(key, value)
          }
        } else {
          formData.append(key, value)
        }
      })
      return this.api.put(`/insurance-product/${id}`, data)
    },
    calculate: (data: any) => {
      return this.api.put(`/insurance-product/calculate`, data)
    },
    softDelete: (id: string) => {
      return this.api.delete(`/insurance-product/soft-delete/${id}`)
    },
    forceDelete: (id: string) => {
      return this.api.delete(`/insurance-product/force-delete/${id}`)
    },
    restore: (id: string) => {
      return this.api.put(`/insurance-product/restore/${id}`)
    },
    multipleSoftDelete: (data: IMultipleIds) => {
      return this.api.post(`/insurance-product/multiple/soft-delete`, data)
    },
    multipleForceDelete: (data: IMultipleIds) => {
      return this.api.post(`/insurance-product/multiple/force-delete`, data)
    },
    multipleRestore: (data: IMultipleIds) => {
      return this.api.post(`/insurance-product/multiple/restore`, data)
    },
  }
}

const ApiCall = new BaseApiCall()

export default ApiCall
