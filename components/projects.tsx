"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Smartphone, Brain, Search, Gamepad2 } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "BEIGHT Workout App",
    description:
      "AI-powered body-weight workout app utilizing computer vision to track posture and count reps in real time, achieving 95% accuracy in tracking key body landmarks.",
    icon: <Smartphone className="h-8 w-8 text-blue-400" />,
    tech: ["React Native", "Python", "OpenCV", "MediaPipe", "NumPy", "PostgreSQL"],
    github: "https://github.com",
    demo: "#",
    status: "In Development",
  },
  {
    id: 2,
    title: "Financial Sentiment Analysis",
    description:
      "Fine-tuned Llama 3.1 model to classify financial news by sentiment, optimizing for market prediction insights with interactive web interface.",
    icon: <Brain className="h-8 w-8 text-sky-400" />,
    tech: ["Llama 3.1", "Streamlit", "Python", "NLP", "Machine Learning"],
    github: "https://github.com",
    demo: "#",
    status: "Completed",
  },
  {
    id: 3,
    title: "PDF Semantic Search Engine",
    description:
      "Deployed a semantic search engine for PDF retrieval enabling fast text similarity searches across 1,000+ documents using advanced embeddings.",
    icon: <Search className="h-8 w-8 text-cyan-400" />,
    tech: ["Python", "LangChain", "FAISS", "SentenceTransformers", "Vector Database"],
    github: "https://github.com",
    demo: "#",
    status: "Completed",
  },
  {
    id: 4,
    title: "Blob Game",
    description:
      "Interactive Java arcade game with GUI, featuring keyboard controls, dynamic difficulty, real-time collision detection, and visual feedback.",
    icon: <Gamepad2 className="h-8 w-8 text-indigo-400" />,
    tech: ["Java", "Swing", "Game Development", "GUI", "Object-Oriented Programming"],
    github: "https://github.com",
    demo: "#",
    status: "Completed",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-800 via-blue-900/10 to-sky-900/10">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 text-white">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-sky-500 mx-auto mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Explore some of my recent projects that showcase my skills in AI/ML, software development, and
            problem-solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden group bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {project.icon}
                    <div>
                      <h3 className="text-xl font-bold text-blue-300">{project.title}</h3>
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs border ${
                          project.status === "Completed"
                            ? "bg-green-500/20 text-green-300 border-green-500/30"
                            : "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border border-blue-500/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="gap-2 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white border-0"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      {project.status === "In Development" ? "Preview" : "Demo"}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
