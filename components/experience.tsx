"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const experiences = [
  {
    id: 1,
    company: "Network Designs Inc.",
    position: "AI/ML Developer",
    duration: "May 2025 – Aug 2025",
    location: "Hybrid",
    type: "Internship",
    logo: "/images/NDi.png",
    description: [
      "In Progress...",
    ],
  },
  {
    id: 2,
    company: "George Mason University",
    position: "Hackathon Software Developer",
    duration: "Oct 2024 – Mar 2025",
    location: "In-Person",
    type: "Leadership",
    logo: "/images/hackfax.png",
    description: [
      "Leading a team of 5 to develop and optimize the coding section for a large-scale hackathon",
      "Leveraging collaborative tools to ensure seamless execution and enhance participant experience",
      "Managing project timelines and coordinating with multiple stakeholders",
    ],
  },
  {
    id: 3,
    company: "Ballogy | FiveRivers Technologies",
    position: "AI/ML Data Science Intern",
    duration: "May 2024 – Aug 2024",
    location: "In-Person",
    type: "Internship",
    logo: "/images/ballogy.png",
    description: [
      "Collaborated with a team using Agile methodologies to develop an AI-driven basketball training platform",
      "Delivered real-time insights to 100+ coaches and dozens of schools nationwide, enhancing performance tracking for 15,000+ athletes",
      "Engineered a pose detection system utilizing YOLOv8 and MediaPipe, deployed on AWS EC2 for scalable processing",
      "Automated dataset annotation for 2 million frames, improving accuracy by 30% and scalability by 50%",
      "Developed a financial analysis tool, standardized metrics from 156 companies with NumPy and Pandas",
      "Formulated an image enhancement pipeline using AWS S3, Pillow, and Canny edge detection, reducing false positives by ~94%",
    ],
  },
  {
    id: 4,
    company: "George Mason University",
    position: "Teaching Assistant",
    duration: "Jan 2024 – May 2024",
    location: "In-Person",
    type: "Teaching",
    logo: "/images/gmu.png",
    description: [
      "Led interactive learning sessions for 50+ students in Python programming",
      "Reinforced core programming concepts through one-on-one mentorship and workshops",
      "Provided personalized guidance to help students overcome coding challenges",
      "Developed supplementary learning materials and coding exercises",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 text-white">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-sky-500 mx-auto mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My professional journey and hands-on experience in software development, AI/ML, and leadership.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="hidden sm:block">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          width={24}
                          height={24}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-blue-300">{exp.position}</h3>
                        <p className="text-sky-400 font-medium">{exp.company}</p>
                        <p className="text-slate-400 text-sm">{exp.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-300 font-medium">{exp.duration}</p>
                      <span className="inline-block px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-slate-300">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
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
