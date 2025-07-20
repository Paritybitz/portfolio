"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Cloud, Cpu, Smartphone, Brain } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code className="h-6 w-6 text-blue-400" />,
    skills: ["Python", "Java", "C", "SQL", "JavaScript", "HTML/CSS", "R", "Dart", "Kotlin", "MATLAB"],
  },
  {
    title: "AI/ML & Data Science",
    icon: <Brain className="h-6 w-6 text-sky-400" />,
    skills: [
      "PyTorch",
      "OpenCV",
      "MediaPipe",
      "YOLOv8",
      "Llama 3.1",
      "FAISS",
      "NumPy",
      "Pandas",
      "Seaborn",
      "LangChain",
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: <Smartphone className="h-6 w-6 text-cyan-400" />,
    skills: ["React Native", "Flutter", "React", "Next.js", "Streamlit", "JavaFX", "SentenceTransformers", "Pillow", "Ultralytics"],
  },
  {
    title: "Databases & Cloud",
    icon: <Database className="h-6 w-6 text-indigo-400" />,
    skills: ["PostgreSQL", "AWS EC2", "AWS S3", "Docker", "Git", "GitHub"],
  },
  {
    title: "Development Tools",
    icon: <Cpu className="h-6 w-6 text-purple-400" />,
    skills: ["VS Code", "IntelliJ", "Android Studio", "Jupyter", "Agile", "Linux"],
  },
  {
    title: "Specializations",
    icon: <Cloud className="h-6 w-6 text-teal-400" />,
    skills: [
      "Computer Vision",
      "NLP",
      "Machine Learning",
      "Data Analysis",
      "Software Engineering",
      "Mobile Development",
    ],
  },
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
          <h2 className="text-3xl font-bold mb-2 text-white">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the technologies I work with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {category.icon}
                    <h3 className="text-lg font-bold text-slate-200">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border border-blue-500/30 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
