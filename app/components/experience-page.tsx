'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, ChevronRight } from 'lucide-react'

export function ExperiencePage() {
  const [selectedExperience, setSelectedExperience] = useState(0)

  const experiences = [
  {
    title: "AI Engineer",
    company: "Otsuka Shokai",
    period: "October 2024 – Present",
    location: "Tokyo, Japan",
    type: "Full-time (Onsite)",
    description: "Spearheading development and fine-tuning of LLMs with advanced techniques and deploying high-throughput inference systems.",
    achievements: [
      "Leading LLM fine-tuning using SFT, LoRA, QLoRA, DPO, and ORPO techniques",
      "Conducting performance evaluation across custom benchmarks and MoE architectures",
      "Deploying vLLM-served LLMs on internal NVIDIA GPU clusters for high-throughput inference",
      "Designing Agentic architectures integrated with RAG pipelines through MCP"
    ],
    technologies: ["Python", "FastAPI", "ReactJS", "Redis", "Celery", "PostgreSQL", "ElasticSearch", "Langchain", "LLamaIndex", "CrewAI", "Docker", "GitLab CI/CD", "vLLM"],
    color: "from-emerald-400 to-emerald-600"
  },
  {
    title: "AI Research Intern",
    company: "Otsuka Shokai",
    period: "June 2023 – July 2023",
    location: "Tokyo, Japan",
    type: "Internship (Onsite)",
    description: "Conducted foundational research on Langchain and AI agents during their early adoption phase.",
    achievements: [
      "Researched Langchain and AI agents during early adoption phase",
      "Developed GPT-3-powered modular multi-agent conversational framework",
      "Created AmongUS-like simulation for human-like collaboration",
      "Contributed to foundational AI agent architecture design"
    ],
    technologies: ["Python", "GPT-3", "Langchain", "Multi-agent Systems", "Conversational AI"],
    color: "from-purple-400 to-purple-600"
  },
  {
    title: "BTech Student",
    company: "IIT Patna",
    period: "2020 – 2024",
    location: "Patna, India",
    type: "Education",
    description: "Completed BTech in Computer Science and Engineering with CPI 8.44, focusing on AI and competitive programming.",
    achievements: [
      "Graduated with CPI 8.44 in Computer Science and Engineering",
      "Secured AIR 2796 in JEE Advanced 2020 (top 0.3% nationwide)",
      "Solved 600+ DSA problems across competitive programming platforms",
      "Served as Coordinator for Creative Writing & Social Media at E-Cell"
    ],
    technologies: ["Data Structures", "Algorithms", "System Design", "DBMS", "Operating Systems", "Competitive Programming"],
    color: "from-yellow-400 to-yellow-600"
  }
]

  return (
    <div className="lg:ml-20 min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-emerald-400 mb-6 animate-fadeInUp">
            Experience
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            My professional journey in artificial intelligence and machine learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              {experiences.map((exp, index) => (
                <Card 
                  key={index}
                  className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                    selectedExperience === index 
                      ? 'bg-gradient-to-r from-emerald-500/20 to-purple-500/20 border-emerald-400/50' 
                      : 'bg-black/60 border-white/10 hover:border-white/20'
                  }`}
                  onClick={() => setSelectedExperience(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {exp.type}
                      </Badge>
                      <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                        selectedExperience === index ? 'rotate-90 text-emerald-400' : 'text-gray-400'
                      }`} />
                    </div>
                    
                    <h3 className="text-white font-semibold text-lg mb-1">{exp.title}</h3>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-400 font-medium mb-2">
                      {exp.company}
                    </p>
                    
                    <div className="flex items-center text-gray-400 text-sm mb-1">
                      <Calendar className="w-3 h-3 mr-2" />
                      {exp.period}
                    </div>
                    
                    <div className="flex items-center text-gray-400 text-sm">
                      <MapPin className="w-3 h-3 mr-2" />
                      {exp.location}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Detailed View */}
          <div className="lg:col-span-2">
            <Card className="bg-black/60 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-3xl text-white mb-2">
                      {experiences[selectedExperience].title}
                    </CardTitle>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-400 font-semibold text-xl">
                        <Building className="w-5 h-5 mr-2 text-emerald-400" />
                        {experiences[selectedExperience].company}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {experiences[selectedExperience].period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {experiences[selectedExperience].location}
                      </div>
                    </div>
                  </div>
                  
                  <Badge 
                    variant="secondary" 
                    className={`bg-gradient-to-r ${experiences[selectedExperience].color} text-white`}
                  >
                    {experiences[selectedExperience].type}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-8">
                {/* Description */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Role Overview</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {experiences[selectedExperience].description}
                  </p>
                </div>

                {/* Key Achievements */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Key Achievements</h3>
                  <div className="space-y-3">
                    {experiences[selectedExperience].achievements.map((achievement, index) => (
                      <div 
                        key={index}
                        className="flex items-start space-x-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-emerald-400/30 transition-all duration-300 animate-slideInLeft"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-300">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {experiences[selectedExperience].technologies.map((tech, index) => (
                      <Badge 
                        key={index}
                        variant="secondary" 
                        className="bg-gradient-to-r from-emerald-500/20 to-purple-500/20 text-white border-emerald-400/30 hover:scale-105 transition-transform duration-300 animate-fadeInUp"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
