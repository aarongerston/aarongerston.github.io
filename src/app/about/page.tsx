'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[250px] w-[250px] sm:h-[250px] sm:w-[250px] lg:h-[475px] lg:w-[475px] mx-auto"
          >
            <Image
              src="/assets/AaronERH_circle_cropped.png"
              alt="Aaron Gerston Profile Picture"
              fill
              className="object-cover rounded-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6 text-dark-300"
          >
            <p>
              I'm a <span className="font-semibold text-primary-400">data scientist</span> on a mission to <span className="font-semibold text-primary-400">make a difference</span>.
            </p>
            <p>
              Armed with a broad academic background in engineering, biochemistry, psychology, and computer science, I excel at connecting the dots between complex problems and optimal solutions.
            </p>
            <p>
              Fueled by a passion for advancing mental health diagnostic technologies, I have become an expert in <span className="font-semibold text-primary-400">electrophysiological signal processing</span> and have worked with numerous medical technology companies, from small startups to multinational corporations.
            </p>
            <p>
              But data is everywhere, and my innate <span className="font-semibold text-primary-400">curiosity</span> and <span className="font-semibold text-primary-400">adaptability</span> allow me to translate these skills to nearly limitless contexts.
            </p>
            <p>
              From medical signal processing to natural language processing and all the data science in between, I bring a comprehensive toolkit and a sense of excitement to every challenge, ensuring that data doesn't just speak — it <span className="font-semibold text-primary-400">inspires action</span>.
            </p>
            <div className="flex flex-col items-center space-y-3 sm:space-y-4">
              <Link
                href="https://linkedin.com/in/aarongerston"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm sm:text-base text-dark-100 hover:text-primary-400 transition-colors duration-200"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.016-2.005-1.223-2.005-1.222 0-1.409.953-1.409 1.937v5.672h-3v-11h2.95v1.027h.042c.312-.594 1.072-1.223 2.207-1.223 2.36 0 2.9 1.554 2.9 3.575v6.621z"/>
                </svg>
                LinkedIn
              </Link>
              <Link
                href="https://github.com/aarongerston"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm sm:text-base text-dark-100 hover:text-primary-400 transition-colors duration-200"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
} 