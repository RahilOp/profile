'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Target, Heart, Zap } from 'lucide-react'

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
    { icon: Award, title: "JEE Advanced AIR 2796", year: "2020", color: "from-emerald-400 to-emerald-600" },
    { icon: Target, title: "Codeforces Specialist", year: "2023", color: "from-purple-400 to-purple-600" },
    { icon: Heart, title: "Japanese N5 Certified", year: "2024", color: "from-yellow-400 to-yellow-600" },
    { icon: Zap, title: "IIT Patna Graduate", year: "2024", color: "from-pink-400 to-pink-600" }
  ]

  const interests = [
    "Large Language Models", "Agentic Architectures", "RAG Pipelines",
    "LLM Fine-tuning", "Mixture of Experts", "Knowledge Graphs", 
    "Competitive Programming", "System Design"
  ]

  return (
    <div className="lg:ml-20 min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-400 mb-6 animate-fadeInUp">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            Passionate about pushing the boundaries of artificial intelligence and creating solutions that make a difference.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Story Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6 animate-slideInLeft">My Journey</h2>
            
            <div className="space-y-4 text-gray-300 leading-relaxed animate-slideInLeft animation-delay-200">
              <p>
                My journey in AI began during my BTech in CSE at IIT Patna, where I secured a CPI of 8.44. 
                My passion for artificial intelligence led me to Tokyo, where I'm currently working as an AI Engineer 
                at Otsuka Shokai, spearheading LLM development and fine-tuning.
              </p>
              
              <p>
                I specialize in advanced LLM techniques including SFT, LoRA, QLoRA, DPO, and ORPO, with extensive 
                experience in deploying vLLM-served models on NVIDIA GPU clusters. My work focuses on designing 
                Agentic architectures integrated with RAG pipelines, leveraging cutting-edge frameworks like 
                Langchain, LLamaIndex, and CrewAI.
              </p>
              
              <p>
                Beyond technical expertise, I'm a competitive programmer with 600+ DSA problems solved across 
                platforms like Codeforces (Specialist), CodeChef (1992 rating), and LeetCode. I also hold 
                Japanese N5 language proficiency certification, enabling effective collaboration in international teams.
              </p>
            </div>

            {/* Philosophy */}
            <Card className="bg-gradient-to-br from-emerald-500/10 to-purple-500/10 border-emerald-400/30 animate-slideInLeft animation-delay-400">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">My Philosophy</h3>
                <p className="text-gray-300 italic">
                  "The future of AI lies in creating intelligent agents that can reason, collaborate, and adapt. 
                  My goal is to build systems that augment human capabilities through sophisticated LLM architectures."
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Achievements & Stats */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-6 animate-slideInRight">Achievements</h2>
            
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon
                return (
                  <Card 
                    key={index}
                    className={`bg-black/60 border-white/10 backdrop-blur-sm transition-all duration-500 transform ${
                      visibleCards.includes(index) ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                    }`}
                  >
                    <CardContent className="p-6 text-center">
                      <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r ${achievement.color} flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-white font-semibold text-sm mb-1">{achievement.title}</h3>
                      <p className="text-gray-400 text-xs">{achievement.year}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-4 animate-slideInRight animation-delay-600">
              {[
                { label: "DSA Problems Solved", value: "600+" },
                { label: "JEE Advanced Rank", value: "2796" },
                { label: "CodeChef Rating", value: "1992" },
                { label: "Years at IIT Patna", value: "4" }
              ].map((stat, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <span className="text-gray-300">{stat.label}</span>
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-400">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interests Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8 animate-fadeInUp">Areas of Interest</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {interests.map((interest, index) => (
              <Badge 
                key={index}
                variant="secondary" 
                className="bg-gradient-to-r from-emerald-500/20 to-purple-500/20 text-white border-emerald-400/30 px-4 py-2 text-sm hover:scale-105 transition-transform duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
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
