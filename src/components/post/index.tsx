import { useState } from 'react'
import { useGetPosts } from '@/services/posts'
import Card from './card'
import type { Post } from '@/types/post'
import CardSkeleton from './card/CardSkeleton'

function PostPage() {
  const { data: posts, isLoading } = useGetPosts()
  const [search, setSearch] = useState('')

  const filteredPosts = posts?.data.filter(
    (post: Post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.body.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 p-5">
      <h1 className="text-center text-3xl font-bold">Search Posts</h1>

      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="h-12 w-96 rounded-lg border-2 p-2 focus:outline-sky-500"
        disabled={isLoading}
      />

      <div className="flex flex-wrap gap-5">
        {isLoading
          ? // Show 5 skeleton cards while loading
            Array.from({ length: 5 }).map((_, index) => (
              <CardSkeleton key={index} />
            ))
          : // Show actual posts when loaded
            filteredPosts?.map((post: Post) => (
              <Card
                id={post.id}
                userId={post.userId}
                title={post.title}
                key={post.id}
                body={post.body}
              />
            ))}
      </div>
    </div>
  )
}

export default PostPage
