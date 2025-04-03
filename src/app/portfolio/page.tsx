'use client'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface Project {
  title: string;
  description: string;
  link: string;
  image?: string | StaticImageData;
  external?: boolean;
  useIframe?: boolean;
  iframeSrc?: string;
}

const projects: Project[] = [
  {
    title: "Israel-Palestine News Coverage",
    description: "We all know the tragic story and numbers behind the recent Israel-Hamas war. Or do we? This project scrapes the web for (literally millions of) English-language articles published globally, sifts through to find ones about Israel-Palestine, and uses NLP to reveal which sources are more likely to report on one 'side of the story' or the other. It's interactive and updated daily, check it out!",
    link: "https://isr-pal-article-counts.onrender.com",
    useIframe: true,
    iframeSrc: "https://isr-pal-article-counts.onrender.com",
    external: true
  },
  {
    title: "In the World",
    description: "Ever wondered what's going on in Belarus? Or Mozambique? How about current events in Taiwan? I like understanding the world. So I made a website to help us do just that. It's interactive, check it out!",
    link: "/in-the-world.html",
    useIframe: true,
    iframeSrc: "/in-the-world.html"
  },
  {
    title: "CovidStats",
    description: "In the early days of Covid-19, I became curious about how different countries were affected. So I found some statistics online and managed to answer a few questions. (The answers also raised a few more...)",
    link: "https://github.com/aarongerston/covidstats",
    image: "/assets/projects/covid.gif",
    external: true
  },
  {
    title: "AI-Powered Healthcare Analytics",
    description: "Developed an AI system to improve patient care and reduce healthcare costs for a major hospital network.",
    link: "/portfolio/healthcare-analytics",
    image: "/assets/projects/healthcare-analytics.svg"
  },
  {
    title: "Climate Change Impact Analysis",
    description: "Created predictive models to assess and mitigate the impact of climate change on vulnerable communities.",
    link: "/portfolio/climate-change",
    image: "/assets/projects/climate-change.svg"
  }
]

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
    <main className="min-h-screen pt-24 pb-16 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h1 className="text-4xl font-bold text-primary-400 mb-4">Portfolio</h1>
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
                    <iframe
                      src={project.iframeSrc}
                      className="w-full aspect-video rounded-lg"
                      title={`${project.title} Interactive View`}
                    />
                  ) : project.image ? (
                    <div className="relative w-full h-[250px]">
                      <div className="absolute inset-0 rounded-[5px] overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-contain"
                          unoptimized={typeof project.image === 'string' && project.image.endsWith('.gif')}
                        />
                      </div>
                    </div>
                  ) : null}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary-400">{project.title}</h3>
                <p className="text-dark-300 mb-4">{project.description}</p>
                <Link 
                  href={project.link} 
                  className="text-primary-400 hover:text-primary-300"
                  target={project.external ? "_blank" : undefined}
                  rel={project.external ? "noopener noreferrer" : undefined}
                >
                  {project.external ? "View Project →" : "Learn more →"}
                </Link>
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
                  className="relative h-20 w-full"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain invert"
                    priority={client.name === "Tel Aviv University"}
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