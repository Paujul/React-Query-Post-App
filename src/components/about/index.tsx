import {
  Code,
  Database,
  Globe,
  Layers,
  Palette,
  Zap,
  Github,
  ExternalLink,
  Heart,
} from 'lucide-react'

function AboutPage() {
  const technologies = [
    {
      name: 'React 18',
      icon: <Code className="h-5 w-5" />,
      description: 'Modern UI library with hooks and concurrent features',
      color: 'text-blue-500',
    },
    {
      name: 'TypeScript',
      icon: <Layers className="h-5 w-5" />,
      description: 'Type-safe JavaScript for better development experience',
      color: 'text-blue-600',
    },
    {
      name: 'Vite',
      icon: <Zap className="h-5 w-5" />,
      description: 'Lightning-fast build tool and development server',
      color: 'text-yellow-500',
    },
    {
      name: 'Tailwind CSS',
      icon: <Palette className="h-5 w-5" />,
      description: 'Utility-first CSS framework for rapid UI development',
      color: 'text-cyan-500',
    },
    {
      name: 'TanStack Query',
      icon: <Database className="h-5 w-5" />,
      description: 'Powerful data synchronization for React applications',
      color: 'text-red-500',
    },
    {
      name: 'JSONPlaceholder',
      icon: <Globe className="h-5 w-5" />,
      description: 'Fake REST API for testing and prototyping',
      color: 'text-green-500',
    },
  ]

  const features = [
    {
      title: 'Post Management',
      description:
        'Browse, search, and view detailed posts with interactive modals',
      gradient: 'from-blue-500 to-sky-600',
    },
    {
      title: 'User Directory',
      description:
        'Explore user profiles with comprehensive contact information',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Comments System',
      description: 'View post comments with rich user information popovers',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Responsive Design',
      description: 'Fully responsive interface that works on all devices',
      gradient: 'from-orange-500 to-red-600',
    },
  ]

  return (
    <div className="min-h-screen text-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <div className="text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <div className="size-5 rounded-full bg-white" />
              <h1 className="text-5xl font-bold">Posts App</h1>
            </div>
            <p className="mx-auto max-w-3xl text-xl">
              A modern React application showcasing my practices in frontend
              development, featuring posts management, user profiles, and
              interactive UI components.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* About Section */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold text-slate-800">
            About This Project
          </h2>
          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-slate-600">
            This application is NOT a comprehensive demonstration of modern
            React development practices. This is one of my practices of using
            React Query to fetch datas. Built with TypeScript for type safety,
            it leverages the JSONPlaceholder API to provide a realistic data
            experience while showcasing smooch chef-kiss UI patterns using
            ShadCN, a little bit of state management, and of course, <br />
            <span className="font-bold">no useEffect AT ALL</span>.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-slate-800">
            Key Features
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`mb-4 h-12 w-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                >
                  <div className="h-6 w-6 rounded bg-white/20"></div>
                </div>
                <h4 className="mb-2 text-lg font-semibold text-slate-800">
                  {feature.title}
                </h4>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-slate-800">
            Built With
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-md"
              >
                <div className={`${tech.color} rounded-lg bg-slate-100 p-2`}>
                  {tech.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">{tech.name}</h4>
                  <p className="text-sm text-slate-600">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* API Information */}
        <div className="mb-16 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center">
              <div className="rounded-full bg-gradient-to-r from-green-500 to-emerald-600 p-3">
                <Database className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-slate-800">
              Data Source
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-slate-600">
              This application uses JSONPlaceholder, a free fake REST API for
              testing and prototyping. It provides realistic data for posts,
              users, and comments without requiring a backend setup.
            </p>
            <a
              href="https://jsonplaceholder.typicode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 font-medium text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              Visit JSONPlaceholder
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Development Section */}
        <div className="text-center flex flex-col gap-6">
          <div className="mb-6 flex items-center justify-center">
            <div className="rounded-full bg-gradient-to-r from-slate-600 to-slate-800 p-3">
              <Github className="h-6 w-6 text-white" />
            </div>
          </div>
          <h3 className="mb-4 text-2xl font-bold text-slate-800">
            Open Source
          </h3>
          <p className="mx-auto max-w-2xl text-slate-600">
            This project demonstrates modern React patterns based on what{' '}
            <span className="font-semibold text-[#DE7356]">Claude </span> had
            taught me including component composition, TypeScript integration,
            and responsive design. Feel free to explore the code and use it as a
            reference for your own projects.
          </p>

          <a
            href="https://github.com/paujul"
            target="_blank"
            className="text-sm font-semibold"
          >
            Visit my Github
          </a>

          <div className="mt-3 flex items-center justify-center gap-2 text-sm text-slate-500">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>
              using modern web technologies (hardcoded + vibe coding 🗿)
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
