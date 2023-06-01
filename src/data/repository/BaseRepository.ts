import { AxiosInstance, AxiosResponse } from "axios"
import FetchApi from "~/config/Fetcher"
import { LOCAL_STORAGE_SESSION } from "~/config/env"
import { BASE_API_URL } from "~/core/constants/ConstBaseURL"


const Fetcher = new FetchApi(BASE_API_URL, LOCAL_STORAGE_SESSION)

interface BaseRepositoryEntity {
  endpoint: string
}

export interface MultipleIdsEntity {
  ids: string | string[]
}

class BaseRepository {
  public api: AxiosInstance

  private endpoint: string

  constructor(value: BaseRepositoryEntity) {
    this.api = Fetcher.default
    this.endpoint = value.endpoint
  }

  /**
   *
   * @param queryParams
   * @returns
   */
  public async findAll(queryParams: string): Promise<AxiosResponse<any, any>> {
    return this.api.get(`${this.endpoint}?${queryParams}`)
  }

  /**
   *
   * @param id
   * @returns
   */
  public async findById(id: string): Promise<AxiosResponse<any, any>> {
    return this.api.get(`${this.endpoint}/${id}`)
  }

  /**
   *
   * @param formData
   * @returns
   */
  public async create<TData>(
    formData: TData,
  ): Promise<AxiosResponse<any, any>> {
    return this.api.post(`${this.endpoint}`, formData)
  }

  /**
   *
   * @param id
   * @param formData
   * @returns
   */
  public async update<TData>(
    id: string,
    formData: TData,
  ): Promise<AxiosResponse<any, any>> {
    return this.api.put(`${this.endpoint}/${id}`, formData)
  }

  /**
   *
   * @param id
   * @returns
   */
  public async restore(id: string): Promise<AxiosResponse<any, any>> {
    return this.api.put(`${this.endpoint}/restore/${id}`)
  }

  /**
   *
   * @param id
   * @returns
   */
  public async softDelete(id: string): Promise<AxiosResponse<any, any>> {
    return this.api.delete(`${this.endpoint}/soft-delete/${id}`)
  }

  /**
   *
   * @param id
   * @returns
   */
  public async forceDelete(id: string): Promise<AxiosResponse<any, any>> {
    return this.api.delete(`${this.endpoint}/force-delete/${id}`)
  }

  /**
   *
   * @param data
   * @returns
   */
  public async multipleRestore(
    data: MultipleIdsEntity,
  ): Promise<AxiosResponse<any, any>> {
    return this.api.post(`${this.endpoint}/multiple/restore`, data)
  }

  /**
   *
   * @param data
   * @returns
   */
  public async multipleSoftDelete(
    data: MultipleIdsEntity,
  ): Promise<AxiosResponse<any, any>> {
    return this.api.post(`${this.endpoint}/multiple/soft-delete`, data)
  }

  /**
   *
   * @param data
   * @returns
   */
  public async multipleForceDelete(
    data: MultipleIdsEntity,
  ): Promise<AxiosResponse<any, any>> {
    const response = await this.api.post(
      `${this.endpoint}/multiple/force-delete`,
      data,
    )
    return response
  }
}

export default BaseRepository
