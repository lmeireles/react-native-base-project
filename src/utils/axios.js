import axios from 'axios'
import storage from './storage'
import { API_URL } from 'react-native-dotenv'

export default function () {
  // Create a basic Axios instance to all requests (this object can be customized before making the call)
  const instance = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
    }
  });

  // Insert token on all requests when there is a token in the device storage
  instance.interceptors.request.use(async function (config) {
    const token = await storage.load('access_token');

    if (token) {
      config.headers.common['Authorization'] = `Bearer ${token}`
    }

    return config
  });

  return instance
}
