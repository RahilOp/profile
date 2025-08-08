'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Play, Star, GitFork } from 'lucide-react'
import Image from "next/image"

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'research', label: 'Research' }
  ]

  const projects = [
  {
    id: 1,
    title: "Data Augmentation Pipeline for LLM SFT Training",
    category: "ai",
    description: "Designed a modular pipeline to generate SFT datasets using multi-agent architecture and Pydantic models.",
    longDescription: "A comprehensive data augmentation system that generates high-quality SFT datasets including single-turn QA, multi-turn QA, and ORPO formats. The pipeline uses multi-agent architecture with Elasticsearch-based chunk retrieval and retry logic to ensure contextual relevance and data quality for downstream LLM fine-tuning.",
    image: "/profile/dataaugmentation.png",
    technologies: ["Python", "Multi-agent Systems", "Pydantic", "ElasticSearch", "LLM Fine-tuning"],
    github: "#",
    demo: "#",
    status: "Active",
    color: "from-emerald-400 to-emerald-600"
  },
  {
    id: 2,
    title: "Multi-Agent Chatbot Framework",
    category: "ai",
    description: "Built a multi-agent system with tool/function calling, agent routing, and persistent user memory for dynamic conversation management.",
    longDescription: "An advanced conversational AI system featuring multiple specialized agents with tool calling capabilities, intelligent routing, and both short-term and long-term memory management. The system integrates Langchain agents with various tools including Bing web search, internal APIs, and retrieval systems, all exposed through a user-friendly frontend interface.",
    image: "/profile/chatbot.png",
    technologies: ["Langchain", "Multi-agent Systems", "Tool Calling", "Memory Management", "Bing API"],
    github: "#",
    demo: "#",
    status: "Active",
    color: "from-purple-400 to-purple-600"
  },
  {
    id: 3,
    title: "RAG Evaluation Framework",
    category: "research",
    description: "Developed an end-to-end RAG pipeline to benchmark preprocessors, chunking methods, embeddings, and retrieval strategies.",
    longDescription: "A comprehensive evaluation framework for RAG systems that benchmarks various components including preprocessors (Tika, Marker), chunking methods, embeddings (BGE-M3, Sarashina), and retrieval strategies using MRR and RAGAS metrics. The system evaluates generation capabilities of different LLMs (LLaMA, GPT, Qwen) to identify optimal RAG configurations for document-based QA tasks.",
    image: "/profile/rag.jpg",
    technologies: ["RAG", "BGE-M3", "Sarashina", "LLaMA", "GPT", "Qwen", "RAGAS", "MRR"],
    github: "#",
    demo: "#",
    status: "Active",
    color: "from-yellow-400 to-yellow-600"
  },
  {
    id: 4,
    title: "Teams Knowledge Management System",
    category: "Development",
    description: "Built a platform using MS Graph API, PostgreSQL, and Celery to sync Teams messages, auto-tag Q&A, compute leaderboards, and expose admin dashboard.",
    longDescription: "Built a platform using MS Graph API, PostgreSQL, and Celery to sync Teams messages, auto-tag Q&A, compute leaderboards, and expose admin dashboard.",
    image: "/profile/kms.png",
    technologies: ["FastAPI",
        "PostgreSQL",
        "Celery",
        "Redis",
        "React",
        "MS Graph API",
        "Docker"],
    github: "#",
    demo: "#",
    status: "Active",
    color: "from-pink-400 to-pink-600"
  }
]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="lg:ml-20 min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-purple-400 to-yellow-400 mb-6 animate-fadeInUp">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            A showcase of my latest work in artificial intelligence, machine learning, and software engineering.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-emerald-500 to-purple-500 text-white'
                  : 'border-white/20 text-white hover:bg-white/10'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="bg-black/70 border-white/10 overflow-hidden group hover:border-white/30 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute inset-0 flex items-center justify-center space-x-4">
                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white transform hover:scale-110 transition-all duration-300">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white transform hover:scale-110 transition-all duration-300">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                    <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700 text-white transform hover:scale-110 transition-all duration-300">
                      <Play className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant="secondary" 
                    className={`bg-gradient-to-r ${project.color} text-white animate-pulse`}
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-white text-xl mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-purple-400 transition-all duration-300">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {hoveredProject === project.id ? project.longDescription : project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary" 
                      className="bg-white/10 text-gray-300 border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                      style={{ animationDelay: `${techIndex * 50}ms` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-emerald-400/50 text-white hover:bg-emerald-400/20 hover:border-emerald-400 transform hover:scale-105 transition-all duration-300"
          >
            Load More Projects
          </Button>
        </div>
      </div>
    </div>
  )
}
