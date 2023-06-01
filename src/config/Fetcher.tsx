import { notifications } from '@mantine/notifications'
import { IconX } from '@tabler/icons-react'
import axios, { AxiosError, AxiosInstance } from 'axios'
import _ from 'lodash'
import Router from 'next/router'
import { ms } from '~/core/helpers/Formatter'
import { AXIOS_TIMEOUT } from './env'

const timeout = ms(AXIOS_TIMEOUT)

function createAxios(baseURL: string, keyLocalStorage?: string) {
  const instanceAxios = axios.create({ baseURL, timeout })

  // interceptor request
  if (!_.isEmpty(keyLocalStorage)) {
    instanceAxios.interceptors.request.use((config) => {
      const curConfig = { ...config }

      const SESSION_TOKEN = localStorage.getItem(String(keyLocalStorage))

      // ALWAYS READ UPDATED TOKEN
      try {
        curConfig.headers.Authorization = `Bearer ${SESSION_TOKEN}`
      } catch (e) {
        console.log(e)
      }

      return curConfig
    })
  }

  // interceptor response
  instanceAxios.interceptors.response.use(
    (response) => response,

    async (error: AxiosError) => {
      const statusCode = _.get(error, 'response.status', null)
      const message = _.get(error, 'response.data.message', null)

      const errorClientCode = [
        400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413,
        414, 415, 416, 417, 418, 421, 422, 423, 424, 425, 426, 428, 429, 431,
        451,
      ]

      const errorServerCode = [
        500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511,
      ]

      if (errorClientCode.includes(Number(statusCode))) {
        notifications.show({
          title: `Client Error : ${statusCode}`,
          message,
          color: 'red',
          withCloseButton: false,
          icon: <IconX size={16} />,
        })

        if (statusCode === 401) {
          Router.push('/login')
        }
      }

      if (errorServerCode.includes(Number(statusCode))) {
        const errMessage: any = error.response?.data ?? error.message

        notifications.show({
          title: `Server Error : ${statusCode}`,
          message: errMessage,
          color: 'red',
          withCloseButton: false,
          icon: <IconX size={16} />,
        })
      }

      return Promise.reject(error)
    }
  )

  return instanceAxios
}

class FetchApi {
  private axiosInstance: AxiosInstance | null

  private readonly baseURL: string

  private readonly keyLocalStorage?: string

  constructor(baseURL: string, keyLocalStorage?: string) {
    this.axiosInstance = null
    this.baseURL = baseURL
    this.keyLocalStorage = keyLocalStorage
  }

  public get default(): AxiosInstance {
    if (!this.axiosInstance) {
      this.axiosInstance = createAxios(this.baseURL, this.keyLocalStorage)

      return this.axiosInstance
    }

    return this.axiosInstance
  }
}

export default FetchApi
