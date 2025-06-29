import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { User, Mail, Lock, ArrowRight, CheckCircle } from 'lucide-react'
import Input from '../form/Input'

interface FormData {
  fullName: string
  email: string
  password: string
  confirmPassword: string
  terms: boolean
}

interface PasswordStrength {
  strength: number
  text: string
  color: string
}

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [registrationStatus, setRegistrationStatus] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
  })

  const password = watch('password')
  const confirmPassword = watch('confirmPassword')

  const getPasswordStrength = (password: string): PasswordStrength => {
    if (!password)
      return { strength: 0, text: 'Very Weak', color: 'bg-gray-200' }

    let strength = 0
    if (password.length >= 8) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/[a-z]/.test(password)) strength++
    if (/[0-9]/.test(password)) strength++
    if (/[^A-Za-z0-9]/.test(password)) strength++

    const levels: Omit<PasswordStrength, 'strength'>[] = [
      { text: 'Very Weak', color: 'bg-red-500' },
      { text: 'Weak', color: 'bg-orange-500' },
      { text: 'Fair', color: 'bg-yellow-500' },
      { text: 'Good', color: 'bg-blue-500' },
      { text: 'Strong', color: 'bg-green-500' },
    ]

    return { strength, ...(levels[strength - 1] || levels[0]) }
  }

  const passwordStrength = getPasswordStrength(password || '')

  const onSubmit = async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setRegistrationStatus(true)
  }

  return (
    <>
      {/* Form */}
      <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
        <div className="space-y-6">
          {/* Full Name */}
          <Input
            {...register('fullName', {
              required: 'Full name is required',
            })}
            label="Full Name"
            icon={User}
            placeholder="Enter your full name"
            error={errors.fullName}
          />

          {/* Email */}
          <Input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Please enter a valid email',
              },
            })}
            label="Email Address"
            icon={Mail}
            type="email"
            placeholder="Enter your email"
            error={errors.email}
          />

          {/* Password */}
          <Input
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters',
              },
            })}
            label="Password"
            icon={Lock}
            placeholder="Create a strong password"
            error={errors.password}
            showPasswordToggle
            showPassword={showPassword}
            onPasswordToggle={() => setShowPassword(!showPassword)}
          >
            {/* Password Strength Indicator */}
            {password && (
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 flex-1 rounded-full bg-gray-200">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${passwordStrength.color}`}
                      style={{
                        width: `${(passwordStrength.strength / 5) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <span className="text-xs font-medium text-gray-600">
                    {passwordStrength.text}
                  </span>
                </div>
              </div>
            )}
          </Input>

          {/* Confirm Password */}
          <Input
            {...register('confirmPassword', {
              required: 'Please confirm your password',
              validate: (value) =>
                value === password || 'Passwords do not match',
            })}
            label="Confirm Password"
            icon={Lock}
            placeholder="Confirm your password"
            error={errors.confirmPassword}
            showPasswordToggle
            showPassword={showConfirmPassword}
            onPasswordToggle={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
          >
            {/* Password Match Indicator */}
            {confirmPassword && password === confirmPassword && (
              <p className="flex items-center gap-1 text-sm text-green-600">
                <CheckCircle className="h-4 w-4" />
                Passwords match
              </p>
            )}
          </Input>

          {/* Terms and Conditions */}
          <div className="flex items-start gap-3">
            <input
              {...register('terms', {
                required: 'You must agree to the terms and conditions',
              })}
              id="terms"
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
            />
            <label
              htmlFor="terms"
              className="text-sm leading-relaxed text-gray-600"
            >
              I agree to the{' '}
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-700"
              >
                Terms of Service
              </a>{' '}
              and{' '}
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-700"
              >
                Privacy Policy
              </a>
            </label>
          </div>
          {errors.terms && (
            <p className="flex items-center gap-1 text-sm text-red-600">
              <span className="h-1 w-1 rounded-full bg-red-600"></span>
              {errors.terms.message}
            </p>
          )}

          {/* Submit Button */}
          <button
            onClick={handleSubmit(onSubmit)}
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 font-medium text-white transition-all duration-200 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                Creating Account...
              </>
            ) : (
              <>
                Create Account
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>

          {registrationStatus && (
            <p className="flex items-center justify-center gap-1 text-sm font-semibold text-green-600">
              <CheckCircle className="h-4 w-4" />
              Registration Successful!
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a
              href="#"
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
