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
          <div className="system-tag text-sm mb-3">Contact</div>
          <h1 className="text-4xl md:text-5xl font-semibold text-[#1c1c1c] tracking-[-1.2px] mb-4">
            Let's Connect
          </h1>
          <p className="text-lg text-[#5f5f5d] max-w-2xl mx-auto">
            Building something with AI? Let's talk about how to bring it to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact form */}
          <SystemPanel tag="Send a Message" className="p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#5f5f5d] text-sm mb-2">Name</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-[#fcfbf8] border border-[#eceae4] text-[#1c1c1c] placeholder:text-[#5f5f5d] rounded-md focus:border-[rgba(28,28,28,0.4)]"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[#5f5f5d] text-sm mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-[#fcfbf8] border border-[#eceae4] text-[#1c1c1c] placeholder:text-[#5f5f5d] rounded-md focus:border-[rgba(28,28,28,0.4)]"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#5f5f5d] text-sm mb-2">Subject</label>
                <Input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-[#fcfbf8] border border-[#eceae4] text-[#1c1c1c] placeholder:text-[#5f5f5d] rounded-md focus:border-[rgba(28,28,28,0.4)]"
                  placeholder="Project Discussion"
                  required
                />
              </div>

              <div>
                <label className="block text-[#5f5f5d] text-sm mb-2">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-[#fcfbf8] border border-[#eceae4] text-[#1c1c1c] placeholder:text-[#5f5f5d] rounded-md focus:border-[rgba(28,28,28,0.4)] min-h-[120px]"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1c1c1c] text-[#fcfbf8] hover:bg-[#1c1c1c]/90 rounded-md btn-inset"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#fcfbf8] mr-2" />
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center"><Send className="w-4 h-4 mr-2" /> Send Message</div>
                )}
              </Button>
            </form>
          </SystemPanel>

          {/* Contact info & social */}
          <div className="space-y-6">
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
                      className="flex items-center space-x-4 p-3 border border-[#eceae4] bg-[#1c1c1c]/[0.02] hover:bg-[#1c1c1c]/[0.04] rounded-md transition-colors"
                    >
                      <div className="p-2.5 bg-[#1c1c1c]/[0.04] rounded-md">
                        <IconComponent className="w-5 h-5 text-[#1c1c1c]" />
                      </div>
                      <div>
                        <div className="text-[#5f5f5d] text-xs">{info.label}</div>
                        <div className="text-[#1c1c1c]">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </SystemPanel>

            <SystemPanel tag="Follow" className="p-6">
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center gap-2 p-4 border border-[#eceae4] bg-[#1c1c1c]/[0.02] hover:bg-[#1c1c1c]/[0.04] rounded-md text-[#1c1c1c] transition-colors"
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="text-xs">{social.label}</span>
                    </a>
                  )
                })}
              </div>
            </SystemPanel>

            {/* Availability */}
            <SystemPanel className="p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 bg-green-600 rounded-full" />
                <h3 className="text-[#1c1c1c] font-semibold">Available for Projects</h3>
              </div>
              <p className="text-[#5f5f5d] text-sm">
                Currently an AI Engineer at Otsuka Corporation, Tokyo. Open to discussing AI and LLM projects and collaborations.
              </p>
            </SystemPanel>
          </div>
        </div>
      </div>
    </div>
  )
}
