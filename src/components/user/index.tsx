import {
  Mail,
  Phone,
  Globe,
  MapPin,
  Building,
  Users,
  Loader2,
  AlertCircle,
} from 'lucide-react'
import { useGetUsers } from '@/services/user'
import type { User } from '@/types/user'

const UserList = () => {
  const { data: usersResponse, isLoading, error } = useGetUsers()
  const users = usersResponse?.data || []

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
  }

  const getGradientClass = (index: number) => {
    const gradients = ['from-blue-500 to-sky-600']
    return gradients[index % gradients.length]
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <Loader2 className="mx-auto mb-4 h-12 w-12 animate-spin text-blue-500" />
          <p className="text-lg text-slate-600">Loading amazing people...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 p-4">
        <div className="max-w-md rounded-lg border border-red-200 bg-white p-6 shadow-lg">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-500" />
            <div>
              <h3 className="mb-1 font-semibold text-slate-800">
                Error Loading Users
              </h3>
              <p className="text-sm text-slate-600">
                {error instanceof Error ? error.message : 'An error occurred'}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="">
      {/* Header */}
      <div className="sticky top-16 z-10 border-b border-slate-200 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="text-center">
            <div className="mb-2 flex items-center justify-center gap-3">
              <div className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 p-2">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h1 className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-3xl font-bold text-transparent">
                Our Amazing Team
              </h1>
            </div>
            <p className="mx-auto max-w-2xl text-slate-600">
              Meet the talented individuals who make our community
              extraordinary. Connect, collaborate, and create together.
            </p>
          </div>
        </div>
      </div>

      {/* User Grid */}
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user: User, index: number) => (
            <div
              key={user.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
            >
              {/* Card Header with Avatar */}
              <div className="relative p-6 pb-4">
                <div className="flex items-start gap-4">
                  <div
                    className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${getGradientClass(index)} flex flex-shrink-0 items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105`}
                  >
                    <span className="text-lg font-bold text-white">
                      {getInitials(user.name)}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="mb-1 truncate text-xl font-semibold text-slate-800">
                      {user.name}
                    </h3>
                    <p className="mb-2 text-sm text-slate-500">
                      @{user.username}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Building className="h-4 w-4 flex-shrink-0" />
                      <span className="truncate">{user.company.name}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Catchphrase */}
              <div className="px-6 pb-4">
                <div className="rounded-lg border border-slate-100 bg-gradient-to-r from-slate-50 to-blue-50 p-3">
                  <p className="text-center text-sm italic text-slate-700">
                    "{user.company.catchPhrase}"
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 px-6 pb-6">
                <div className="group/item flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-slate-800">
                  <Mail className="h-4 w-4 flex-shrink-0 text-blue-500" />
                  <span className="truncate group-hover/item:text-blue-600">
                    {user.email}
                  </span>
                </div>

                <div className="group/item flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-slate-800">
                  <Phone className="h-4 w-4 flex-shrink-0 text-green-500" />
                  <span className="group-hover/item:text-green-600">
                    {user.phone}
                  </span>
                </div>

                <div className="group/item flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-slate-800">
                  <Globe className="h-4 w-4 flex-shrink-0 text-purple-500" />
                  <span className="truncate group-hover/item:text-purple-600">
                    {user.website}
                  </span>
                </div>

                <div className="group/item flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-slate-800">
                  <MapPin className="h-4 w-4 flex-shrink-0 text-red-500" />
                  <span className="truncate group-hover/item:text-red-600">
                    {user.address.city}, {user.address.zipcode}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6">
                <button className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-sky-600 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]">
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="py-12 text-center text-slate-500">
        <p className="text-sm">Showing {users.length} amazing team members</p>
      </div>
    </div>
  )
}

export default UserList
