'use client'

import { useEffect } from 'react'

export default function IntroAnimation() {
  useEffect(() => {
    // Guard against React StrictMode double-invoke
    if (document.getElementById('intro-overlay')) return

    const main = document.querySelector<HTMLElement>('main.ag-page')
    if (!main) return

    if (sessionStorage.getItem('introPlayed')) {
      main.style.opacity = '1'
      main.style.pointerEvents = 'auto'
      return
    }

    sessionStorage.setItem('introPlayed', 'true')
    main.style.opacity = '0'
    main.style.pointerEvents = 'none'
    runIntro(main)
  }, [])

  return null
}

// ── Timing helpers ────────────────────────────────────────────────────────────

function wait(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// ── Style helper — avoids TypeScript CSSStyleDeclaration restriction ──────────

function css(el: HTMLElement, props: Record<string, string>) {
  for (const k in props) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(el.style as any)[k] = props[k]
  }
}

// ── Slide factory ─────────────────────────────────────────────────────────────

function makeSlide(
  parent: HTMLElement,
  fadeDur: number,
  opts: {
    lora: boolean
    size: string
    weight: string
    italic: boolean
    color: string
    lineHeight: string
  }
): HTMLParagraphElement {
  const p = document.createElement('p')
  css(p, {
    position: 'absolute',
    top: '40%',
    left: '0',
    right: '0',
    transform: 'translateY(-40%)',
    margin: '0',
    padding: '0',
    opacity: '0',
    transition: `opacity ${fadeDur}ms ease`,
    fontFamily: opts.lora
      ? 'var(--font-lora), Georgia, serif'
      : "var(--font-ibm), 'IBM Plex Sans', system-ui, sans-serif",
    fontSize: opts.size,
    fontWeight: opts.weight,
    fontStyle: opts.italic ? 'italic' : 'normal',
    color: opts.color,
    lineHeight: opts.lineHeight,
  })
  parent.appendChild(p)
  return p
}

// ── Main animation runner (pure vanilla JS) ───────────────────────────────────

