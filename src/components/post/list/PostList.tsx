import { useGetPosts } from '@/services/posts'
import Card from '../card'
import type { Post } from '@/types/post'

function PostList() {
  const { data: posts } = useGetPosts()
  return (
    <div className="flex w-full flex-wrap gap-5 p-5">
      {posts?.data.map((post: Post) => (
        <Card
          id={post.id}
          userId={post.userId}
          title={post.title}
          key={post.id}
          body={post.body}
        />
      ))}
    </div>
  )
}

export default PostList
