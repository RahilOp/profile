'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Download, Mail, Github, Linkedin, ChevronDown } from 'lucide-react'
import Image from "next/image"

export function HomePage() {
  const [displayText, setDisplayText] = useState('')
  const fullText = "AI Engineer & LLM Specialist"
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="lg:ml-20 min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image - Sample photo that can be replaced */}
        <div className="mb-8 relative">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-purple-400 to-yellow-400 rounded-full animate-spin-slow p-1">
              <div className="bg-black rounded-full p-2">
                <Image
                  src="/profile/myimg.jpeg"
                  alt="Syed Ali Abbas Rahil - AI Engineer"
                  width={200}
                  height={200}
                  className="rounded-full object-cover"
                  onError={(e) => {
                    e.target.src = "/placeholder.svg?height=200&width=200&text=Syed+Ali+Abbas+Rahil"
                  }}
                />
              </div>
            </div>
            
            {/* Floating particles around image */}
            <div className="absolute inset-0">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-emerald-400 rounded-full animate-float"
                  style={{
                    top: `${20 + Math.sin(i * 45 * Math.PI / 180) * 80}px`,
                    left: `${20 + Math.cos(i * 45 * Math.PI / 180) * 80}px`,
                    animationDelay: `${i * 0.2}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Name with Glitch Effect */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-purple-400 to-yellow-400 animate-gradient-x">
            Syed Ali Abbas Rahil
          </span>
          <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-purple-400 to-yellow-400 animate-glitch">
            Syed Ali Abbas Rahil
          </span>
        </h1>

        {/* Typewriter Effect */}
        <div className="text-2xl md:text-3xl text-white mb-8 h-12 flex items-center justify-center">
          <span className="font-mono">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        {/* Description */}
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fadeInUp">
          Specializing in Large Language Models, Agentic Architectures, and RAG pipelines. 
          Currently spearheading LLM development and fine-tuning at Otsuka Shokai, Tokyo.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          {/* Resume Download Button */}
            <a
              href="https://drive.google.com/file/d/1nuvgBUczqk_mhVAWFC2CThfvVNzhTRcs/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg shadow-emerald-500/25"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </a>

            {/* Contact Button */}
            <a href="mailto:rahilrizvi0786110@gmail.com">
              {" "}
              {/* Replace with your actual email */}
              <Button
                size="lg"
                variant="outline"
                className="border-purple-400 text-black hover:text-white hover:bg-purple-500/20 hover:border-purple-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-8 mb-12">
          {[
            { icon: Github, link: "https://github.com/RahilOp", color: 'hover:text-emerald-400' },
            { icon: Linkedin, link: "https://www.linkedin.com/in/syedrahil876", color: 'hover:text-purple-400' },
            { icon: Mail, link: "mailto:rahilrizvi0786110@gmail.com", color: 'hover:text-yellow-400' }
          ].map((social, index) => {
            const IconComponent = social.icon
            return (
              <a
                key={index}
                href={social.link}
                className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-125`}
              >
                <IconComponent className="h-8 w-8" />
              </a>
            )
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { number: '600+', label: 'DSA Problems Solved', color: 'from-emerald-400 to-emerald-600' },
            { number: '2+', label: 'Years Experience', color: 'from-purple-400 to-purple-600' },
            { number: '8.44', label: 'CPI at IIT Patna', color: 'from-yellow-400 to-yellow-600' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2 animate-countUp`}>
                {stat.number}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ChevronDown className="h-8 w-8 text-gray-400 mx-auto" />
        </div>
      </div>
    </div>
  )
}
