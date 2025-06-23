import React from 'react'
import { Home, AlertCircle } from 'lucide-react'
import { useNavigate } from 'react-router'

const NotFound: React.FC = () => {
  const navigate = useNavigate()
  const handleGoHome = () => {
    navigate('/')
  }
  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <div className="flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md text-center">
        <div className="mb-8">
          <AlertCircle className="mx-auto h-24 w-24 text-sky-600 opacity-80" />
        </div>

        <div className="mb-8">
          <h1 className="mb-4 text-6xl font-bold text-gray-700">404</h1>
          <h2 className="mb-4 text-2xl font-semibold text-gray-600">
            Page Not Found
          </h2>
          <p className="text-lg leading-relaxed text-gray-500">
            Oops! The page you're looking for doesn't exist. It might have yet
            to be added.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={handleGoHome}
            className="flex w-full items-center justify-center rounded-lg bg-sky-500 px-6 py-3 font-medium text-white shadow-lg transition-colors duration-200 hover:bg-blue-600 hover:shadow-xl"
          >
            <Home className="mr-2 h-5 w-5" />
            Return Home
          </button>

          <button
            onClick={handleGoBack}
            className="w-full rounded-lg border border-gray-300 bg-transparent px-6 py-3 font-medium text-gray-600 transition-all duration-200 hover:border-gray-400 hover:bg-white hover:bg-opacity-20 hover:text-gray-700"
          >
            Go Back
          </button>
        </div>

        <div className="mt-12 text-sm text-gray-400">
          <p>Want to contribute to this page? Check out the Github repo!</p>
        </div>
      </div>
    </div>
  )
}

export default NotFound
