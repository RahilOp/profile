'use client'

import { useState } from 'react'
import { SystemPanel } from './system-panel'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Lock, Bot, FlaskConical, Database, Users } from 'lucide-react'

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'ai', label: 'AI / Agents' },
    { id: 'research', label: 'Research' },
    { id: 'work', label: 'Enterprise' },
  ]

  const projects = [
    {
      id: 1,
      title: "Agent Forge: Multi-Tool AI Agent Platform",
      category: "ai",
      rank: "S",
      date: "March 2025",
      description: "Full-stack multi-agent chat platform (FastAPI + React/TypeScript) with configurable personas and integrated tools.",
      longDescription: "A full-stack multi-agent chat platform with 2 configurable agent personas and 4 integrated tools: real-time web search, Wikipedia lookup, and persistent chat history via LangChain tool-calling. It features LLM-powered long-term memory that auto-extracts user preferences using Pydantic structured outputs, with sessions and profiles persisted in SQLite.",
      icon: Bot,
      technologies: ["FastAPI", "React", "TypeScript", "LangChain", "Pydantic", "SQLite"],
      github: "https://github.com/RahilOp/agent-forge",
    },
    {
      id: 2,
      title: "RAG Benchmark Toolkit",
      category: "research",
      rank: "S",
      date: "December 2024",
      description: "Benchmarked 100+ RAG pipeline configurations across processors, chunking strategies, and search methods.",
      longDescription: "An end-to-end RAG evaluation toolkit benchmarking 100+ pipeline configurations across 4 document processors, 9 chunking strategies, and 4 search methods (BM25, KNN, Hybrid) on Elasticsearch 8.x with cross-encoder reranking. It automates evaluation via MRR, RAGAS Context Precision, ROUGE, and semantic similarity across LLaMA, GPT, and Qwen, all driven by a single YAML config.",
      icon: FlaskConical,
      technologies: ["Elasticsearch", "RAGAS", "BM25/KNN/Hybrid", "Cross-Encoder", "LLaMA · GPT · Qwen"],
      github: "https://github.com/RahilOp/rag-eval",
    },
    {
      id: 3,
      title: "Dataset Augmenter: SFT Pipeline",
      category: "ai",
      rank: "A",
      date: "2024",
      description: "Modular pipeline generating SFT datasets using multi-agent architecture and Pydantic models.",
      longDescription: "A modular data-augmentation pipeline that generates high-quality SFT datasets in single-turn QA, multi-turn QA, and ORPO formats. It uses a multi-agent architecture with Elasticsearch-based chunk retrieval and retry logic to ensure contextual relevance and data quality for downstream LLM fine-tuning.",
      icon: Database,
      technologies: ["Python", "Multi-agent", "Pydantic", "Elasticsearch", "ORPO"],
      github: "https://github.com/RahilOp/Dataset-Augmenter",
    },
    {
      id: 4,
      title: "Teams Knowledge Management System",
      category: "work",
      rank: "A",
      date: "Otsuka Corporation",
      description: "Enterprise platform syncing Teams messages, auto-tagging Q&A, and computing leaderboards.",
      longDescription: "An enterprise platform built with MS Graph API, PostgreSQL, and Celery to sync Microsoft Teams messages, auto-tag Q&A pairs, compute Bayesian leaderboards, and expose an admin dashboard, deployed with multi-tenant RBAC across internal teams.",
      icon: Users,
      technologies: ["FastAPI", "PostgreSQL", "Celery", "Redis", "React", "MS Graph API", "Docker"],
      github: null,
    }
  ]

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="lg:ml-20 min-h-screen px-6 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="system-tag text-sm mb-3">Projects</div>
          <h1 className="text-4xl md:text-5xl font-semibold text-[#1c1c1c] tracking-[-1.2px] mb-4 animate-fadeInUp">
            Featured Projects
          </h1>
          <p className="text-lg text-[#5f5f5d] max-w-2xl mx-auto animate-fadeInUp animation-delay-200">
            Battle-tested builds across AI agents, RAG research, and enterprise systems.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`text-sm transition-colors ${
                selectedCategory === category.id
                  ? 'bg-[#1c1c1c] text-[#fcfbf8] rounded-md btn-inset'
                  : 'bg-transparent border border-[rgba(28,28,28,0.4)] text-[#1c1c1c] hover:bg-[#1c1c1c]/[0.04] rounded-md'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <SystemPanel
              key={project.id}
              className="overflow-hidden group hover:border-[rgba(28,28,28,0.4)] hover:-translate-y-0.5 transition-all duration-300 animate-fadeInUp p-0"
            >
              <div
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Header */}
                <div className="relative flex items-center justify-between h-24 px-6 border-b border-[#eceae4] bg-[#1c1c1c]/[0.02]">
                  <project.icon className="w-8 h-8 text-[#1c1c1c]/80 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                  <span className="text-[#5f5f5d] text-sm">{project.date}</span>
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="text-[#1c1c1c] text-lg font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-[#5f5f5d] mb-5 leading-relaxed text-sm min-h-[60px]">
                    {hoveredProject === project.id ? project.longDescription : project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className="rounded-full border border-[#eceae4] bg-[#1c1c1c]/[0.04] text-[#5f5f5d] px-3 py-1 text-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="bg-[#1c1c1c] text-[#fcfbf8] hover:bg-[#1c1c1c]/90 rounded-md btn-inset">
                        <Github className="h-4 w-4 mr-2" /> View Code
                      </Button>
                    </a>
                  ) : (
                    <Button size="sm" disabled className="bg-transparent border border-[#eceae4] text-[#5f5f5d] rounded-md cursor-default">
                      <Lock className="h-4 w-4 mr-2" /> Internal / Proprietary
                    </Button>
                  )}
                </div>
              </div>
            </SystemPanel>
          ))}
        </div>
      </div>
    </div>
  )
}
