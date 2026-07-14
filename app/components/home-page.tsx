'use client'

import { Button } from "@/components/ui/button"
import { SystemPanel } from './system-panel'
import { PixelBadge, PixelChevron, PixelBars, PixelBolt, PixelBook, PixelHeart, PixelEye } from './pixel-sprites'
import { Download, Mail, Github, Linkedin } from 'lucide-react'
import { basePath } from "@/lib/base-path"

export function HomePage() {
  const attributes = [
    { label: 'STR', domain: 'Systems & Backend', value: 88, Icon: PixelBars },
    { label: 'AGI', domain: 'Rapid Shipping', value: 90, Icon: PixelBolt },
    { label: 'INT', domain: 'LLM Research', value: 95, Icon: PixelBook },
    { label: 'VIT', domain: 'Production Reliability', value: 85, Icon: PixelHeart },
    { label: 'PER', domain: 'Competitive Programming', value: 92, Icon: PixelEye },
  ]

  const stats = [
    { number: '2+', label: 'Years in production AI' },
    { number: '1,000+', label: 'Users served' },
    { number: '600+', label: 'DSA problems solved' },
    { number: '8.44', label: 'CPI at IIT Patna' },
  ]

  return (
    <div className="lg:ml-20 min-h-screen flex items-center justify-center px-6 py-28">
      <div className="max-w-4xl mx-auto w-full text-center">
        {/* Rank badge */}
        <div className="mb-6 flex justify-center animate-fadeInUp">
          <div className="relative inline-flex items-center justify-center text-[#1c1c1c]">
            <PixelBadge size={5} />
            <span className="absolute inset-0 flex items-center justify-center font-semibold text-lg">S</span>
          </div>
        </div>

        <p className="system-tag text-sm mb-5 inline-flex items-center gap-2 animate-fadeInUp">
          <PixelChevron size={2} className="text-[#1c1c1c]/50" />
          AI Engineer, Tokyo
        </p>

        <h1 className="text-[2.75rem] sm:text-6xl font-semibold text-[#1c1c1c] tracking-[-1.5px] leading-[1.05] mb-6 animate-fadeInUp">
          Syed Ali Abbas Rahil
        </h1>

        <p className="text-lg md:text-xl text-[#5f5f5d] leading-relaxed max-w-2xl mx-auto mb-10 animate-fadeInUp animation-delay-200">
          I build Large Language Models, agentic architectures, and RAG pipelines.
          Currently engineering enterprise AI at Otsuka Corporation in Tokyo,
          fine-tuning models, deploying vLLM inference, and shipping RAG chatbots
          for over a thousand users.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8 animate-fadeInUp animation-delay-200">
          <a href={`${basePath}/Syed_Ali_Abbas_Rahil_Resume.pdf`} target="_blank" rel="noopener noreferrer">
            <Button className="w-full sm:w-auto bg-[#1c1c1c] text-[#fcfbf8] hover:bg-[#1c1c1c]/90 rounded-md btn-inset px-5">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </a>
          <a href="mailto:rahilrizvi0786110@gmail.com">
            <Button variant="outline" className="w-full sm:w-auto bg-transparent border-[rgba(28,28,28,0.4)] text-[#1c1c1c] hover:bg-[#1c1c1c]/[0.04] rounded-md px-5">
              <Mail className="mr-2 h-4 w-4" />
              Get in touch
            </Button>
          </a>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-6 mb-12 animate-fadeInUp animation-delay-400">
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
                className="text-[#5f5f5d] hover:text-[#1c1c1c] transition-colors duration-200"
              >
                <IconComponent className="h-6 w-6" />
              </a>
            )
          })}
        </div>

        {/* Player status */}
        <SystemPanel tag="Status Window" className="p-6 md:p-8 text-left animate-fadeInUp animation-delay-400">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-5 mb-6">
            {attributes.map((attr) => (
              <div key={attr.label} className="text-center">
                <div className="flex justify-center mb-2 text-[#1c1c1c]/70">
                  <attr.Icon size={3} />
                </div>
                <div className="text-sm font-semibold text-[#1c1c1c] mb-0.5">{attr.label}</div>
                <div className="text-[11px] text-[#5f5f5d] mb-2 leading-tight">{attr.domain}</div>
                <div className="h-1.5 bg-[#eceae4] rounded-full overflow-hidden">
                  <div className="h-full bg-[#1c1c1c] rounded-full" style={{ width: `${attr.value}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-[#eceae4]">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-semibold text-[#1c1c1c] tracking-[-1px] mb-1">{stat.number}</div>
                <div className="text-xs text-[#5f5f5d]">{stat.label}</div>
              </div>
            ))}
          </div>
        </SystemPanel>
      </div>
    </div>
  )
}
