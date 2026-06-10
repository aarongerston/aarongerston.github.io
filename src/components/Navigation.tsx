'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header className="ag-nav">
        <div className="ag-nav__inner">
          <Link href="/" className="ag-nav__logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo/AaronGerstonData&AIConsulting_blacktransparent_1200x630.png"
              alt="Aaron Gerston"
            />
          </Link>
          <div className="ag-nav__right">
            <a href="#about" className="ag-nav__link">About</a>
            <a href="#work" className="ag-nav__link">Work</a>
            <a href="#connect" className="ag-nav__link" id="nav-connect-link">Connect</a>
            <a
              href="https://www.amaniintelligence.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ag-btn-cta"
            >
              Amani Intelligence ↗
            </a>
            <button
              id="nav-hamburger"
              className="ag-mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? (
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="ag-mobile-menu">
          <a href="#about" className="ag-mobile-menu__link" onClick={() => setMobileOpen(false)}>About</a>
          <a href="#work" className="ag-mobile-menu__link" onClick={() => setMobileOpen(false)}>Work</a>
          <a href="#connect" className="ag-mobile-menu__link" onClick={() => setMobileOpen(false)}>Connect</a>
          <div style={{ marginTop: 16 }}>
            <a
              href="https://www.amaniintelligence.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ag-btn-cta"
              onClick={() => setMobileOpen(false)}
            >
              Amani Intelligence ↗
            </a>
          </div>
        </div>
      )}
    </>
  )
}
