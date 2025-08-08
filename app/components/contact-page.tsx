'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Calendar } from 'lucide-react'

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rahilrizvi0786110@gmail.com",
      href: "mailto:rahilrizvi0786110@gmail.com",
      color: "from-emerald-400 to-emerald-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-700-7759-590",
      href: "tel:+917007759590",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tokyo, Japan",
      href: "#",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      icon: Calendar,
      label: "Schedule Call",
      value: "Book a Meeting",
      href: "#",
      color: "from-pink-400 to-pink-600"
    }
  ]

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/RahilOp", color: "hover:text-emerald-400" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/syedrahil876", color: "hover:text-purple-400" },
    { icon: Mail, label: "Email", href: "mailto:rahilrizvi0786110@gmail.com", color: "hover:text-pink-400" }
  ]

  return (
    <div className="lg:ml-20 min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-emerald-400 to-purple-400 mb-6 animate-fadeInUp">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            Ready to collaborate on your next AI project? Let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-black/60 border-white/10 backdrop-blur-sm animate-slideInLeft">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <Send className="w-6 h-6 mr-3 text-emerald-400" />
                Send Message
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Name</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-emerald-400"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-emerald-400"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Subject</label>
                  <Input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-emerald-400"
                    placeholder="Project Discussion"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-emerald-400 min-h-[120px]"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-emerald-500 to-purple-600 hover:from-emerald-600 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8 animate-slideInRight">
            {/* Contact Information */}
            <Card className="bg-black/60 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Get In Touch</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 group"
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color}`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      
                      <div>
                        <div className="text-gray-400 text-sm">{info.label}</div>
                        <div className="text-white font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-purple-400 transition-all duration-300">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  )
                })}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-black/60 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Follow Me</CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className={`flex items-center justify-center space-x-2 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-105`}
                      >
                        <IconComponent className="w-5 h-5" />
                        <span className="font-medium">{social.label}</span>
                      </a>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="bg-gradient-to-br from-emerald-500/10 to-purple-500/10 border-emerald-400/30">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                </div>
                
                <h3 className="text-blue font-semibold text-lg mb-2">Available for Projects</h3>
                <p className="text-black-300 text-sm">
                  Currently working as AI Engineer at Otsuka Shokai, Tokyo. 
                  Open to discussing AI/LLM projects and collaborations!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
