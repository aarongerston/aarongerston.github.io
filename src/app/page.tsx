'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="relative h-screen flex flex-row items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        <div className="flex-1 max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-6xl font-bold text-primary-400 mb-6"
          >
            <div className="relative h-16 sm:h-24 w-64 sm:w-96 mx-auto -mt-8 sm:mt-0">
              <Image
                src="/assets/logo/AaronGerstonData&AIConsulting_bluewhite.svg"
                alt="Aaron Gerston Data & AI Consulting"
                fill
                priority
                className="object-contain"
              />
            </div>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base xs:text-lg sm:text-xl md:text-2xl text-dark-50 mb-8 w-full flex justify-center px-4"
          >
            <div className="grid grid-cols-[auto_0.1rem_auto] justify-center gap-y-0.9 max-w-full">
              <span className="row-start-1 col-start-1 text-right font-light pr-1 whitespace-nowrap">developing</span>
              <span className="row-start-1 col-start-2 w-2"></span>
              <span className="row-start-1 col-start-3 text-left font-bold pl-1 whitespace-nowrap">health technology.</span>

              <span className="row-start-2 col-start-1 text-right font-light pr-1 whitespace-nowrap">driving</span>
              <span className="row-start-2 col-start-2 w-2"></span>
              <span className="row-start-2 col-start-3 text-left font-bold pl-1 whitespace-nowrap">social impact.</span>

              <span className="row-start-3 col-start-1 text-right font-light pr-1 whitespace-nowrap">building</span>
              <span className="row-start-3 col-start-2 w-2"></span>
              <span className="row-start-3 col-start-3 text-left font-bold pl-1 text-primary-400 whitespace-nowrap">a better tomorrow.</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link 
              href="/contact"
              className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Get Started
            </Link>
          </motion.div>
        </div>

        {/* Decorative pieces */}
        <motion.div
          initial={{ opacity: 0, x: -50}}
          animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 1 }}}
          style={{ opacity }}
          className="fixed left-0 sm:left-4 lg:left-8 bottom-0 sm:bottom-3 lg:bottom-3 w-[30vw] sm:w-[35vw] lg:w-[25vw] min-w-[150px] max-w-[370px] h-[50vh] sm:h-[60vh] lg:h-[70vh] pointer-events-none z-20"
        >
          <Image
            src="/assets/home/piece2.png"
            alt="Decorative left piece"
            fill
            className="object-contain object-left-bottom"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50}}
          animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 1 }}}
          style={{ opacity }}
          className="fixed right-0 sm:right-4 lg:right-8 bottom-0 sm:bottom-3 lg:bottom-3 w-[30vw] sm:w-[35vw] lg:w-[25vw] min-w-[165px] max-w-[400px] h-[50vh] sm:h-[60vh] lg:h-[70vh] pointer-events-none z-20"
        >
          <Image
            src="/assets/home/piece1.png"
            alt="Decorative right piece"
            fill
            className="object-contain object-right-bottom"
            priority
          />
        </motion.div>
      </section>

      {/* Mission Statement */}
      <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-transparent"
        />
        
        {/* Decorative stars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 1.7, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 text-2xl text-primary-400/30"
        >
          ✦
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-1/3 right-1/3 text-xl text-primary-400/20"
        >
          ✦
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="absolute bottom-1/4 left-1/3 text-3xl text-primary-400/40"
        >
          ✦
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-1/3 right-1/4 text-2xl text-primary-400/30"
        >
          ✦
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 text-xl text-primary-400/30"
        >
          ✦
        </motion.div>

        <div className="max-w-4xl mx-auto text-center py-20 px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <motion.div 
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="text-4xl text-primary-400"
            >
              ✦
            </motion.div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-serif">
              With a deep understanding of the data, <br className="sm:hidden" />
              the problem, and <i className="text-primary-400">the mission</i>,<br /> 
              each solution is designed with precision<br className="sm:hidden" /> 
              to drive <i className="text-primary-400">measurable success</i><br /> 
              and push the boundaries of technology<br className="sm:hidden" /> 
              toward <i className="text-primary-400">meaningful change</i>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="relative h-screen py-20 px-4 sm:px-6 lg:px-8 bg-dark-800 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-3xl font-bold text-center mb-6">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <Link href="/services" key={service.title} className="h-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-dark-700 p-4 rounded-lg hover:bg-dark-600 transition-colors duration-200 h-full flex flex-col"
                >
                  <h3 className="text-xl font-semibold mb-4 text-primary-400">{service.title}</h3>
                  <p className="text-dark-300 text-base flex-grow">{service.description}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="relative h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-3xl font-bold text-center mb-6">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredWork.map((work, index) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-800 p-6 rounded-lg h-full flex flex-col"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary-400">{work.title}</h3>
                <p className="text-dark-300 mb-4 flex-grow">{work.description}</p>
                <Link href={work.link} className="text-primary-400 hover:text-primary-300">
                  Learn more →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">

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
      </section>

    </main>
  )
}

const services = [
  {
    title: "Custom AI/ML Solution Development",
    description: "Build tailored machine and deep learning models to automate tasks, enhance products, and deliver interpretable, responsible AI."
  },
  {
    title: "Data Infrastructure & Pipeline Automation",
    description: "Design scalable pipelines for automated ingestion, cleaning, and transformation, making data reliable and ready to use."
  },
  {
    title: "LLM Fine-Tuning & AI Agent Design",
    description: "Develop custom language models and agents to retrieve, analyze, or generate content, with built-in safety and bias mitigation."
  },
  {
    title: "Signal & Time Series Analysis",
    description: "Extract insights from noisy or complex time-series data with accurate, transparent, and reproducible algorithms."
  },
  {
    title: "Cloud Deployment & API Integration",
    description: "Deploy models and dashboards to AWS or GCP with secure REST APIs for real-time insights and compliant data use."
  },
  {
    title: "Data-Driven Decision Support & Visualization",
    description: "Turn complex data into clear, visual insights that guide strategy across product, R&D, and operations."
  }
]

const featuredWork = [
  {
    title: "AI-Powered Healthcare Analytics",
    description: "Developed an AI system to improve patient care and reduce healthcare costs for a major hospital network.",
    link: "/portfolio/healthcare-analytics"
  },
  {
    title: "Climate Change Impact Analysis",
    description: "Created predictive models to assess and mitigate the impact of climate change on vulnerable communities.",
    link: "/portfolio/climate-change"
  }
] 