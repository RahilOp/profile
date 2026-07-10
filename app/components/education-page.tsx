'use client'

import { SystemPanel } from './system-panel'
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react'

export function EducationPage() {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      school: "Indian Institute of Technology, Patna",
      period: "2020 to 2024",
      location: "Patna, India",
      score: "CPI 8.44 / 10",
      details: [
        "Secured AIR 2796 in JEE Advanced 2020 (top 0.3% of 150,000+ candidates).",
        "Solved 600+ DSA problems across Codeforces (Specialist), CodeChef (1992), and LeetCode.",
        "Coordinator for Creative Writing & Social Media, E-Cell, IIT Patna.",
      ],
      coursework: [
        "Data Structures & Algorithms", "Operating Systems", "DBMS",
        "System Design", "Probability & Statistics", "Machine Learning", "Artificial Intelligence"
      ],
    },
    {
      degree: "Senior Secondary (Class XII)",
      school: "CISCE Board",
      period: "2020",
      location: "India",
      score: "98.40%",
      details: [
        "98.40% aggregate in the CISCE Senior Secondary examination.",
        "Strong foundation in Physics, Chemistry, Mathematics, and Computer Science.",
      ],
      coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science", "English"],
    },
    {
      degree: "Secondary (Class X)",
      school: "ICSE Board",
      period: "2018",
      location: "India",
      score: "97.67%",
      details: [
        "97.67% aggregate in the ICSE Secondary examination.",
      ],
      coursework: ["Mathematics", "Science", "Computer Applications", "English"],
    }
  ]

  const certifications = [
    { title: "Python for Machine Learning & Data Science", issuer: "Udemy", date: "Certified" },
    { title: "Japanese Language Proficiency (NAT) N5", issuer: "NAT-Test", date: "Qualified" },
    { title: "Codeforces Specialist", issuer: "Codeforces", date: "Competitive" },
    { title: "CodeChef 1992 Rating", issuer: "CodeChef", date: "Competitive" },
  ]

  return (
    <div className="lg:ml-20 min-h-screen px-6 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="system-tag text-xs mb-3">[ TRAINING GROUNDS ]</div>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4 text-glow-blue animate-fadeInUp">
            Education
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto font-hud animate-fadeInUp animation-delay-200">
            The academic path that forged the fundamentals.
          </p>
        </div>

        {/* Education timeline */}
        <div className="space-y-6 mb-16">
          {education.map((edu, index) => (
            <SystemPanel
              key={index}
              className="p-8 animate-slideInLeft"
              variant={index === 0 ? 'blue' : 'violet'}
            >
              <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 border ${index === 0 ? 'border-primary/50 bg-primary/10' : 'border-secondary/50 bg-secondary/10'}`}>
                    <GraduationCap className={`w-7 h-7 ${index === 0 ? 'text-primary' : 'text-secondary'}`} />
                  </div>
                  <div>
                    <h2 className="font-hud text-white text-xl md:text-2xl font-semibold mb-1">{edu.degree}</h2>
                    <div className="text-primary font-hud">{edu.school}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end text-slate-400 text-sm font-hud mb-1">
                    <Calendar className="w-4 h-4 mr-2" />{edu.period}
                  </div>
                  <div className="font-display text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    {edu.score}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="system-tag text-xs mb-3 flex items-center">
                    <Award className="w-4 h-4 mr-2" /> Highlights
                  </h3>
                  <div className="space-y-2">
                    {edu.details.map((d, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary mt-1.5 flex-shrink-0 rotate-45" />
                        <span className="text-slate-300 font-hud text-sm">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="system-tag text-xs mb-3 flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" /> Coursework
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, i) => (
                      <Badge key={i} className="bg-white/[0.04] text-slate-300 border border-white/10 font-hud text-xs">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </SystemPanel>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <div className="text-center mb-8">
            <div className="system-tag text-xs mb-2">[ ACHIEVEMENTS ]</div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white">Certifications & Ratings</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="system-panel system-corners rounded-sm p-6 hover:-translate-y-1 transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 border border-secondary/50 bg-secondary/10 flex-shrink-0">
                    <Award className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-hud font-semibold mb-1">{cert.title}</h3>
                    <p className="text-primary font-hud text-sm mb-1">{cert.issuer}</p>
                    <span className="text-slate-500 text-xs font-hud tracking-wide">{cert.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
