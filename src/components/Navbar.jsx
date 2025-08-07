"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Cpu, Zap } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-b border-gray-800/50">
      <div className="container mx-auto px-6 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800 rounded-lg flex items-center justify-center border border-gray-600 shadow-lg">
                <Cpu className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                <Zap className="w-2 h-2 text-white" />
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">DRC - SPIT</div>
              <div className="text-xs text-gray-400 -mt-1">Where brilliance is natural</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            <Link
              to="/"
              className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                isActive("/")
                  ? "bg-gradient-to-r from-gray-700 to-gray-600 text-white shadow-lg border border-gray-500"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/50 border border-transparent hover:border-gray-700"
              }`}
            >
              Home
            </Link>
            <Link
              to="/teams"
              className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                isActive("/teams")
                  ? "bg-gradient-to-r from-gray-700 to-gray-600 text-white shadow-lg border border-gray-500"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/50 border border-transparent hover:border-gray-700"
              }`}
            >
              Teams
            </Link>
            <Link
              to="/events"
              className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                isActive("/events")
                  ? "bg-gradient-to-r from-gray-700 to-gray-600 text-white shadow-lg border border-gray-500"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/50 border border-transparent hover:border-gray-700"
              }`}
            >
              Events
            </Link>
            <Link
              to="/join"
              className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                isActive("/join")
                  ? "bg-gradient-to-r from-gray-700 to-gray-600 text-white shadow-lg border border-gray-500"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/50 border border-transparent hover:border-gray-700"
              }`}
            >
              Join Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-2 pt-4">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isActive("/")
                    ? "bg-gradient-to-r from-gray-700 to-gray-600 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                Home
              </Link>
              <Link
                to="/teams"
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isActive("/teams")
                    ? "bg-gradient-to-r from-gray-700 to-gray-600 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                Teams
              </Link>
              <Link
                to="/events"
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isActive("/events")
                    ? "bg-gradient-to-r from-gray-700 to-gray-600 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                Events
              </Link>
              <Link
                to="/join"
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isActive("/join")
                    ? "bg-gradient-to-r from-gray-700 to-gray-600 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                Join Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