function runIntro(main: HTMLElement): void {
  const FADE = 350
  const HOLD = 1000
  const mobile = window.innerWidth < 640

  // Hide navbar for the duration of the intro
  const nav = document.querySelector<HTMLElement>('header.ag-nav')
  if (nav) {
    nav.style.transition = 'opacity 0.5s ease'
    nav.style.opacity = '0'
    nav.style.pointerEvents = 'none'
  }

  // 1 ── Inject wave keyframe ───────────────────────────────────────────────
  const styleTag = document.createElement('style')
  styleTag.id = 'intro-css'
  styleTag.textContent = `
    @keyframes intro-wave {
      0%   { transform: rotate(0deg); }
      20%  { transform: rotate(-0.5deg); }
      50%  { transform: rotate(0.5deg); }
      75%  { transform: rotate(-0.3deg); }
      100% { transform: rotate(0deg); }
    }
    @keyframes intro-wave-mobile {
      0%   { transform: translateX(-50%) rotate(0deg); }
      20%  { transform: translateX(-50%) rotate(-0.5deg); }
      50%  { transform: translateX(-50%) rotate(0.5deg); }
      75%  { transform: translateX(-50%) rotate(-0.3deg); }
      100% { transform: translateX(-50%) rotate(0deg); }
    }
  `
  document.head.appendChild(styleTag)

  // 2 ── Build overlay ──────────────────────────────────────────────────────
  const overlay = document.createElement('div')
  overlay.id = 'intro-overlay'
  css(overlay, {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    zIndex: '50',
    background: '#ffffff',
    overflow: 'hidden',
  })

  // centered container — matches the page's 860px column so spacing feels consistent
  const container = document.createElement('div')
  css(container, {
    position: 'relative',
    maxWidth: '860px',
    width: '100%',
    height: '100%',
    margin: '0 auto',
  })

  // text column: left half inside the container (desktop) or top 40vh (mobile)
  // image is appended directly to container below — independent of this column
  const lcol = document.createElement('div')
  css(lcol, {
    position: 'absolute',
    top: '0',
    left: mobile ? '24px' : '48px',
    right: mobile ? '24px' : '60%',
    height: mobile ? '40vh' : '100%',
    textAlign: mobile ? 'center' : 'left',
  })

  container.appendChild(lcol)
  overlay.appendChild(container)
  document.body.appendChild(overlay)

  // 3 ── Slides ──────────────────────────────────────────────────────────────
  const s1 = makeSlide(lcol, FADE, { lora: true,  size: mobile ? '42px' : '52px', weight: '400', italic: true,  color: '#1a1814', lineHeight: '1.2'  })
  const s2 = makeSlide(lcol, FADE, { lora: true,  size: mobile ? '38px' : '48px', weight: '400', italic: true,  color: '#1a1814', lineHeight: '1.2'  })
  const s3 = makeSlide(lcol, FADE, { lora: false, size: mobile ? '26px' : '26px', weight: '300', italic: false, color: '#1a1814', lineHeight: '1.75' })
  // Slide 4: staged 3-part reveal — two lines that appear in sequence
  const s4 = document.createElement('div')
  css(s4, {
    position: 'absolute',
    top: '40%',
    left: '0',
    right: '0',
    transform: 'translateY(-40%)',
    margin: '0',
    padding: '0',
    fontFamily: "var(--font-ibm), 'IBM Plex Sans', system-ui, sans-serif",
    fontSize: mobile ? '24px' : '24px',
    fontWeight: '300',
    fontStyle: 'italic',
    color: '#aaa49a',
    lineHeight: '1.75',
  })
  lcol.appendChild(s4)

  const s4a = document.createElement('div')
  s4a.textContent = 'I also talk to my code.'
  css(s4a, { opacity: '0', transition: `opacity ${FADE}ms ease` })
  s4.appendChild(s4a)

  const s4b = document.createElement('div')
  css(s4b, { opacity: '0', transition: `opacity ${FADE}ms ease` })
  const s4yet = document.createElement('span')
  s4yet.textContent = ' Yet.'
  css(s4yet, { opacity: '0', transition: `opacity ${FADE}ms ease` })
  s4b.appendChild(document.createTextNode("It doesn't talk back."))
  s4b.appendChild(s4yet)
  s4.appendChild(s4b)

  const s5 = makeSlide(lcol, FADE, { lora: true,  size: mobile ? '20px' : '24px', weight: '400', italic: true,  color: '#1a1814', lineHeight: '1.2'  })

  s1.textContent = 'Hi'
  s2.textContent = "I'm Aaron."
  s3.textContent = 'I solve data problems and build robust, scalable AI solutions.'
  s5.innerHTML   = mobile
    ? 'Feel free to say hi<br><span style="font-size:22px;display:block;margin-top:8px;font-style:normal">↓</span>'
    : 'Feel free to say hi <span style="font-size:22px;vertical-align:middle">→</span>'

  // 4 ── Avatar ──────────────────────────────────────────────────────────────
  // Positioned absolutely in the overlay — independent of the text column so
  // its natural width never squishes the text layout.
  const avatar = document.createElement('img')
  avatar.src = '/assets/aaron-gerston-transparent.png'
  avatar.alt = 'Aaron Gerston'
  css(avatar, {
    position: 'absolute',
    bottom: '0',
    height: mobile ? '60vh' : '80vh',
    width: 'auto',
    maxWidth: 'none',
    objectFit: 'contain',
    opacity: '0',
    transition: `opacity ${FADE}ms ease`,
    transformOrigin: 'bottom center',
    display: 'block',
  })
  if (mobile) {
    css(avatar, { left: '50%', transform: 'translateX(-50%)' })
  } else {
    css(avatar, { right: '-100px' })
  }
  container.appendChild(avatar)

  // 5 ── Floating Connect button ─────────────────────────────────────────────
  const floatBtn = document.createElement('a')
  floatBtn.href        = '#connect'
  floatBtn.textContent = 'Connect'
  css(floatBtn, {
    position: 'fixed',
    zIndex: '101',
    background: '#93452a',
    color: '#ffffff',
    padding: '7px 18px',
    borderRadius: '3px',
    fontFamily: "var(--font-ibm), 'IBM Plex Sans', system-ui, sans-serif",
    fontSize: '12px',
    fontWeight: '500',
    textDecoration: 'none',
    opacity: '0',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    transition: `opacity ${FADE}ms ease`,
    cursor: 'pointer',
    lineHeight: '1.4',
  })
  document.body.appendChild(floatBtn)

  // ── fade helpers ──────────────────────────────────────────────────────────
  const show = (e: HTMLElement) => { e.style.opacity = '1' }
  const hide = (e: HTMLElement) => { e.style.opacity = '0' }

  function teardown() {
    overlay.remove()
    floatBtn.remove()
    styleTag.remove()
  }

  // 6 ── Sequence ────────────────────────────────────────────────────────────
  async function seq() {
    await wait(150)

    // ── Slide 1: "Hi" ────────────────────────
    show(s1)
    await wait(FADE + HOLD)
    hide(s1)
    await wait(FADE)

    // ── Slide 2: "I'm Aaron." + avatar wave ──
    show(s2)
    show(avatar)
    await wait(FADE + 300)          // fade completes (350ms) + wave delay (300ms)
    avatar.style.animation = mobile ? 'intro-wave-mobile 1s ease-in-out' : 'intro-wave 1s ease-in-out'
    await wait(HOLD - 300)          // remaining hold (2000 − 300 = 1700ms)
    hide(s2)
    await wait(FADE)
    avatar.style.animation = ''

    // ── Slide 3 ──────────────────────────────
    show(s3)
    await wait(FADE + HOLD*2)
    hide(s3)
    await wait(FADE)

    // ── Slide 4 (avatar still visible) ───────
    show(s4a)
    await wait(FADE + HOLD)       // line 1 holds
    show(s4b)                     // "It doesn't talk back." fades in
    await wait(FADE + HOLD)       // short beat after line 2
    show(s4yet)                   // "Yet." fades in on same line
    await wait(HOLD)
    hide(s4a)
    hide(s4b)
    hide(avatar)
    await wait(FADE)

    // ── Slide 5: "Feel free to say hi" + btn ─
    if (mobile) {
      css(floatBtn, {
        top:       'calc(40vh + 16px)',
        left:      '50%',
        transform: 'translateX(-50%)',
      })
    } else {
      const cr = container.getBoundingClientRect()
      const bw = floatBtn.offsetWidth  || 90
      const bh = floatBtn.offsetHeight || 32
      css(floatBtn, {
        top:  `${cr.top + cr.height * 0.4 - bh / 2}px`,
        left: `${cr.left + cr.width * 0.75 - bw / 2}px`,
      })
    }
    floatBtn.style.pointerEvents = 'auto'
    show(floatBtn)
    show(s5)
    await wait(FADE + HOLD)
    hide(s5)
    await wait(FADE)

    // ── Fly btn → nav link / hamburger ───────
    if (mobile) {
      const hamburger = document.getElementById('nav-hamburger')
      if (hamburger) {
        // Convert transform-based centering to pixel coords before animating
        const fr = floatBtn.getBoundingClientRect()
        floatBtn.style.transition = 'none'
        css(floatBtn, { top: `${fr.top}px`, left: `${fr.left}px`, transform: 'none' })
        void floatBtn.offsetHeight // force reflow
        const hr = hamburger.getBoundingClientRect()
        const bh = fr.height || 32
        floatBtn.style.transition = [
          `top       0.65s cubic-bezier(0.4,0,0.2,1)`,
          `left      0.65s cubic-bezier(0.4,0,0.2,1)`,
          `font-size 0.65s cubic-bezier(0.4,0,0.2,1)`,
          `padding   0.65s cubic-bezier(0.4,0,0.2,1)`,
          `opacity   ${FADE}ms ease`,
        ].join(', ')
        css(floatBtn, {
          top:      `${hr.top + (hr.height - bh) / 2}px`,
          left:     `${hr.left}px`,
          fontSize: '11.5px',
          padding:  '5px 12px',
        })
        await wait(650)
      }
    } else {
      const navLink = document.getElementById('nav-connect-link')
      if (navLink) {
        const nr = navLink.getBoundingClientRect()
        const bh = floatBtn.offsetHeight || 32
        floatBtn.style.transition = [
          `top      0.65s cubic-bezier(0.4,0,0.2,1)`,
          `left     0.65s cubic-bezier(0.4,0,0.2,1)`,
          `font-size 0.65s cubic-bezier(0.4,0,0.2,1)`,
          `padding  0.65s cubic-bezier(0.4,0,0.2,1)`,
          `opacity  ${FADE}ms ease`,
        ].join(', ')
        css(floatBtn, {
          top:      `${nr.top + (nr.height - bh) / 2}px`,
          left:     `${nr.left}px`,
          fontSize: '11.5px',
          padding:  '5px 12px',
        })
        await wait(650)
      }
    }

    // ── Reveal main site + nav ───────────────
    overlay.style.transition     = 'opacity 0.5s ease'
    overlay.style.opacity        = '0'
    floatBtn.style.transition    = 'opacity 0.5s ease'
    floatBtn.style.opacity       = '0'
    main.style.transition        = 'opacity 0.5s ease'
    main.style.opacity           = '1'
    main.style.pointerEvents     = 'auto'
    if (nav) {
      nav.style.opacity       = '1'
      nav.style.pointerEvents = 'auto'
    }

    await wait(500)
    teardown()
  }

  seq().catch(() => {
    // Fallback: if anything throws, just show the page
    main.style.opacity       = '1'
    main.style.pointerEvents = 'auto'
    if (nav) {
      nav.style.opacity       = '1'
      nav.style.pointerEvents = 'auto'
    }
    teardown()
  })
}
