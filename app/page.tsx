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

const SECTIONS = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact']

export default function Portfolio() {
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const timer = setTimeout(() => setIsInitialLoad(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  // Scroll-spy: highlight the nav item for the section currently in view.
  useEffect(() => {
    if (isInitialLoad) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [isInitialLoad])

  const handleNavigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  if (isInitialLoad) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-[#18202f] relative">
      <AnimatedBackground />
      <Navigation currentPage={activeSection} onPageChange={handleNavigate} />

      <main className="relative z-10 animate-fadeIn">
        <section id="home" className="relative scroll-mt-20"><HomePage /></section>
        <section id="about" className="scroll-mt-20"><AboutPage /></section>
        <section id="skills" className="scroll-mt-20"><SkillsPage /></section>
        <section id="experience" className="scroll-mt-20"><ExperiencePage /></section>
        <section id="projects" className="scroll-mt-20"><ProjectsPage /></section>
        <section id="education" className="scroll-mt-20"><EducationPage /></section>
        <section id="contact" className="scroll-mt-20"><ContactPage /></section>
      </main>
    </div>
  )
}
