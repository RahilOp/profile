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
      <nav className="fixed top-0 left-0 h-full w-20 bg-[#18202f]/90 backdrop-blur-md border-r border-primary/25 z-40 hidden lg:flex flex-col items-center py-8">
        <div className="mb-10">
          <div className="w-12 h-12 border border-primary/50 bg-primary/5 flex items-center justify-center relative system-corners">
            <span className="font-display text-primary font-bold text-base text-glow-blue">SR</span>
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          {navItems.map((item) => {
            const IconComponent = item.icon
            return (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`group relative p-3 transition-all duration-300 border ${
                  currentPage === item.id
                    ? 'bg-primary/15 border-primary/50 text-primary text-glow-blue'
                    : 'border-transparent text-slate-400 hover:text-white hover:bg-white/5 hover:border-primary/20'
                }`}
              >
                <IconComponent className="w-6 h-6" />

                {/* Tooltip */}
                <div className="absolute left-full ml-4 px-3 py-2 bg-[#18202f]/95 border border-primary/30 text-white text-sm font-hud tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                  {item.label}
                </div>

                {/* Active indicator */}
                {currentPage === item.id && (
                  <div className="absolute -right-[1px] top-1/2 transform -translate-y-1/2 w-0.5 h-8 bg-gradient-to-b from-primary to-secondary" style={{ boxShadow: '0 0 8px rgba(59,167,224,0.45)' }} />
                )}
              </button>
            )
          })}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#18202f]/90 backdrop-blur-md border-b border-primary/25 z-40 lg:hidden">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 border border-primary/50 bg-primary/5 flex items-center justify-center">
              <span className="font-display text-primary font-bold text-sm text-glow-blue">SR</span>
            </div>
            <span className="text-white font-hud font-semibold text-lg tracking-wide">Syed Ali Abbas Rahil</span>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#18202f]/95 backdrop-blur-md border-b border-primary/25">
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
                    className={`flex items-center space-x-3 p-3 transition-all duration-300 border ${
                      currentPage === item.id
                        ? 'bg-primary/15 border-primary/50 text-primary'
                        : 'border-transparent text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="text-sm font-hud tracking-wide">{item.label}</span>
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
