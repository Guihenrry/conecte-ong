import { redirect } from 'next/navigation'
import { isAuthenticated } from '@/auth/auth'

import { AuthDecoration } from '@/components/AuthDecoration'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  if (isAuthenticated()) redirect('/')

  return (
    <div
      className="grid md:grid-cols-2"
      style={{
        height: 'calc(100vh - 89px)',
      }}
    >
      <div className="w-full h-full flex items-center justify-center">
        {children}
      </div>
      <div className="hidden md:flex">
        <AuthDecoration />
      </div>
    </div>
  )
}
