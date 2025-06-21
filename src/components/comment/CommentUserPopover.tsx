import { Badge } from '@/components/layout/ui/badge'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/layout/ui/popover'
import { Building2, ExternalLink, Globe, Phone } from 'lucide-react'
import { useState } from 'react'

function CommentUserPopover() {
  const [companyDetailsOpen, setCompanyDetailsOpen] = useState(false)

  const userData = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
  }
  return (
    <div className="overflow-hidden p-0">
      {/* Header with gradient background */}
      <div className="rounded-lg bg-gradient-to-r from-sky-500 to-sky-300 px-6 py-4 text-white">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-lg font-semibold text-white backdrop-blur-sm">
            {getInitials(userData.name)}
          </div>
          <div>
            <h3 className="text-lg font-semibold">{userData.name}</h3>
            <p className="text-sm text-blue-100">@{userData.username}</p>
          </div>
        </div>
      </div>

      <div className="space-y-4 p-6">
        {/* Contact Information */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <Phone className="h-4 w-4 text-gray-500" />
            <span className="font-mono">{userData.phone}</span>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <Globe className="h-4 w-4 text-gray-500" />
            <a
              href={`https://${userData.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
            >
              {userData.website}
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Company Section with Hover Popover */}
        <div className="border-t pt-4">
          <div className="mb-2 flex items-center gap-2">
            <Building2 className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium">Company</span>
          </div>

          <Popover
            open={companyDetailsOpen}
            onOpenChange={setCompanyDetailsOpen}
          >
            <PopoverTrigger asChild>
              <div
                className="cursor-default rounded-lg border p-3 transition-colors hover:bg-gray-50"
                onMouseEnter={() => setCompanyDetailsOpen(true)}
              >
                <div className="font-medium text-gray-900">
                  {userData.company.name}
                </div>
                <div className="mt-1 text-xs text-gray-500">
                  Hover for details
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent
              className="w-72 bg-white"
              side="right"
              align="start"
              onMouseEnter={() => setCompanyDetailsOpen(true)}
              onMouseLeave={() => setCompanyDetailsOpen(false)}
            >
              <div className="space-y-3">
                <h4 className="flex items-center gap-2 font-semibold text-gray-900">
                  <Building2 className="h-4 w-4" />
                  {userData.company.name}
                </h4>

                <div>
                  <label className="text-xs font-medium uppercase tracking-wide text-gray-500">
                    Mission
                  </label>
                  <p className="mt-1 text-sm italic text-gray-700">
                    "{userData.company.catchPhrase}"
                  </p>
                </div>

                <div>
                  <label className="text-xs font-medium uppercase tracking-wide text-gray-500">
                    Focus Area
                  </label>
                  <Badge variant="secondary" className="mt-1">
                    {userData.company.bs}
                  </Badge>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Status Badge */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>User ID: #{userData.id}</span>
          <Badge variant="outline" className="border-green-200 text-green-600">
            ● Online
          </Badge>
        </div>
      </div>
    </div>
  )
}

export default CommentUserPopover
