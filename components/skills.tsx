"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"

const skills = [
  { name: "Python", level: 85 },
  { name: "Java", level: 80 },
  { name: "C", level: 75 },
  { name: "C++", level: 70 },
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "Frontend Development", level: 80 },
  { name: "Backend Development", level: 75 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 text-white">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Here are the technologies and skills I've acquired throughout my journey.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-200">{skill.name}</span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-2 bg-slate-700"
                      indicatorClassName="bg-gradient-to-r from-purple-500 to-blue-500"
                    />
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
