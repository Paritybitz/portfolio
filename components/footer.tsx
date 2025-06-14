"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-8 border-t border-slate-700 bg-slate-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            className="text-slate-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            &copy; {new Date().getFullYear()} Megha Shyam Jallepalli. All rights reserved.
          </motion.p>

          <motion.p
            className="text-slate-400 text-sm mt-2 md:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Built with React & Next.js
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 md:mt-0"
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300 hover:border-purple-400"
              onClick={scrollToTop}
            >
              <ArrowUp className="h-4 w-4" />
              <span className="sr-only">Back to top</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
