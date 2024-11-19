'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Info, Users } from 'lucide-react'

export default function FloatingNavbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg rounded-t-xl">
      <div className="max-w-md mx-auto px-4 py-2">
        <ul className="flex justify-around">
          <li>
            <Link 
              href="/" 
              className={`flex flex-col items-center p-2 ${pathname === '/' ? 'text-primary' : 'text-gray-500'}`}
            >
              <Home className="h-6 w-6" />
              <span className="text-xs mt-1">Home</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/how-it-works" 
              className={`flex flex-col items-center p-2 ${pathname === '/how-it-works' ? 'text-primary' : 'text-gray-500'}`}
            >
              <Info className="h-6 w-6" />
              <span className="text-xs mt-1">How It Works</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/credits" 
              className={`flex flex-col items-center p-2 ${pathname === '/credits' ? 'text-primary' : 'text-gray-500'}`}
            >
              <Users className="h-6 w-6" />
              <span className="text-xs mt-1">Credits</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}