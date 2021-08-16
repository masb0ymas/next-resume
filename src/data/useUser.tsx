import useUrlQuery, {
  UseUrlQueryOptions,
} from '@nexys/hooks/useUrlQuery/useUrlQuery'
import { AxiosError } from 'axios'
import { BASE_API_URL } from 'constant'
import { UseRoleData } from 'data/useRole'
import { useQuery, UseQueryOptions } from 'react-query'
import ApiCall from 'services/ApiCall'

export interface UseUserData {
  id: string
  fullName: string
  email?: string | null
  phone: string
  picturePath: string
  isActive?: boolean | null
  address: string
  RoleId: string
  Role: UseRoleData
  createdAt: string
  updatedAt: string
  deletedAt: string
}

type UseUserResult = {
  data: UseUserData[]
  total: number
}

type TQueryFnData = UseUserResult
type TError = AxiosError

function useUser(
  urlOptions?: UseUrlQueryOptions,
  options?: UseQueryOptions<TQueryFnData, TError>,
) {
  const urlQuery = useUrlQuery(urlOptions)
  const query = useQuery<TQueryFnData, TError>(
    urlQuery.transformKey('/user'),
    () =>
      ApiCall.api
        .get(urlQuery.transformUrl(`${BASE_API_URL}/user?`))
        .then((res) => {
          return res.data
        }),
    {
      ...options,
    },
  )

  return {
    ...query,
    data: query.data?.data,
    total: query.data?.total,
    helpers: urlQuery,
  }
}

export default useUser
