import { createFileRoute, Link } from '@tanstack/react-router'

import { Route as loginRoute } from './login';
import { Button } from '#/components/ui/button';

export const Route = createFileRoute('/authentication/forgot')({
  component: ForgotPage,
})

function ForgotPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Reset Password</h2>
          <p className="text-gray-600 mt-2">Enter your email to receive reset instructions</p>
        </div>
        
        <form action="/api/auth/forgot-password" method="POST" className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
            />
          </div>
          
          <div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium">
              Send Reset Password
            </Button>
          </div>
          
          <div className="text-center">
            <span className="text-gray-600">Remember your password? </span>
            <Link to={loginRoute.to} className="text-blue-600 hover:text-blue-700 font-medium">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}