import { StaticImageData } from 'next/image'

export interface Project {
  title: string;
  description: string;
  link?: string | null;
  image?: string | StaticImageData;
  external?: boolean;
  useIframe?: boolean;
  iframeSrc?: string;
  includeInHomePage?: boolean;
}

export const projects: Project[] = [
    {
      title: "In the World",
      description: "Ever wondered what's going on in Belarus? Or Mozambique? How about current events in Taiwan? I like understanding the world. So I made a website to help us do just that. It's interactive, check it out!",
      link: "/in-the-world",
      useIframe: true,
      iframeSrc: "/in-the-world.html",
    },
    {
      title: "Preemptive Network Outage Alert System",
      description: "Developed and deployed a novel AI system to predict upcoming network outages. It leverages Variational Autoencoders (VAE), an unsupervised anomaly detection technique, to detect potential downtimes based on recent network anomalies in the geographic area. The system is deployed as a FastAPI backend that serves real-time predictions.",
      link: "https://github.com/aarongerston/UptimeAI/",
      image: "/assets/projects/UptimeAI overview image.png",
      includeInHomePage: true
    },
    {
      title: "NVCMe: an online tool to help people communicate better",
      description: "NVCme is an AI-powered tool designed to help users communicate more effectively using the principles of Nonviolent Communication (NVC), as described by Marshall Rosenberg. Whether you're responding to a heated discussion, drafting a message to resolve a conflict, or simply aiming to express yourself with more empathy and clarity, NVCme can assist in structuring your text to foster constructive dialogue.",
      link: "https://nvcme.onrender.com",
      useIframe: false,
      image: "/assets/projects/nvcme.png",
      includeInHomePage: true,
    //   iframeSrc: "https://nvcme.onrender.com"
    },
    {
      title: "CovidStats",
      description: "In the early days of Covid-19, I became curious about how different countries were affected. So I found some statistics online and managed to answer a few questions. (The answers also raised a few more...)",
      link: "https://github.com/aarongerston/covidstats",
      image: "/assets/projects/covid.gif",
      external: true,
      includeInHomePage: true
    },
    {
      title: "Israel-Palestine News Coverage",
      description: "We all know the tragic story and numbers behind the recent Israel-Hamas war. Or do we? This project scrapes the web for (literally millions of) English-language articles published globally, sifts through to find ones about Israel-Palestine, and uses NLP to reveal which sources are more likely to report on one 'side of the story' or the other. It's interactive and updated daily, check it out!",
      link: null,
      useIframe: true,
      iframeSrc: "https://isr-pal-article-counts.onrender.com",
      external: true
    },
  ]
  