import type { AspidaClient } from 'aspida'
import type { Methods as Methods0 } from './licenses'
import type { Methods as Methods1 } from './word'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/licenses'
  const PATH1 = '/word'
  const GET = 'GET'

  return {
    licenses: {
      get: (option: { headers: Methods0['get']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
      $get: (option: { headers: Methods0['get']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    word: {
      get: (option: { headers: Methods1['get']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods1['get']['resBody']>(prefix, PATH1, GET, option).json(),
      $get: (option: { headers: Methods1['get']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods1['get']['resBody']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
