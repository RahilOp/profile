'use client'

import { useState } from 'react'
import { SystemPanel } from './system-panel'
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, ChevronRight } from 'lucide-react'

export function ExperiencePage() {
  const [selectedExperience, setSelectedExperience] = useState(0)

  const experiences = [
    {
      title: "AI Engineer",
      company: "Otsuka Corporation",
      period: "October 2024 – Present",
      location: "Tokyo, Japan",
      type: "Full-time",
      description: "Engineering enterprise LLM systems end-to-end — from agentic RAG chatbots and knowledge management to on-premise fine-tuning at scale.",
      achievements: [
        "Engineered agentic RAG chatbots for 1,000+ monthly users using the ELK stack, LangChain, and Knowledge Graphs with long-term memory — improved retrieval accuracy by 31% and reduced search latency by 23%.",
        "Built an enterprise Knowledge Management System with a 2-stage LLM evaluation pipeline auto-generating QA pairs from 500+ internal documents; raised knowledge accessibility by 13% for 1,000+ sales reps.",
        "Deployed Bayesian leaderboards and multi-tenant RBAC across 3 data sources (Teams, SharePoint, CSV), securing role-based access for 5+ internal teams.",
        "Fine-tuned 3+ LLMs via SFT and RLHF on multi-node on-premise GPU clusters using LoRA/QLoRA — achieved 15% improvement on QA benchmarks.",
      ],
      technologies: ["Python", "LangChain", "ELK Stack", "Knowledge Graphs", "LoRA/QLoRA", "RLHF", "vLLM", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    },
    {
      title: "AI Research Intern",
      company: "Otsuka Corporation",
      period: "June 2023 – July 2023",
      location: "Tokyo, Japan",
      type: "Internship",
      description: "Foundational research on multi-agent LLM systems during the early adoption phase of agentic AI.",
      achievements: [
        "Developed multi-agent LLM simulations with LangChain in a 2-month research engagement — reduced task completion time by 15% in automated workflow pipelines.",
        "Prototyped 3 autonomous agents with adaptive memory and goal-planning; delivered end-to-end multi-turn collaborative reasoning across 3+ complex task scenarios.",
      ],
      technologies: ["Python", "LangChain", "Multi-agent Systems", "Adaptive Memory", "Conversational AI"],
    },
    {
      title: "B.Tech, Computer Science",
      company: "IIT Patna",
      period: "2020 – 2024",
      location: "Patna, India",
      type: "Education",
      description: "B.Tech in Computer Science and Engineering (CPI 8.44), focused on AI/ML and competitive programming.",
      achievements: [
        "Graduated with CPI 8.44 in Computer Science and Engineering.",
        "Secured AIR 2796 in JEE Advanced 2020 (top 0.3% of 150,000+ candidates).",
        "Solved 600+ DSA problems across Codeforces (Specialist), CodeChef (1992), and LeetCode.",
        "Coordinator — Creative Writing & Social Media, E-Cell, IIT Patna.",
      ],
      technologies: ["DSA", "System Design", "DBMS", "Operating Systems", "Machine Learning", "Competitive Programming"],
    }
  ]

  const active = experiences[selectedExperience]

  return (
    <div className="lg:ml-20 min-h-screen px-6 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="system-tag text-xs mb-3">[ QUEST LOG ]</div>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4 text-glow-blue animate-fadeInUp">
            Experience
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto font-hud animate-fadeInUp animation-delay-200">
            A professional journey through applied AI and machine learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Timeline sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-3">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedExperience(index)}
                  className={`w-full text-left system-panel rounded-sm p-5 transition-all duration-300 ${
                    selectedExperience === index
                      ? 'border-primary/60 shadow-[0_0_24px_rgba(0,168,255,0.2)]'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-[10px] font-hud bg-primary/10 text-primary border border-primary/30">
                      {exp.type}
                    </Badge>
                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                      selectedExperience === index ? 'rotate-90 text-primary' : 'text-slate-500'
                    }`} />
                  </div>
                  <h3 className="text-white font-hud font-semibold text-lg mb-1">{exp.title}</h3>
                  <p className="text-primary font-hud text-sm mb-2">{exp.company}</p>
                  <div className="flex items-center text-slate-400 text-xs font-hud mb-1">
                    <Calendar className="w-3 h-3 mr-2" />{exp.period}
                  </div>
                  <div className="flex items-center text-slate-400 text-xs font-hud">
                    <MapPin className="w-3 h-3 mr-2" />{exp.location}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Detailed view */}
          <div className="lg:col-span-2">
            <SystemPanel tag="Mission Report" className="p-8">
              <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                <div>
                  <h2 className="font-display text-2xl md:text-3xl text-white mb-2">{active.title}</h2>
                  <div className="flex items-center text-primary font-hud font-semibold text-lg mb-3">
                    <Building className="w-5 h-5 mr-2" />{active.company}
                  </div>
                  <div className="flex flex-wrap gap-4 text-slate-400 text-sm font-hud">
                    <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" />{active.period}</div>
                    <div className="flex items-center"><MapPin className="w-4 h-4 mr-2" />{active.location}</div>
                  </div>
                </div>
                <Badge className="bg-secondary/15 text-secondary border border-secondary/40 font-hud">{active.type}</Badge>
              </div>

              <div className="mb-6">
                <h3 className="system-tag text-xs mb-2">[ Overview ]</h3>
                <p className="text-slate-300 leading-relaxed font-hud">{active.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="system-tag text-xs mb-3">[ Key Achievements ]</h3>
                <div className="space-y-2">
                  {active.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 border border-white/10 bg-white/[0.02] hover:border-primary/30 transition-all duration-300 animate-slideInLeft"
                      style={{ animationDelay: `${index * 80}ms` }}
                    >
                      <div className="w-1.5 h-1.5 bg-primary mt-2 flex-shrink-0 rotate-45" />
                      <p className="text-slate-300 font-hud text-sm leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="system-tag text-xs mb-3">[ Tech Stack ]</h3>
                <div className="flex flex-wrap gap-2">
                  {active.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      className="bg-primary/10 text-primary border border-primary/30 font-hud hover:bg-primary/20 transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </SystemPanel>
          </div>
        </div>
      </div>
    </div>
  )
}
