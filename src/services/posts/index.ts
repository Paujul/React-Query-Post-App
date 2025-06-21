import { useMutation, useQuery } from '@tanstack/react-query'
import { api } from '../api'

const getPosts = () => api.get('/posts')
const getPost = (id: number) => api.get(`/posts/${id}`)
const getPostComment = (id: number) => api.get(`/comments?postId=${id}`)
const postPost = () => api.post('/posts')

export const useGetPosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  })
}

export const useGetPost = (id: number) => {
  return useQuery({
    queryKey: ['post', id],
    queryFn: () => getPost(id),
    enabled: !!id, // only run if id is truthy
  })
}

export const useGetPostComments = (id: number) => {
  return useQuery({
    queryKey: ['postComments', id],
    queryFn: () => getPostComment(id),
    enabled: !!id,
  })
}

export const useCreatePost = () => {
  return useMutation({
    mutationFn: postPost,
  })
}
