import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/layout/ui/popover'
import CommentUserPopover from '@/components/comment/CommentUserPopover'
import type { Comment } from '@/types/post'
import { useState } from 'react'

function CommentCard({ name, email, body }: Comment) {
  const [nestedOpen, setNestedOpen] = useState(false)
  return (
    <div className="flex w-full flex-1 flex-col rounded-lg border p-3">
      <div className="mb-2 flex justify-between text-sm font-semibold">
        <span className="capitalize">{name}</span>

        <Popover open={nestedOpen} onOpenChange={setNestedOpen}>
          <PopoverTrigger
            asChild
            onMouseEnter={() => setNestedOpen(true)}
            className="cursor-default"
          >
            <span>{email}</span>
          </PopoverTrigger>

          <PopoverContent
            className="bg-white"
            side="right"
            align="start"
            onMouseLeave={() => setNestedOpen(false)}
          >
            <CommentUserPopover />
          </PopoverContent>
        </Popover>
      </div>

      <p className="leading-snug">{body}</p>
    </div>
  )
}

export default CommentCard
