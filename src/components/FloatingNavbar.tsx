"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Info, Users } from "lucide-react";

export default function FloatingNavbar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50">
      <nav className="bg-white/80 backdrop-blur-md shadow-lg rounded-full px-6 py-3 mx-4">
        <ul className="flex items-center space-x-8">
          <li>
            <Link
              href="/"
              className={`flex flex-col items-center p-2 transition-colors ${
                pathname === "/"
                  ? "text-primary"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <Home className="h-5 w-5" />
              <span className="text-xs mt-1">Home</span>
            </Link>
          </li>
          <li>
            <Link
              href="/how-it-works"
              className={`flex flex-col items-center p-2 transition-colors ${
                pathname === "/how-it-works"
                  ? "text-primary"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <Info className="h-5 w-5" />
              <span className="text-xs mt-1">How It Works</span>
            </Link>
          </li>
          <li>
            <Link
              href="/credits"
              className={`flex flex-col items-center p-2 transition-colors ${
                pathname === "/credits"
                  ? "text-primary"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <Users className="h-5 w-5" />
              <span className="text-xs mt-1">Credits</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
