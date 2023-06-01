import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { BASE_API_URL } from '~/core/constants/ConstBaseURL'
import useUrlQuery, {
  UseUrlQueryOptions,
} from '~/core/hooks/useUrlQuery/useUrlQuery'
import { UserEntity } from '~/data/entities/User'
import UserRepository from '~/data/repository/UserRepository'

type UseResult = UserEntity

type TQueryFnData = UseResult
type TError = AxiosError

// endpoint API
const endpointURL = `${BASE_API_URL}/user`

function useUserById(
  id: string,
  urlOptions?: UseUrlQueryOptions,
  options?: UseQueryOptions<TQueryFnData, TError>
) {
  const urlQuery = useUrlQuery(urlOptions)
  const query = useQuery<TQueryFnData, TError>(
    urlQuery.transformKey(['/user-by-id', id]),
    () =>
      UserRepository.api
        .get(urlQuery.transformUrl(`${endpointURL}/${id}`))
        .then((res) => res.data),
    {
      // refetchOnMount: false,
      // refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      select: (res: any) => res?.data,
      enabled: Boolean(id),
      ...options,
    }
  )

  return {
    ...query,
    helper: urlQuery,
  }
}

export default useUserById
