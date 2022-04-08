import type { AspidaClient } from 'aspida'
import type { Methods as Methods0 } from './licenses'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/licenses'
  const GET = 'GET'

  return {
    licenses: {
      get: (option: { headers: Methods0['get']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
      $get: (option: { headers: Methods0['get']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
