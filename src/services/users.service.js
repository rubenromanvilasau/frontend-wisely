import axios from 'axios'

const API_URL = import.meta.env.VITE_BACKEND_URL

export const getUsers = () => {
  return axios.get(`${API_URL}/users`)
}
