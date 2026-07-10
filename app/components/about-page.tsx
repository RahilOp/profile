'use client'

import { useState, useEffect } from 'react'
import { SystemPanel } from './system-panel'
import { Badge } from "@/components/ui/badge"
import { Award, Target, Languages, GraduationCap } from 'lucide-react'

export function AboutPage() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCards(prev => {
        if (prev.length < 4) {
          return [...prev, prev.length]
        }
        return prev
      })
    }, 300)

    return () => clearInterval(timer)
  }, [])

  const achievements = [
    { icon: Award, title: "JEE Advanced AIR 2796", note: "Top 0.3% nationwide" },
    { icon: Target, title: "Codeforces Specialist", note: "CodeChef 1992 rating" },
    { icon: Languages, title: "Japanese NAT N5", note: "Language proficiency" },
    { icon: GraduationCap, title: "IIT Patna — 8.44 CPI", note: "B.Tech CSE, 2024" },
  ]

  const interests = [
    "Large Language Models", "Agentic Architectures", "RAG Pipelines",
    "LLM Fine-tuning (SFT/RLHF)", "Mixture of Experts", "Knowledge Graphs",
    "Competitive Programming", "MLOps & Inference"
  ]

  return (
    <div className="lg:ml-20 min-h-screen px-6 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="system-tag text-xs mb-3">[ PLAYER PROFILE ]</div>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4 text-glow-blue animate-fadeInUp">
            About Me
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto font-hud animate-fadeInUp animation-delay-200">
            Pushing the boundaries of applied AI — from research to production-grade LLM systems.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Story */}
          <SystemPanel tag="Origin Story" className="p-8 animate-slideInLeft">
            <div className="space-y-4 text-slate-300 leading-relaxed font-hud">
              <p>
                My journey in AI began during my B.Tech in Computer Science at{' '}
                <span className="text-primary">IIT Patna</span> (CPI 8.44). That path led me to Tokyo,
                where I now work as an <span className="text-primary">AI Engineer at Otsuka Corporation</span>,
                engineering agentic RAG chatbots and fine-tuning LLMs for enterprise scale.
              </p>
              <p>
                I specialize in advanced LLM techniques — <span className="text-secondary">SFT, RLHF, LoRA/QLoRA</span> —
                on multi-node on-premise GPU clusters, and in designing agentic architectures integrated with
                RAG pipelines using LangChain, CrewAI, and Knowledge Graphs.
              </p>
              <p>
                Beyond production work, I'm a competitive programmer with <span className="text-primary">600+ DSA problems</span>{' '}
                solved across Codeforces (Specialist), CodeChef (1992), and LeetCode — and a published researcher.
              </p>
            </div>

            <div className="mt-6 border-l-2 border-secondary/60 pl-4">
              <p className="text-slate-300 italic font-hud">
                "The future of AI lies in agents that reason, collaborate, and adapt.
                My goal is to build systems that augment human capability."
              </p>
            </div>
          </SystemPanel>

          {/* Achievements */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((a, index) => {
                const IconComponent = a.icon
                return (
                  <div
                    key={index}
                    className={`system-panel system-corners rounded-sm p-5 transition-all duration-500 transform ${
                      visibleCards.includes(index) ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                    }`}
                  >
                    <div className="w-10 h-10 mb-3 border border-primary/50 bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-white font-hud font-semibold text-sm mb-1">{a.title}</h3>
                    <p className="text-slate-400 text-xs font-hud">{a.note}</p>
                  </div>
                )
              })}
            </div>

            {/* Publication highlight */}
            <SystemPanel variant="violet" tag="Research Log" className="p-6 animate-slideInRight">
              <h3 className="text-white font-hud font-semibold mb-1">Published Research</h3>
              <p className="text-secondary font-hud text-sm mb-2">
                DisT5: A Text-to-Text Transformer Model for Disaster Events
              </p>
              <p className="text-slate-400 text-sm font-hud">
                Online Social Networks and Media (Elsevier), 2026.
              </p>
            </SystemPanel>
          </div>
        </div>

        {/* Interests */}
        <div className="text-center">
          <div className="system-tag text-xs mb-6">[ SKILL AFFINITIES ]</div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {interests.map((interest, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-primary/10 text-primary border border-primary/30 px-4 py-2 text-sm font-hud tracking-wide hover:bg-primary/20 hover:scale-105 transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {interest}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
