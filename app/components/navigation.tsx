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
      {/* Desktop sidebar */}
      <nav className="fixed top-0 left-0 h-full w-20 bg-[#f7f4ed] border-r border-[#eceae4] z-40 hidden lg:flex flex-col items-center py-8">
        <div className="mb-10">
          <div className="w-11 h-11 rounded-full bg-[#1c1c1c] flex items-center justify-center btn-inset">
            <span className="text-[#fcfbf8] font-semibold text-sm">SR</span>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          {navItems.map((item) => {
            const IconComponent = item.icon
            const active = currentPage === item.id
            return (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                aria-label={item.label}
                className={`group relative p-3 rounded-full transition-all duration-200 ${
                  active
                    ? 'bg-[#1c1c1c] text-[#fcfbf8]'
                    : 'text-[#5f5f5d] hover:bg-[#1c1c1c]/[0.04] hover:text-[#1c1c1c]'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span className="absolute left-full ml-3 px-3 py-1.5 rounded-md bg-[#1c1c1c] text-[#fcfbf8] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                  {item.label}
                </span>
              </button>
            )
          })}
        </div>
      </nav>

      {/* Mobile top bar */}
      <nav className="fixed top-0 left-0 right-0 bg-[#f7f4ed]/95 backdrop-blur border-b border-[#eceae4] z-40 lg:hidden">
        <div className="flex items-center justify-between px-5 py-3">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-[#1c1c1c] flex items-center justify-center btn-inset">
              <span className="text-[#fcfbf8] font-semibold text-xs">SR</span>
            </div>
            <span className="text-[#1c1c1c] font-semibold text-lg tracking-[-0.4px]">Syed Ali Abbas Rahil</span>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="text-[#1c1c1c] p-2 rounded-md" aria-label="Menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-[#eceae4] bg-[#f7f4ed]">
            <div className="grid grid-cols-2 gap-2 p-4">
              {navItems.map((item) => {
                const IconComponent = item.icon
                const active = currentPage === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => { onPageChange(item.id); setIsOpen(false) }}
                    className={`flex items-center space-x-3 p-3 rounded-md transition-all duration-200 ${
                      active ? 'bg-[#1c1c1c] text-[#fcfbf8]' : 'text-[#5f5f5d] hover:bg-[#1c1c1c]/[0.04]'
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
