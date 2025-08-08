'use client'

import { useState } from 'react'
import { Home, User, Code, Briefcase, FolderOpen, GraduationCap, Mail, Menu, X } from 'lucide-react'

interface NavigationProps {
  currentPage: string
  onPageChange: (page: string) => void
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 h-full w-20 bg-black/90 backdrop-blur-md border-r border-emerald-400/20 z-40 hidden lg:flex flex-col items-center py-8">
        <div className="mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-purple-400 rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-lg">SAR</span>
          </div>
        </div>
        
        <div className="flex flex-col space-y-4">
          {navItems.map((item) => {
            const IconComponent = item.icon
            return (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`group relative p-3 rounded-lg transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-emerald-500/20 to-purple-500/20 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <IconComponent className="w-6 h-6" />
                
                {/* Tooltip */}
                <div className="absolute left-full ml-4 px-3 py-2 bg-black/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {item.label}
                </div>
                
                {/* Active indicator */}
                {currentPage === item.id && (
                  <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-emerald-400 to-purple-400 rounded-full" />
                )}
              </button>
            )
          })}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md border-b border-emerald-400/20 z-40 lg:hidden">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-purple-400 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold">SAR</span>
            </div>
            <span className="text-white font-bold text-xl">Syed Ali Abbas Rahil</span>
          </div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-emerald-400/20">
            <div className="grid grid-cols-2 gap-2 p-4">
              {navItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onPageChange(item.id)
                      setIsOpen(false)
                    }}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                      currentPage === item.id
                        ? 'bg-gradient-to-r from-emerald-500/20 to-purple-500/20 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="text-sm">{item.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
