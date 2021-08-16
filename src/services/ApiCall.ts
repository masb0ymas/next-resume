import { AxiosInstance } from 'axios'
import { BASE_API_URL } from 'constant'
import Fetcher from 'services/Fetcher'
import { LoginAttributes } from 'views/Login'

interface IMultipleIds {
  ids: string | string[]
}

class BaseApiCall {
  public api: AxiosInstance

  constructor() {
    this.api = Fetcher.createAuthAxios(BASE_API_URL, 'access_token')
  }

  login(data: LoginAttributes) {
    return this.api.post(`/auth/sign-in`, data)
  }

  logout(data: any) {
    return this.api.post(`/logout`, data)
  }

  User = {
    create: (data: any) => {
      return this.api.post(`/user`, data)
    },
    update: (id: string, data: any) => {
      return this.api.put(`/user/${id}`, data)
    },
    softDelete: (id: string) => {
      return this.api.delete(`/user/soft-delete/${id}`)
    },
    forceDelete: (id: string) => {
      return this.api.delete(`/user/force-delete/${id}`)
    },
    restore: (id: string) => {
      return this.api.put(`/user/restore/${id}`)
    },
    multipleSoftDelete: (data: IMultipleIds) => {
      return this.api.post(`/user/multiple/soft-delete`, data)
    },
    multipleForceDelete: (data: IMultipleIds) => {
      return this.api.post(`/user/multiple/force-delete`, data)
    },
    multipleRestore: (data: IMultipleIds) => {
      return this.api.post(`/user/multiple/restore`, data)
    },
  }

  Role = {
    create: (data: any) => {
      return this.api.post(`/role`, data)
    },
    update: (id: string, data: any) => {
      return this.api.put(`/role/${id}`, data)
    },
    softDelete: (id: string) => {
      return this.api.delete(`/role/soft-delete/${id}`)
    },
    forceDelete: (id: string) => {
      return this.api.delete(`/role/force-delete/${id}`)
    },
    restore: (id: string) => {
      return this.api.put(`/role/restore/${id}`)
    },
    multipleSoftDelete: (data: IMultipleIds) => {
      return this.api.post(`/role/multiple/soft-delete`, data)
    },
    multipleForceDelete: (data: IMultipleIds) => {
      return this.api.post(`/role/multiple/force-delete`, data)
    },
    multipleRestore: (data: IMultipleIds) => {
      return this.api.post(`/role/multiple/restore`, data)
    },
  }
}

const ApiCall = new BaseApiCall()

export default ApiCall
