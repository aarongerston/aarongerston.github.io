import IntroAnimation from '@/components/IntroAnimation'

export default function Home() {
  return (
    <>
    <IntroAnimation />
    <main className="ag-page">

      {/* ── Hero ──────────────────────────────────── */}
      <section className="ag-hero">
        <div className="ag-hero__inner">
          <div className="ag-hero__grid">

            <div>
              <span className="ag-hero__eyebrow">AI Engineer &amp; Data Scientist · Valencia, Spain</span>
              <h1 className="ag-hero__h1">
                Custom AI & data solutions{' '}
                for <em>any problem.</em>
              </h1>
              <p className="ag-hero__subhead">
                Seven years building high-stakes data and AI infrastructure: from medical devices and
                neurophysiology research to enterprise AI and peace technology.
              </p>
              <div className="ag-hero__buttons">
                <a href="#work" className="ag-btn-primary">Selected work</a>
                <a
                  href="https://www.amaniintelligence.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ag-btn-ghost"
                >
                  Amani Intelligence ↗
                </a>
              </div>
            </div>

            <div className="ag-hero__stats">
              <div className="ag-stat">
                <span className="ag-stat__number">7+</span>
                <span className="ag-stat__label">years of experience</span>
              </div>
              <div className="ag-stat">
                <span className="ag-stat__number">5</span>
                <span className="ag-stat__label">peer-reviewed publications</span>
              </div>
              <div className="ag-stat">
                <span className="ag-stat__number">$16M+</span>
                <span className="ag-stat__label">projected impact</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── About ─────────────────────────────────── */}
      <section id="about" className="ag-section">
        <div className="ag-section__inner">
          <span className="ag-label">About</span>
          <div className="ag-about__grid">

            <div>
              <h2 className="ag-about__h2">Data scientist. Engineer. Builder.</h2>
              <p className="ag-about__para">
                I design and engineer data systems, ML models, and AI infrastructure for organizations
                doing consequential work, the kind where getting it wrong has real costs.
              </p>
              <p className="ag-about__para">
                My background spans neurophysiology research, medtech product development, and enterprise
                AI consulting. That breadth isn&apos;t accidental: the hardest problems rarely sit neatly
                inside one discipline.
              </p>
              <p className="ag-about__para">
                Today, that expertise flows primarily into Amani Intelligence, where I apply the same
                technical standards that powered rigorous medical research to peace technology and
                social impact.
              </p>
            </div>

            <aside className="ag-about__aside">
              <div className="ag-aside-item">
                <span className="ag-aside-label">Current Focus</span>
                <p className="ag-aside-value">
                  Founder,{' '}
                  <a href="https://www.amaniintelligence.com" target="_blank" rel="noopener noreferrer">
                    Amani Intelligence
                  </a>
                  {' '}· AI &amp; data for peace tech
                </p>
              </div>
              <div className="ag-aside-item">
                <span className="ag-aside-label">Background</span>
                <p className="ag-aside-value">Medtech · Neurophysiology · Enterprise AI · Research</p>
              </div>
              <div className="ag-aside-item">
                <span className="ag-aside-label">Education</span>
                <p className="ag-aside-value">MSc. Biomedical Engineering · Technical University of Denmark</p>
              </div>
              <div className="ag-aside-item">
                <span className="ag-aside-label">Based in</span>
                <p className="ag-aside-value">Valencia, Spain</p>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* ── Current Work (Amani) ──────────────────── */}
      <section className="ag-section">
        <div className="ag-section__inner">
          <span className="ag-label">Current Work</span>
          <div className="ag-amani-card">
            <span className="ag-amani-card__eyebrow">Boutique AI Consultancy</span>
            <h2 className="ag-amani-card__h2">
              Engineering Peace through{' '}
              <em>Human-Centric AI.</em>
            </h2>
            <p className="ag-amani-card__para">
              Amani Intelligence serves NGOs, peace tech organizations, and social impact teams,
              providing the technical scaffolding to scale their missions with clarity and precision.
            </p>
            <div className="ag-amani-card__buttons">
              <a
                href="https://www.amaniintelligence.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ag-btn-primary"
              >
                Visit Amani Intelligence ↗
              </a>
              <a
                href="https://calendly.com/amaniintelligence/discovery"
                target="_blank"
                rel="noopener noreferrer"
                className="ag-btn-ghost-amani"
              >
                Book a discovery call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Selected Work ─────────────────────────── */}
      <section id="work" className="ag-section">
        <div className="ag-section__inner">
          <span className="ag-label">Selected Work</span>

          <div className="ag-work-item">
            <div>
              <span className="ag-work-item__client">Converge Digital</span>
              <h3 className="ag-work-item__title">AI Strategy &amp; Custom Solution Development</h3>
              <p className="ag-work-item__desc">
                AI strategy and custom solution development for a multinational digital advertising
                company: building and iterating on ML-powered content moderation and audience
                intelligence systems, and advising on long-term AI roadmap and architecture.
              </p>
            </div>
            <div className="ag-work-item__meta">
              <div className="ag-work-item__tags">
                <span className="ag-work-item__tag">AI Strategy</span>
                <span className="ag-work-item__tag">Ad Tech</span>
                <span className="ag-work-item__tag">ML</span>
              </div>
            </div>
          </div>

          <div className="ag-work-item">
            <div>
              <span className="ag-work-item__client">X-trodes, Ltd.</span>
              <h3 className="ag-work-item__title">
                ML &amp; Signal Processing for Novel Wearable Neurotechnology
              </h3>
              <p className="ag-work-item__desc">
                As data scientist and team lead, I built the analytical foundation
                for X-trodes&apos; wearable biopotential sensor platform: from automated sleep-staging
                algorithms and REM sleep disorder detection to a Python SDK enabling real-time
                electrophysiological research. Oversaw a team of three, co-authored 2 peer-reviewed
                publications, secured a pending US patent for novel electrophysiological classification
                algorithms, and contributed to $16M+ in projected revenue impact.
              </p>
            </div>
            <div className="ag-work-item__meta">
              <div className="ag-work-item__tags">
                <span className="ag-work-item__tag">Signal Processing</span>
                <span className="ag-work-item__tag">Medtech</span>
                <span className="ag-work-item__tag">ML</span>
                <span className="ag-work-item__tag">Research</span>
              </div>
            </div>
          </div>

          {/*<div className="ag-work-item">*/}
          {/*  <div>*/}
          {/*    <span className="ag-work-item__client">Eriksholm Research Centre (Oticon A/S)</span>*/}
          {/*    <h3 className="ag-work-item__title">Objective Measurement of Listening Effort</h3>*/}
          {/*    <p className="ag-work-item__desc">*/}
          {/*      Research engineering at Oticon&apos;s dedicated R&amp;D centre in Copenhagen, investigating*/}
          {/*      objective markers of listening effort to advance hearing aid technology. Designed*/}
          {/*      controlled pupillometry experiments, applied statistical signal analysis on eye-tracking*/}
          {/*      recordings, and presented findings internally and at external venues.*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*  <div className="ag-work-item__meta">*/}
          {/*    <span className="ag-work-item__period">2018–2019</span>*/}
          {/*    <span className="ag-work-item__tag">Signal Analysis</span>*/}
          {/*    <span className="ag-work-item__tag">Hearing Research</span>*/}
          {/*  </div>*/}
          {/*</div>*/}

          <div className="ag-work-item">
            <div>
              <span className="ag-work-item__client">Other Recent Clients &amp; Projects</span>
              <h3 className="ag-work-item__title">Enterprise AI &amp; NLP Engineering</h3>
              <p className="ag-work-item__desc">
                Custom AI and data solutions across a range of clients and domains, including a
                full-stack enterprise RAG system with custom parsing, indexing, and retrieval
                pipelines; multi-stage LLM pipelines for document processing and information
                extraction; and a novel NLP tool to identify, quantify, and classify news events
                at scale.
              </p>
            </div>
            <div className="ag-work-item__meta">
              <div className="ag-work-item__tags">
                <span className="ag-work-item__tag">LLMs</span>
                <span className="ag-work-item__tag">RAG</span>
                <span className="ag-work-item__tag">NLP</span>
                <span className="ag-work-item__tag">Dashboards</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Connect ───────────────────────────────── */}
      <section id="connect" className="ag-section ag-section--no-border">
        <div className="ag-section__inner">
          <span className="ag-label">Connect</span>
          <div className="ag-connect__grid">

            <div>
              <h2 className="ag-connect__h2">Let&apos;s work together.</h2>
              <p className="ag-connect__para">
                I work with a small number of organizations at a time. If you&apos;re building something
                consequential and need technical depth to match, I&apos;d like to hear about it.
              </p>
              <a href="mailto:aarongerston@gmail.com" className="ag-btn-primary">
                Send a message
              </a>
            </div>

            <div>
              <span className="ag-label">Find me online</span>
              <div className="ag-social-row">
                <a href="https://linkedin.com/in/aarongerston" target="_blank" rel="noopener noreferrer">
                  <span>LinkedIn</span>
                  <span>↗</span>
                </a>
              </div>
              <div className="ag-social-row">
                <a href="https://github.com/aarongerston" target="_blank" rel="noopener noreferrer">
                  <span>GitHub</span>
                  <span>↗</span>
                </a>
              </div>
              <div className="ag-social-row">
                <a href="https://www.amaniintelligence.com" target="_blank" rel="noopener noreferrer">
                  <span>Amani Intelligence</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────── */}
      <footer className="ag-footer">
        <div className="ag-footer__inner">
          <span className="ag-footer__copy">© 2025 Aaron Gerston · Valencia, Spain</span>
          <a
            href="https://www.amaniintelligence.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ag-footer__link"
          >
            Amani Intelligence ↗
          </a>
        </div>
      </footer>

    </main>
    </>
  )
}
