import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { BASE_API_URL } from '~/core/constants/ConstBaseURL'
import useUrlQuery, {
  UseUrlQueryOptions,
} from '~/core/hooks/useUrlQuery/useUrlQuery'
import { UserEntity } from '~/data/entities/User'
import UserRepository from '~/data/repository/UserRepository'

type UseResult = {
  data: UserEntity[]
  total: number
}

type TQueryFnData = UseResult
type TError = AxiosError

// endpoint API
const endpointURL = `${BASE_API_URL}/user?`

function useUser(
  urlOptions?: UseUrlQueryOptions,
  options?: UseQueryOptions<TQueryFnData, TError>
) {
  const urlQuery = useUrlQuery(urlOptions)
  const query = useQuery<TQueryFnData, TError>(
    urlQuery.transformKey('/user'),
    () =>
      UserRepository.api
        .get(urlQuery.transformUrl(endpointURL))
        .then((res) => res.data),
    { ...options }
  )

  return {
    ...query,
    data: query.data?.data ?? [],
    total: query.data?.total ?? 0,
    helpers: urlQuery,
  }
}

export default useUser
