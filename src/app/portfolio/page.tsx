'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { projects } from '@/data/projects'

const clients = [
  {
    name: "Oticon",
    logo: "/assets/clients/oticon.svg",
    link: "https://www.oticon.com/"
  },
  {
    name: "Tel Aviv University",
    logo: "/assets/clients/tau.png",
    link: "https://www.yaelhanein.sites.tau.ac.il/"
  },
  {
    name: "X-trodes",
    logo: "/assets/clients/xtrodes.svg",
    link: "https://xtrodes.com/"
  }
]

export default function Portfolio() {
  return (
    <main className="min-h-screen pt-16 pb-16 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          {/* <h1 className="text-4xl font-bold text-primary-400 mb-4">Portfolio</h1> */}
        </motion.div>

        {/* Featured Projects */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-4">Featured Projects:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-800 p-3 sm:p-6 rounded-lg"
              >
                <div className="relative w-full mb-2">
                  {project.useIframe ? (
                    <div className="relative w-full h-[300px]">
                      <iframe
                        src={project.iframeSrc}
                        className="w-full h-full rounded-lg bg-dark-600"
                        title={`${project.title} Interactive View`}
                        sandbox="allow-scripts allow-same-origin"
                      />
                    </div>
                  ) : project.image ? (
                    <div className="relative w-full flex justify-center items-center">
                      <div className="relative w-full pb-[50%] rounded-lg overflow-hidden">
                        <div className="absolute inset-0 flex justify-center items-center">
                          <div className="relative h-full max-w-[500px] max-h-[450px]">
                            <img
                              src={project.image}
                              alt={project.title}
                              width="500"
                              height="450"
                              className="h-full w-auto rounded-lg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary-400">{project.title}</h3>
                <p className="text-dark-300 mb-4">{project.description}</p>
                {project.link ? (
                  <Link 
                    href={project.link} 
                    className="text-primary-400 hover:text-primary-300"
                    target={project.external ? "_blank" : undefined}
                    rel={project.external ? "noopener noreferrer" : undefined}
                  >
                    Check it out →
                  </Link>
                ) : null}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Previous Clients */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-6">Previously worked with...</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-800 p-3 sm:p-6 rounded-lg flex items-center justify-center"
              >
                <Link
                  href={client.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative w-full flex items-center justify-center ${
                    client.name === "Tel Aviv University" ? "h-24" : "h-20"
                  }`}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className={`object-contain invert h-full p-2`}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
} 