import type { AspidaClient } from 'aspida'


const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')



  return {

  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
