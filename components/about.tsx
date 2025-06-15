"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 text-white">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-sky-500 mx-auto mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Get to know more about me and what drives my passion for technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 overflow-hidden rounded-full border-4 border-blue-500 shadow-lg shadow-blue-500/20">
              <Image src="/images/profile-photo.png" alt="Ali Mohsin" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
                  Ali Mohsin
                </h3>
                <p className="text-slate-300 mb-6">
                  I'm a Computer Science student at George Mason University with a 3.6 GPA and Dean's List recognition.
                </p>
                <p className="text-slate-300 mb-6">
                  My passion lies in artificial intelligence, machine learning, and developing innovative software
                  solutions that make a real-world impact.
                </p>
                <p className="text-slate-300 mb-6">
                  With hands-on experience in AI/ML development, full-stack applications, and data science, I've worked
                  on projects ranging from pose detection systems to financial analysis tools. I'm always eager to learn
                  new technologies and tackle challenging problems.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
