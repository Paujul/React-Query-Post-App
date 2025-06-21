import CommentCard from '@/components/comment/CommentCard'
import { useGetPostComments } from '@/services/posts'
import type { Comment } from '@/types/post'

type CommentId = {
  id: number
}

function CommentList({ id }: CommentId) {
  const { data: comments, isLoading, error } = useGetPostComments(id)

  if (isLoading) {
    return <p>Loading</p>
  }

  if (error) {
    return <p>Error</p>
  }

  return (
    <>
      {comments?.data?.map((comment: Comment) => (
        <CommentCard
          postId={comment.postId}
          id={comment.id}
          name={comment.name}
          email={comment.email}
          body={comment.body}
        />
      ))}
    </>
  )
}

export default CommentList
