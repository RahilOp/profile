'use client'

import { useState, useEffect } from 'react'
import { SystemPanel } from './system-panel'
import { Code, Brain, Database, Cloud, Zap, Layers, Terminal, GitBranch, Server, Cpu, Globe, Network } from 'lucide-react'

export function SkillsPage() {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([])

  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      tag: "Core Abilities",
      skills: [
        { name: "Python", icon: Terminal },
        { name: "C / C++", icon: Cpu },
        { name: "React / Next.js", icon: Globe },
        { name: "SQL", icon: Database },
        { name: "Data Structures & Algorithms", icon: GitBranch },
        { name: "Probability & Statistics", icon: Network }
      ]
    },
    {
      title: "ML / AI",
      icon: Brain,
      tag: "Ultimate Skills",
      skills: [
        { name: "PyTorch", icon: Zap },
        { name: "TensorFlow", icon: Cpu },
        { name: "LangChain", icon: Layers },
        { name: "CrewAI", icon: Brain },
        { name: "Axolotl · DeepEval", icon: Brain },
        { name: "MCP · Mixture of Experts", icon: Network }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      tag: "Data Vaults",
      skills: [
        { name: "Elasticsearch", icon: Database },
        { name: "PostgreSQL", icon: Database },
        { name: "MySQL", icon: Database },
        { name: "MongoDB", icon: Server },
        { name: "Neo4j (Knowledge Graphs)", icon: GitBranch },
        { name: "Redis", icon: Server }
      ]
    },
    {
      title: "MLOps",
      icon: Cloud,
      tag: "Support Skills",
      skills: [
        { name: "Docker · Kubernetes", icon: Server },
        { name: "vLLM", icon: Server },
        { name: "MLflow · LangFuse", icon: GitBranch },
        { name: "AWS / Azure", icon: Cloud },
        { name: "FastAPI · Celery", icon: Zap },
        { name: "GitLab / GitHub CI/CD", icon: GitBranch }
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
    }, 80)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="lg:ml-20 min-h-screen px-6 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="system-tag text-xs mb-3">[ SKILL TREE ]</div>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4 text-glow-blue animate-fadeInUp">
            Technical Skills
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto font-hud animate-fadeInUp animation-delay-200">
            The arsenal — spanning AI research, full-stack engineering, and production MLOps.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon
            return (
              <SystemPanel
                key={categoryIndex}
                tag={category.tag}
                variant={categoryIndex % 2 === 0 ? 'blue' : 'violet'}
                className="p-6 md:p-8 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 mr-4 border ${categoryIndex % 2 === 0 ? 'border-primary/50 bg-primary/10' : 'border-secondary/50 bg-secondary/10'}`}>
                    <CategoryIcon className={`w-7 h-7 ${categoryIndex % 2 === 0 ? 'text-primary' : 'text-secondary'}`} />
                  </div>
                  <h2 className="font-display text-xl font-bold text-white">{category.title}</h2>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon
                    const globalIndex = skillCategories.slice(0, categoryIndex).reduce((acc, cat) => acc + cat.skills.length, 0) + skillIndex

                    return (
                      <div
                        key={skillIndex}
                        className={`group flex items-center space-x-3 p-3 border border-white/10 bg-white/[0.02] hover:border-primary/40 transition-all duration-300 ${
                          visibleSkills.includes(globalIndex) ? 'animate-fadeInUp opacity-100' : 'opacity-0'
                        }`}
                        style={{ animationDelay: `${globalIndex * 40}ms` }}
                      >
                        <SkillIcon className="w-4 h-4 text-primary/70 flex-shrink-0" />
                        <span className="text-slate-200 font-hud group-hover:text-primary transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </SystemPanel>
            )
          })}
        </div>
      </div>
    </div>
  )
}
