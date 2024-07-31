import axios from 'axios'
import { GET_TOKEN } from '@/utils/token'

axios.interceptors.request.use((config) => {
  if (GET_TOKEN()) {
    config.headers.Authorization = GET_TOKEN()
  }
  return config
})
