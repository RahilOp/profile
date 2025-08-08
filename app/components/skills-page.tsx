'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Brain, Database, Cloud, Zap, Shield, Layers, Terminal, GitBranch, Server, Cpu, Globe, Lock } from 'lucide-react'

export function SkillsPage() {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([])

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-emerald-400 to-emerald-600",
      skills: [
        { name: "Python", icon: Terminal },
        { name: "JavaScript", icon: Globe },
        { name: "C/C++", icon: Cpu },
        { name: "SQL", icon: Database },
        { name: "React/NextJS", icon: Globe },
        { name: "TypeScript", icon: Code }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "from-purple-400 to-purple-600",
      skills: [
        { name: "LLM Fine-tuning (SFT/LoRA/QLoRA)", icon: Brain },
        { name: "Langchain", icon: Zap },
        { name: "LLamaIndex", icon: Layers },
        { name: "CrewAI", icon: Brain },
        { name: "PyTorch", icon: Zap },
        { name: "TensorFlow", icon: Cpu }
      ]
    },
    {
      title: "Data & Infrastructure",
      icon: Database,
      color: "from-yellow-400 to-yellow-600",
      skills: [
        { name: "PostgreSQL", icon: Database },
        { name: "ElasticSearch", icon: Database },
        { name: "Redis", icon: Server },
        { name: "Neo4J", icon: GitBranch },
        { name: "Knowledge Graphs", icon: GitBranch },
        { name: "vLLM", icon: Server }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: Cloud,
      color: "from-pink-400 to-pink-600",
      skills: [
        { name: "Docker", icon: Server },
        { name: "GitLab CI/CD", icon: GitBranch },
        { name: "FastAPI", icon: Zap },
        { name: "Celery", icon: Server },
        { name: "GitHub Actions", icon: GitBranch },
        { name: "NVIDIA GPU Clusters", icon: Cpu }
      ]
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleSkills(prev => {
        const allSkillsCount = skillCategories.reduce((acc, category) => acc + category.skills.length, 0)
        if (prev.length < allSkillsCount) {
          return [...prev, prev.length]
        }
        return prev
      })
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="lg:ml-20 min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-400 mb-6 animate-fadeInUp">
            Technical Skills
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            A comprehensive overview of my technical expertise across various domains of AI and software engineering.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon
            return (
              <Card 
                key={categoryIndex}
                className="bg-black/60 border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500 transform hover:scale-105"
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <CardContent className="p-8">
                  {/* Category Header */}
                  <div className="flex items-center mb-8">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                      <CategoryIcon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 gap-4">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon
                      const globalIndex = skillCategories.slice(0, categoryIndex).reduce((acc, cat) => acc + cat.skills.length, 0) + skillIndex
                      
                      return (
                        <div 
                          key={skillIndex}
                          className={`group flex items-center space-x-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 ${
                            visibleSkills.includes(globalIndex) ? 'animate-fadeInUp opacity-100' : 'opacity-0'
                          }`}
                          style={{ animationDelay: `${globalIndex * 50}ms` }}
                        >
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} flex-shrink-0`}>
                            <SkillIcon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-white font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-purple-400 transition-all duration-300">
                            {skill.name}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Core Competencies</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {skillCategories.flatMap(category => 
              category.skills.map((skill, index) => (
                <Badge 
                  key={`${category.title}-${index}`}
                  variant="secondary" 
                  className="bg-gradient-to-r from-emerald-500/20 to-purple-500/20 text-white border-emerald-400/30 px-4 py-2 text-sm hover:scale-105 transition-transform duration-300 animate-fadeInUp"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {skill.name}
                </Badge>
              ))
            )}
          </div>
        </div>

        {/* Interactive Skill Visualization */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Technology Stack Overview</h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Tech Stack Visualization */}
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 border border-emerald-400/30 rounded-full" />
              <div className="absolute inset-4 border border-purple-400/30 rounded-full" />
              <div className="absolute inset-8 border border-yellow-400/30 rounded-full" />
              <div className="absolute inset-12 border border-pink-400/30 rounded-full" />
              
              {/* Category points */}
              {skillCategories.map((category, index) => {
                const angle = (index * 90) * Math.PI / 180
                const radius = 120
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius
                const CategoryIcon = category.icon
                
                return (
                  <div
                    key={index}
                    className="absolute w-12 h-12 bg-gradient-to-r from-emerald-400 to-purple-400 rounded-full flex items-center justify-center animate-pulse"
                    style={{
                      left: `calc(50% + ${x}px - 24px)`,
                      top: `calc(50% + ${y}px - 24px)`,
                      animationDelay: `${index * 200}ms`
                    }}
                  >
                    <CategoryIcon className="w-6 h-6 text-white" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
