import { Eye, EyeOff } from 'lucide-react'
import { forwardRef } from 'react'
import type { FieldError } from 'react-hook-form'

interface InputProps {
  label: string
  icon: React.ComponentType<{ className?: string }>
  type?: string
  placeholder?: string
  error?: FieldError
  showPasswordToggle?: boolean
  onPasswordToggle?: () => void
  showPassword?: boolean
  children?: React.ReactNode
}

type InputPropsWithRef = InputProps &
  React.InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputPropsWithRef>(
  (
    {
      label,
      icon: Icon,
      type = 'text',
      placeholder,
      error,
      showPasswordToggle,
      onPasswordToggle,
      showPassword,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div className="space-y-2">
        <label
          htmlFor={props.name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Icon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            ref={ref}
            id={props.name}
            type={
              showPasswordToggle ? (showPassword ? 'text' : 'password') : type
            }
            className={`block w-full rounded-lg border py-3 pl-10 ${showPasswordToggle ? 'pr-10' : 'pr-3'} placeholder-gray-400 shadow-sm transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              error
                ? 'border-red-300 bg-red-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
            placeholder={placeholder}
            {...props}
          />
          {showPasswordToggle && (
            <button
              type="button"
              onClick={onPasswordToggle}
              className="absolute inset-y-0 right-0 flex items-center pr-3 transition-colors hover:text-gray-600"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          )}
        </div>
        {children}
        {error && (
          <p className="flex items-center gap-1 text-sm text-red-600">
            <span className="h-1 w-1 rounded-full bg-red-600"></span>
            {error.message}
          </p>
        )}
      </div>
    )
  }
)

export default Input
