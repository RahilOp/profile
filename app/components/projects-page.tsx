'use client'

import { useState } from 'react'
import { SystemPanel } from './system-panel'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Lock } from 'lucide-react'
import Image from "next/image"

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
      image: "/chatbot.png",
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
      image: "/rag.jpg",
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
      image: "/dataaugmentation.png",
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
      image: "/kms.png",
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
          <div className="system-tag text-xs mb-3">[ INVENTORY ]</div>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4 text-glow-blue animate-fadeInUp">
            Featured Projects
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto font-hud animate-fadeInUp animation-delay-200">
            Battle-tested builds across AI agents, RAG research, and enterprise systems.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`font-hud tracking-wide uppercase text-xs transition-all duration-300 border ${
                selectedCategory === category.id
                  ? 'bg-primary/20 border-primary/60 text-primary shadow-[0_0_16px_rgba(0,168,255,0.25)]'
                  : 'bg-transparent border-white/15 text-slate-400 hover:text-white hover:border-primary/40'
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
              className="overflow-hidden group hover:-translate-y-1 transition-all duration-500 animate-fadeInUp p-0"
              corners
              variant={index % 2 === 0 ? 'blue' : 'violet'}
            >
              <div
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-44">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18202f] via-[#18202f]/40 to-transparent" />
                  {/* Rank badge */}
                  <div className="absolute top-3 right-3 w-9 h-9 border border-primary/60 bg-[#18202f]/80 flex items-center justify-center system-corners">
                    <span className="font-display font-black text-primary text-glow-blue">{project.rank}</span>
                  </div>
                  <div className="absolute bottom-3 left-4 text-[10px] font-hud tracking-widest text-primary/80">
                    {project.date}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="font-hud text-white text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-5 leading-relaxed font-hud text-sm min-h-[60px]">
                    {hoveredProject === project.id ? project.longDescription : project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className="bg-white/[0.04] text-slate-300 border border-white/10 font-hud text-xs hover:border-primary/40 transition-all"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="bg-primary/15 border border-primary/50 text-primary hover:bg-primary/25 hover:text-white font-hud tracking-wide uppercase text-xs">
                        <Github className="h-4 w-4 mr-2" /> View Code
                      </Button>
                    </a>
                  ) : (
                    <Button size="sm" disabled className="bg-white/[0.03] border border-white/10 text-slate-500 font-hud tracking-wide uppercase text-xs cursor-default">
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
