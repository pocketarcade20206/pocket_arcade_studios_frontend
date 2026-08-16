import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Sparkles, Gamepad2 } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Our Games', href: '#games', id: 'games' },
    { name: 'About Studio', href: '#about', id: 'about' },
    { name: 'FAQs', href: '#faq', id: 'faq' },
  ];

  // Scroll spy: detect which section is currently in view
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);

    const scrollY = window.scrollY + 120; // offset for navbar height
    const sections = navLinks.map((link) => {
      const el = document.getElementById(link.id);
      if (!el) return { id: link.id, top: 0, bottom: 0 };
      const rect = el.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      return { id: link.id, top, bottom: top + rect.height };
    });

    // Find the section that the scroll position is inside
    let current = 'home';
    for (const section of sections) {
      if (scrollY >= section.top) {
        current = section.id;
      }
    }

    // If scrolled to the very bottom, highlight the last section
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 50) {
      current = sections[sections.length - 1].id;
    }

    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
      }}
    >
      <div
        className="nav-container"
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(13, 27, 65, 0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), inset 0 -1px 0 rgba(255, 255, 255, 0.05)',
          borderBottom: '1px solid rgba(251, 191, 36, 0.25)',
          transition: 'all 0.3s ease',
        }}
      >
        {/* AAA Studio Brand Logo */}
        <a
          href="#home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
          }}
        >
          <img
            src="/assets/pocket arcade studios logo.png"
            alt="Pocket Arcade Studios"
            style={{
              width: '38px',
              height: '38px',
              objectFit: 'cover',
              display: 'block',
            }}
          />

          <div>
            <div
              className="font-heading gold-gradient-text"
              style={{
                fontSize: '1.15rem',
                fontWeight: 900,
                lineHeight: 1.1,
              }}
            >
              POCKET ARCADE
            </div>
            <div
              className="font-heading gold-gradient-text"
              style={{
                fontSize: '0.65rem',
                fontWeight: 800,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
              }}
            >
              STUDIOS
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div
          className="desktop-nav"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '8px',
            marginLeft: 'auto',
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className="nav-link-desktop"
                style={{
                  color: isActive ? 'var(--accent)' : '#E2E8F0',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  letterSpacing: '0.5px',
                  padding: '8px 18px',
                  borderRadius: '30px',
                  transition: 'all 0.25s ease',
                  background: isActive ? 'rgba(251, 191, 36, 0.1)' : 'transparent',
                }}
                onMouseOver={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'var(--accent)';
                    e.currentTarget.style.background = 'rgba(251, 191, 36, 0.08)';
                  }
                }}
                onMouseOut={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#E2E8F0';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Mobile: Toggle Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="mobile-toggle-group">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--accent)',
              cursor: 'pointer',
              padding: '6px',
              display: 'flex',
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(13, 27, 65, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            padding: '20px 24px',
            borderBottom: '3px solid var(--accent)',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
            animation: 'fadeInModal 0.25s ease-out',
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`mobile-nav-link ${isActive ? 'active' : ''}`}
              >
                {link.name}
                <Sparkles size={14} color={isActive ? 'var(--accent)' : 'rgba(251, 191, 36, 0.2)'} />
              </a>
            );
          })}
        </div>
      )}

      <style>{`
        .nav-container {
          padding: 16px 40px;
          transition: all 0.3s ease;
        }
        @media (max-width: 768px) {
          .nav-container {
            padding: 12px 20px;
          }
        }
        .mobile-nav-link {
          text-decoration: none;
          font-weight: 700;
          font-size: 1rem;
          padding: 12px 16px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.25s ease;
          border-left: 4px solid transparent;
          color: #E2E8F0;
          background: transparent;
        }
        .mobile-nav-link.active {
          color: var(--accent) !important;
          background: linear-gradient(90deg, rgba(251, 191, 36, 0.15) 0%, rgba(251, 191, 36, 0.02) 100%) !important;
          border-left-color: var(--accent) !important;
          padding-left: 22px !important;
        }
        @media (hover: hover) {
          .mobile-nav-link:hover {
            background: rgba(251, 191, 36, 0.08) !important;
            border-left-color: rgba(251, 191, 36, 0.4);
            color: #FFF;
          }
        }
        @media (min-width: 993px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle-group { display: none !important; }
        }
      `}</style>
    </header>
  );
}
