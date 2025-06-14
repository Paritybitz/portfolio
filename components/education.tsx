"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, School, BookOpen } from "lucide-react"

const education = [
  {
    id: 1,
    institution: "B.Tech",
    degree: "Currently entering 1st Year",
    icon: <GraduationCap className="h-10 w-10 text-indigo-400" />,
  },
  {
    id: 2,
    institution: "NRI Junior College",
    degree: "Intermediate - 74.8%",
    icon: <BookOpen className="h-10 w-10 text-blue-400" />,
  },
  {
    id: 3,
    institution: "Sarada High School",
    degree: "10th - 76%",
    icon: <School className="h-10 w-10 text-purple-400" />,
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-900">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 text-white">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">My academic journey and qualifications.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-6">
                      <div className="hidden sm:block">{edu.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-indigo-300">{edu.institution}</h3>
                        <p className="text-slate-400">{edu.degree}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
