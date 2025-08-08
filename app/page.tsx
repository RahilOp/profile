'use client'

import { useState, useEffect } from 'react'
import { AnimatedBackground } from './components/animated-background'
import { LoadingScreen } from './components/loading-screen'
import { Navigation } from './components/navigation'
import { HomePage } from './components/home-page'
import { AboutPage } from './components/about-page'
import { SkillsPage } from './components/skills-page'
import { ExperiencePage } from './components/experience-page'
import { ProjectsPage } from './components/projects-page'
import { EducationPage } from './components/education-page'
import { ContactPage } from './components/contact-page'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink, Download, MapPin, Calendar, GraduationCap, Briefcase, Code, Brain, Database, Cpu } from 'lucide-react'
import Image from "next/image"

const ProjectImage = ({ src, alt, ...props }) => {
  return (
    <Image
      src={src || "/placeholder.svg?height=200&width=300&text=Project+Image"}
      alt={alt}
      onError={(e) => {
        e.target.src = "/placeholder.svg?height=200&width=300&text=Project+Image"
      }}
      {...props}
    />
  )
}

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isLoading, setIsLoading] = useState(false)
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const handlePageChange = (page: string) => {
    if (page === currentPage) return
    
    setIsLoading(true)
    setTimeout(() => {
      setCurrentPage(page)
      setIsLoading(false)
    }, 1500)
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />
      case 'about': return <AboutPage />
      case 'skills': return <SkillsPage />
      case 'experience': return <ExperiencePage />
      case 'projects': return <ProjectsPage />
      case 'education': return <EducationPage />
      case 'contact': return <ContactPage />
      default: return <HomePage />
    }
  }

  if (isInitialLoad) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      <AnimatedBackground />
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      
      <div className="relative z-10">
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <div className="animate-fadeIn">
            {renderCurrentPage()}
          </div>
        )}
      </div>
    </div>
  )
}
