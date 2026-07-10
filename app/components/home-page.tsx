'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { SystemPanel } from './system-panel'
import { Download, Mail, Github, Linkedin, ChevronDown } from 'lucide-react'
import Image from "next/image"
import { basePath } from "@/lib/base-path"

export function HomePage() {
  const [displayText, setDisplayText] = useState('')
  const fullText = "AI Engineer · LLM & Agentic Systems Specialist"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 60)

    return () => clearInterval(timer)
  }, [])

  // "Stats" framing (Solo Leveling status window)
  const stats = [
    { label: 'INT', value: 92, note: 'LLM & Fine-tuning' },
    { label: 'AGI', value: 88, note: 'Agentic Systems' },
    { label: 'VIT', value: 85, note: 'RAG & Retrieval' },
    { label: 'PER', value: 90, note: 'Problem Solving' },
  ]

  return (
    <div className="lg:ml-20 min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        {/* ---- Left: identity ---- */}
        <div className="text-center lg:text-left">
          <div className="system-tag text-xs mb-4 animate-fadeIn">[ PLAYER DETECTED ]</div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#7dd3fc] via-primary to-secondary text-glow-blue">
              Syed Ali Abbas
            </span>
            <span className="block text-white/95 text-glow-blue">Rahil</span>
          </h1>

          {/* Typewriter */}
          <div className="text-lg md:text-2xl text-primary/90 mb-6 h-8 flex items-center justify-center lg:justify-start">
            <span className="font-hud tracking-wide">
              {displayText}
              <span className="text-secondary">▌</span>
            </span>
          </div>

          <p className="text-base md:text-lg text-slate-300/90 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-hud">
            Building Large Language Models, agentic architectures, and RAG pipelines.
            Currently engineering enterprise AI at{' '}
            <span className="text-primary">Otsuka Corporation, Tokyo</span>, fine-tuning models,
            deploying vLLM inference, and shipping RAG chatbots for 1,000+ users.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <a href={`${basePath}/Syed_Ali_Abbas_Rahil_Resume.pdf`} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary/15 border border-primary/60 text-primary hover:bg-primary/25 hover:text-white font-hud tracking-wider uppercase text-sm shadow-[0_0_20px_rgba(0,168,255,0.25)] transition-all"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </a>

            <a href="mailto:rahilrizvi0786110@gmail.com">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-secondary/60 text-secondary bg-secondary/5 hover:bg-secondary/20 hover:text-white font-hud tracking-wider uppercase text-sm transition-all"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </a>
          </div>

          {/* Socials */}
          <div className="flex justify-center lg:justify-start space-x-6">
            {[
              { icon: Github, link: "https://github.com/RahilOp" },
              { icon: Linkedin, link: "https://www.linkedin.com/in/syedrahil876" },
              { icon: Mail, link: "mailto:rahilrizvi0786110@gmail.com" },
            ].map((social, index) => {
              const IconComponent = social.icon
              return (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary hover:text-glow-blue transition-all duration-300 transform hover:scale-125"
                >
                  <IconComponent className="h-7 w-7" />
                </a>
              )
            })}
          </div>
        </div>

        {/* ---- Right: System status window ---- */}
        <SystemPanel tag="Status Window" className="p-6 md:p-8">
          {/* Avatar + identity row */}
          <div className="flex items-center gap-5 mb-6">
            <div className="relative shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary to-secondary opacity-60 blur-sm" />
              <div className="relative border border-primary/60 p-0.5 bg-[#18202f]">
                <Image
                  src="/myimg.jpeg"
                  alt="Syed Ali Abbas Rahil"
                  width={92}
                  height={92}
                  className="object-cover w-[92px] h-[92px] grayscale-[0.15]"
                />
              </div>
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-display tracking-widest text-slate-400">CLASS</div>
              <div className="font-display text-primary text-lg font-bold text-glow-blue leading-tight">AI ENGINEER</div>
              <div className="text-[10px] font-display tracking-widest text-slate-400 mt-2">TITLE</div>
              <div className="font-hud text-secondary text-sm">Shadow of the System</div>
            </div>
          </div>

          {/* Level bar */}
          <div className="mb-6">
            <div className="flex justify-between items-baseline mb-1.5">
              <span className="font-display text-xs tracking-widest text-slate-400">LEVEL</span>
              <span className="font-display text-2xl font-black text-white text-glow-blue">S</span>
            </div>
            <div className="h-2 bg-white/5 border border-primary/20 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-secondary"
                style={{ width: '87%', boxShadow: '0 0 8px rgba(59,167,224,0.4)' }}
              />
            </div>
            <div className="flex justify-between text-[10px] font-hud text-slate-500 mt-1">
              <span>EXP</span>
              <span>2+ YRS · IIT PATNA 8.44 CPI</span>
            </div>
          </div>

          {/* Stat grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {stats.map((s) => (
              <div key={s.label} className="border border-primary/20 bg-primary/[0.03] p-3">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs tracking-widest text-slate-400">{s.label}</span>
                  <span className="font-display text-lg font-bold text-primary">{s.value}</span>
                </div>
                <div className="h-1 bg-white/5 mt-1.5 mb-1.5 overflow-hidden">
                  <div className="h-full bg-primary/70" style={{ width: `${s.value}%` }} />
                </div>
                <div className="text-[10px] font-hud text-slate-500 truncate">{s.note}</div>
              </div>
            ))}
          </div>

          {/* Quick metrics */}
          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-primary/15">
            {[
              { number: '600+', label: 'DSA Solved' },
              { number: '1000+', label: 'Users Served' },
              { number: '3+', label: 'LLMs Tuned' },
            ].map((m) => (
              <div key={m.label} className="text-center">
                <div className="font-display text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  {m.number}
                </div>
                <div className="text-[10px] font-hud text-slate-400 tracking-wide">{m.label}</div>
              </div>
            ))}
          </div>
        </SystemPanel>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:ml-10">
        <ChevronDown className="h-7 w-7 text-primary/40" />
      </div>
    </div>
  )
}
