'use client'

import { Button } from "@/components/ui/button"
import { Download, Mail, Github, Linkedin } from 'lucide-react'
import Image from "next/image"
import { basePath } from "@/lib/base-path"

export function HomePage() {
  const stats = [
    { number: '2+', label: 'Years in production AI' },
    { number: '1,000+', label: 'Users served' },
    { number: '600+', label: 'DSA problems solved' },
    { number: '8.44', label: 'CPI at IIT Patna' },
  ]

  return (
    <div className="lg:ml-20 min-h-screen flex items-center justify-center px-6 py-28">
      <div className="max-w-4xl mx-auto w-full text-center">
        {/* Avatar */}
        <div className="mb-8 flex justify-center animate-fadeInUp">
          <div className="rounded-full border border-[#eceae4] p-1 bg-[#fcfbf8]">
            <Image
              src="/myimg.jpeg"
              alt="Syed Ali Abbas Rahil"
              width={104}
              height={104}
              className="rounded-full object-cover w-[104px] h-[104px]"
            />
          </div>
        </div>

        <p className="system-tag text-sm mb-5 animate-fadeInUp">AI Engineer, Tokyo</p>

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
        <div className="flex justify-center gap-6 mb-16 animate-fadeInUp animation-delay-400">
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

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto pt-10 border-t border-[#eceae4]">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-semibold text-[#1c1c1c] tracking-[-1.2px] mb-1">{stat.number}</div>
              <div className="text-sm text-[#5f5f5d]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
