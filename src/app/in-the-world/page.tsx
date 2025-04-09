'use client'

import { motion } from 'framer-motion'

export default function InTheWorld() {
  return (
    <main className="min-h-screen pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-[calc(100vh-8rem)]"
        >
          <iframe
            src="/in-the-world.html"
            className="w-full h-full rounded-lg bg-dark-600"
            title="In the World Interactive View"
          />
        </motion.div>
      </div>
    </main>
  )
} 