import { useState } from 'react'
import { Dialog, DialogTrigger } from '@/components/layout/ui/dialog'
import { ArrowRight } from 'lucide-react'
import CardDetailModal from './CardDetailModal'
import type { Post } from '@/types/post'

function Card({ userId, title, body, id }: Post) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-1 flex-col rounded-lg border p-3">
      <div className="mb-3 flex justify-between">
        <h3 className="w-[50%] truncate text-sm font-semibold capitalize">
          {title}
        </h3>
        <span className="text-sm font-semibold">User ID: {userId}</span>
      </div>

      <div className="flex flex-1 flex-col">
        <p className="mb-2 line-clamp-3">{body}</p>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger className="flex h-full flex-1 items-center justify-center gap-2 self-end px-2 text-sm font-semibold text-sky-500">
            <span>See Post</span> <ArrowRight className="size-5" />
          </DialogTrigger>

          {/* Only render modal when dialog is open */}
          {isOpen && <CardDetailModal id={id} />}
        </Dialog>
      </div>
    </div>
  )
}

export default Card
