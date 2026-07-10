'use client'

import { useState } from 'react'
import { SystemPanel } from './system-panel'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react'

export function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Fallback: open the user's mail client with the composed message
    const body = encodeURIComponent(`${formData.message}\n\nFrom ${formData.name} (${formData.email})`)
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact')
    window.location.href = `mailto:rahilrizvi0786110@gmail.com?subject=${subject}&body=${body}`
    setTimeout(() => setIsSubmitting(false), 1200)
  }

  const contactInfo = [
    { icon: Mail, label: "Email", value: "rahilrizvi0786110@gmail.com", href: "mailto:rahilrizvi0786110@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91-700-7759-590", href: "tel:+917007759590" },
    { icon: MapPin, label: "Location", value: "Tokyo, Japan", href: "#" },
    { icon: Linkedin, label: "LinkedIn", value: "in/syedrahil876", href: "https://www.linkedin.com/in/syedrahil876" },
  ]

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/RahilOp" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/syedrahil876" },
    { icon: Mail, label: "Email", href: "mailto:rahilrizvi0786110@gmail.com" },
  ]

  return (
    <div className="lg:ml-20 min-h-screen px-6 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="system-tag text-xs mb-3">[ SUMMON ]</div>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4 text-glow-blue animate-fadeInUp">
            Let's Connect
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto font-hud animate-fadeInUp animation-delay-200">
            Building something with AI? Let's talk about how to bring it to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact form */}
          <SystemPanel tag="Send Message" className="p-8 animate-slideInLeft">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 text-sm font-hud mb-2">Name</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white/5 border-primary/20 text-white placeholder-slate-500 focus:border-primary font-hud"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-hud mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white/5 border-primary/20 text-white placeholder-slate-500 focus:border-primary font-hud"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-hud mb-2">Subject</label>
                <Input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-white/5 border-primary/20 text-white placeholder-slate-500 focus:border-primary font-hud"
                  placeholder="Project Discussion"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-hud mb-2">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/5 border-primary/20 text-white placeholder-slate-500 focus:border-primary min-h-[120px] font-hud"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary/15 border border-primary/60 text-primary hover:bg-primary/25 hover:text-white font-hud tracking-widest uppercase text-sm transition-all"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary mr-2" />
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center"><Send className="w-4 h-4 mr-2" /> Send Message</div>
                )}
              </Button>
            </form>
          </SystemPanel>

          {/* Contact info & social */}
          <div className="space-y-6 animate-slideInRight">
            <SystemPanel tag="Direct Channels" className="p-6">
              <div className="space-y-3">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-3 border border-white/10 bg-white/[0.02] hover:border-primary/40 transition-all duration-300 group"
                    >
                      <div className="p-2.5 border border-primary/40 bg-primary/10">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-slate-400 text-xs font-hud">{info.label}</div>
                        <div className="text-white font-hud group-hover:text-primary transition-colors duration-300">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </SystemPanel>

            <SystemPanel variant="violet" tag="Follow" className="p-6">
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center gap-2 p-4 border border-white/10 bg-white/[0.02] text-slate-400 hover:text-secondary hover:border-secondary/40 transition-all duration-300"
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="text-xs font-hud">{social.label}</span>
                    </a>
                  )
                })}
              </div>
            </SystemPanel>

            {/* Availability */}
            <SystemPanel className="p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 bg-green-400 rounded-full" style={{ boxShadow: '0 0 10px #4ade80' }} />
                <h3 className="text-white font-hud font-semibold">Available for Projects</h3>
              </div>
              <p className="text-slate-400 text-sm font-hud">
                Currently an AI Engineer at Otsuka Corporation, Tokyo. Open to discussing AI and LLM projects and collaborations.
              </p>
            </SystemPanel>
          </div>
        </div>
      </div>
    </div>
  )
}
