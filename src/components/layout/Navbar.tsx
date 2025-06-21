import { User } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'

function Navbar() {
  return (
    <nav className="fixed z-10 w-full bg-white">
      <div className="mx-5 flex min-h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-5 rounded-full bg-black" />
          <h1 className="text-2xl font-semibold">Posts</h1>
        </div>

        <ul className="flex gap-5 text-sm font-semibold">
          <li>Posts</li>
          <li>Users</li>
          <li>Comments</li>
          <li>About</li>
        </ul>

        <Popover>
          <PopoverTrigger>
            <div className="flex size-10 items-center justify-center rounded-full border-2 border-black">
              <User />
            </div>
          </PopoverTrigger>

          <PopoverContent className="mr-5 mt-2">ASD</PopoverContent>
        </Popover>
      </div>
    </nav>
  )
}

export default Navbar
