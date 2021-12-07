import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'

export const coreApiInstance = axios.create({
  baseURL: 'https://api.github.com/',
})

const ApiService = <T>({
  method, url, params, data,
}: AxiosRequestConfig): Promise<AxiosResponse<T>> => coreApiInstance.request<T>({
  method,
  url,
  params,
  data,
})

export default ApiService
