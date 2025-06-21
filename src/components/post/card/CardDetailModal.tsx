import CommentList from '@/components/comment/CommentList'
import { DialogContent, DialogTitle } from '@/components/layout/ui/dialog'
import { useGetPost } from '@/services/posts'

type PostId = {
  id: number
}

function CardDetailModal({ id }: PostId) {
  const { data: post, isLoading, error } = useGetPost(id)

  if (error) {
    return (
      <DialogContent className="bg-white [&>button]:hidden">
        <DialogTitle>Error</DialogTitle>
        <p>Failed to load post {id}</p>
      </DialogContent>
    )
  }

  return (
    <DialogContent className="bg-white [&>button]:hidden">
      <DialogTitle className="capitalize">
        {!isLoading ? post?.data?.title : 'Loading'}
      </DialogTitle>

      <p>{!isLoading ? post?.data?.body : 'Loading'}</p>

      <span>
        Username: User ID {!isLoading ? post?.data?.userId : 'Loading'}
      </span>

      <section>
        <h1 className="text-lg font-semibold">Comments</h1>
        <hr className="my-2" />

        <div className="flex flex-col gap-3">
          <CommentList id={id} />
        </div>
      </section>
    </DialogContent>
  )
}

export default CardDetailModal
