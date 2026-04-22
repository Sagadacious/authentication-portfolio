import { createFileRoute, Link } from '@tanstack/react-router'

import { Route as registerRoute } from './registration'
import { Route as forgotRoute } from './forgot'
import { Button } from '#/components/ui/button'

export const Route = createFileRoute('/authentication/login')({
  component: LoginPage,
})

function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
          <p className="text-gray-600 mt-2">Sign in to your account</p>
        </div>
        
        <form action="/api/auth/login" method="POST" className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
            />
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <Link to={forgotRoute.to} className="text-sm text-blue-600 hover:text-blue-700">
                Forgot Password?
              </Link>
            </div>
            <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
            />
          </div>
          
          <div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium">
              Sign In
            </Button>
          </div>
          
          <div className="text-center">
            <span className="text-gray-600">Don't have an account? </span>
            <Link to={registerRoute.to} className="text-blue-600 hover:text-blue-700 font-medium">
              Sign up now
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
