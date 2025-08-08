'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react'

export function EducationPage() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      school: "Indian Institute of Technology, Patna",
      period: "2020 - 2024",
      location: "Patna, India",
      gpa: "8.44/10.0",
      specialization: "Artificial Intelligence & Machine Learning",
      thesis: "Advanced LLM Architectures and Multi-Agent Systems",
      achievements: [
        "CPI: 8.44/10.0",
        "JEE Advanced AIR 2796 (top 0.3% nationwide)",
        "Coordinator - Creative Writing & Social Media, E-Cell",
        "Design Team Member - Training & Placement Cell"
      ],
      coursework: [
        "Data Structures and Algorithms", "Operating Systems", "Database Management Systems",
        "Object-Oriented Programming", "System Design", "Probability and Statistics",
        "Calculus", "Machine Learning", "Artificial Intelligence"
      ],
      color: "from-emerald-400 to-emerald-600"
    },
    {
      degree: "Intermediate School Certificate (ISC)",
      school: "St. Francis School",
      period: "2018 - 2020",
      location: "Varanasi, India",
      gpa: "98.40%",
      specialization: "Physics, Chemistry, Mathematics, Computer Science",
      thesis: "Advanced Mathematics and Computer Science Fundamentals",
      achievements: [
        "98.40% in ISC Board Examinations",
        "Top performer in Mathematics and Computer Science",
        "School topper in Computer Science",
        "Active participant in science exhibitions"
      ],
      coursework: [
        "Advanced Mathematics", "Physics", "Chemistry", "Computer Science",
        "English Literature", "Physical Education"
      ],
      color: "from-purple-400 to-purple-600"
    }
  ]

  const certifications = [
    {
      title: "Japanese Language Proficiency N5",
      issuer: "Japan Foundation",
      date: "2024",
      credentialId: "JLPT-N5-2024-001",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      title: "Codeforces Specialist Rating",
      issuer: "Codeforces",
      date: "2023",
      credentialId: "CF-SPECIALIST-2023",
      color: "from-pink-400 to-pink-600"
    },
    {
      title: "CodeChef 4-Star Rating (1992)",
      issuer: "CodeChef",
      date: "2023",
      credentialId: "CC-4STAR-1992",
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Advanced LLM Fine-tuning Techniques",
      issuer: "Self-Certified (Professional Experience)",
      date: "2024",
      credentialId: "LLM-EXPERT-2024",
      color: "from-green-400 to-green-600"
    }
  ]

  return (
    <div className="lg:ml-20 min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400 mb-6 animate-fadeInUp">
            Education
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            My academic journey and continuous learning in computer science and artificial intelligence.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-12 mb-16">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className="bg-black/60 border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500 animate-slideInLeft"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${edu.color}`}>
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-2xl mb-2">{edu.degree}</CardTitle>
                      <div className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-400 text-xl font-semibold">
                        {edu.school}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center text-yellow-400 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.period}
                    </div>
                    <div className="text-gray-400">{edu.location}</div>
                    <div className="text-emerald-400 font-semibold mt-1">GPA: {edu.gpa}</div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Specialization & Thesis */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                      <BookOpen className="w-5 h-5 mr-2 text-emerald-400" />
                      Specialization
                    </h3>
                    <p className="text-gray-300">{edu.specialization}</p>
                    
                    <h4 className="text-md font-semibold text-white mt-4 mb-2">Thesis</h4>
                    <p className="text-gray-300 italic">"{edu.thesis}"</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-yellow-400" />
                      Achievements
                    </h3>
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                          <span className="text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Relevant Coursework */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Relevant Coursework</h3>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <Badge 
                        key={courseIndex}
                        variant="secondary" 
                        className="bg-white/10 text-gray-300 border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-3xl font-bold text-white text-center mb-8 animate-fadeInUp">
            Professional Certifications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="bg-black/60 border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${cert.color} flex-shrink-0`}>
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-lg mb-1">{cert.title}</h3>
                      <p className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-400 font-medium mb-2">
                        {cert.issuer}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-yellow-400">{cert.date}</span>
                        <span className="text-gray-400 font-mono text-xs">{cert.credentialId}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
