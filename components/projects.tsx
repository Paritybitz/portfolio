"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Health Assistant",
    description: "If we give a disease name, it shows treatments and medicines.",
    image: "/images/health-assistant.png",
    tech: ["React", "Next.js", "Tailwind CSS", "API Integration"],
    github: "https://github.com",
    demo: "https://meghahealth.vercel.app/",
  },
  {
    id: 2,
    title: "Indian Browser",
    description: "A web browser with Indian themes and features including a points leaderboard system.",
    image: "/images/indian-browser.png",
    tech: ["React", "Next.js", "Tailwind CSS", "Local Storage"],
    github: "https://github.com",
    demo: "https://v0-indian-browser-clone.vercel.app/",
  },
  {
    id: 3,
    title: "ScreenTime+",
    description: "An application to help users break free from screen addiction and develop healthier digital habits.",
    image: "/images/screentime-plus-light.png",
    tech: ["React", "Chart.js", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://v0-screen-time-app-design.vercel.app/",
  },
  {
    id: 4,
    title: "Swachh App",
    description:
      "A civic engagement platform that allows citizens to report cleanliness issues and track resolution progress.",
    image: "/images/swachh-app.png",
    tech: ["React", "Next.js", "Geolocation API", "Firebase"],
    github: "https://github.com",
    demo: "https://v0-starter-code-request.vercel.app/",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-800 via-purple-900/10 to-blue-900/10">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 text-white">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Explore some of my recent work and personal projects that showcase my skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden group bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-purple-300">{project.title}</h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 border border-purple-500/30"
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
                    className="gap-2 border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
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
