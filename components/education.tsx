"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

const education = [
  {
    id: 1,
    institution: "George Mason University",
    degree: "B.S. Applied Computer Science",
    minor: "Minor in Data Science",
    duration: "Aug 2023 – Dec 2026",
    location: "Fairfax, VA",
    gpa: "3.6/4.0",
    honors: "Dean's List",
    icon: <GraduationCap className="h-10 w-10 text-blue-400" />,
    details: [
      "Relevant Coursework: (AP/DE Credits: 46), Data Structures, OO, (Python and Java), Low-Level Programming with C, Statistics, Linear Algebra, Formal Methods/Models, Software Engineering, Software Design",
      "Fall 2025: Systems Programming, Algorithms, Databases, Software Testing and Maintenance, Web App Development",
    ],
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 text-white">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">My academic journey and achievements.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="hidden sm:block">{edu.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-blue-300">{edu.degree}</h3>
                        <p className="text-sky-400 font-medium">{edu.minor}</p>
                        <p className="text-slate-300 font-medium">{edu.institution}</p>
                        <p className="text-slate-400">{edu.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-300 font-medium">{edu.duration}</p>
                      <p className="text-blue-400 font-medium">GPA: {edu.gpa}</p>
                    </div>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-slate-300">
                    {edu.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
