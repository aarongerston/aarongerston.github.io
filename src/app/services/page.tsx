'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    title: "Custom AI/ML Solution Development",
    description: "Design and implement tailored machine learning and deep learning models that fit your specific data and business needs, from automating internal processes to enhancing product intelligence and ensuring models are robust, interpretable, and aligned with responsible AI principles.",
    icon: "🤖"
  },
  {
    title: "Data Infrastructure & Pipeline Automation",
    description: "Architecture and deployment of scalable data pipelines that automate data ingestion, cleaning, and transformation, ensuring that your data is ready, reliable, and actionable when you need it.",
    icon: "⚡"
  },
  {
    title: "LLM Fine-Tuning & AI Agent Design",
    description: "Create, fine-tune, and deploy domain-specific language models and intelligent agents that retrieve, analyze, or generate content, with guardrails for ethical use, bias mitigation, and user safety.",
    icon: "🧠"
  },
  {
    title: "Signal & Time Series Analysis",
    description: "Develop advanced algorithms to extract actionable insights and underlying patterns from noisy, complex, or multimodal time-series data, with attention to accuracy, transparency, and reproducibility.",
    icon: "📈"
  },
  {
    title: "Cloud Deployment & API Integration",
    description: "Deploy models and data applications to cloud platforms like AWS and Google Cloud with REST APIs and interactive dashboards for real-time engagement, insights, and client-facing tools, ensuring data privacy and compliance standards are met.",
    icon: "☁️"
  },
  {
    title: "Data-Driven Decision Support & Visualization",
    description: "Transform complex raw datasets into clear, compelling narratives, dashboards, and insights that drive strategic decisions across R&D, product, and operations.",
    icon: "📊"
  }
]

export default function Services() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-4xl font-bold text-primary-400 mb-4">Services</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-800 p-6 rounded-lg flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-primary-400">{service.title}</h3>
              <p className="text-dark-300">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            href="/contact"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Contact
          </Link>
        </motion.div>
      </div>
    </main>
  )
} 