"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 text-white">Resume</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-sky-500 mx-auto mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            View my complete professional resume with all my experience and qualifications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative max-w-4xl w-full">
            {/* Dotted border container */}
            <div className="relative p-8 border-4 border-dotted border-blue-400/60 rounded-3xl bg-gradient-to-br from-slate-800/30 to-slate-700/30 backdrop-blur-sm shadow-2xl">
              {/* Inner shadow effect */}
              <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-blue-500/5 to-sky-500/5 pointer-events-none"></div>
              
              {/* Resume image */}
              <div className="relative w-full aspect-[8.5/11] overflow-hidden rounded-2xl shadow-lg">
                <Image 
                  src="/images/resume.jpg" 
                  alt="Ali Mohsin Resume" 
                  fill 
                  className="object-contain bg-white"
                  priority
                />
              </div>
              
              {/* Decorative corner accents */}
              <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-blue-400/40 rounded-tl-lg"></div>
              <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-blue-400/40 rounded-tr-lg"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-blue-400/40 rounded-bl-lg"></div>
              <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-blue-400/40 rounded-br-lg"></div>
            </div>


          </div>
        </motion.div>
      </div>
    </section>
  )
}
