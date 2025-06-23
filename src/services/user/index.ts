import { useQuery } from '@tanstack/react-query'
import { api } from '../api'

const getUsers = () => api.get('/users')

export const useGetUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  })
}
