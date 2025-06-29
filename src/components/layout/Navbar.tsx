import { User } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Link } from 'react-router'
import RegisterPage from '../register'

function Navbar() {
  const routes = [
    {
      route: '/posts',
      label: 'Posts',
    },
    {
      route: '/users',
      label: 'Users',
    },
    {
      route: '/comments',
      label: 'Comments',
    },
    {
      route: '/about',
      label: 'About',
    },
  ]
  return (
    <nav className="sticky top-0 z-50 w-full bg-white">
      <div className="mx-5 flex min-h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-5 rounded-full bg-sky-500" />
          <Link to="/">
            <h1 className="text-2xl font-semibold">Posts</h1>
          </Link>
        </div>

        <ul className="flex gap-5 text-sm font-semibold">
          {routes.map((item) => (
            <Link to={item.route}>{item.label}</Link>
          ))}
        </ul>

        <Popover>
          <PopoverTrigger>
            <div className="flex size-10 items-center justify-center rounded-full border-2 border-black">
              <User />
            </div>
          </PopoverTrigger>

          <PopoverContent className="mr-5 mt-2 p-0 border-0 w-96">
            <RegisterPage />
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  )
}

export default Navbar
