import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Games', href: '#games' },
    { name: 'About Studio', href: '#about' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '3px solid rgba(148, 163, 184, 0.2)',
        boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.4)' : 'none',
      }}
    >
      <div
        style={{
          width: '100%',
          padding: '16px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
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
            src="/assets/game_app_icon.png"
            alt="Pocket Arcade Studios"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '11px',
              border: '2px solid var(--accent)',
              boxShadow: '0 0 14px rgba(251, 191, 36, 0.4)',
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
              style={{
                fontSize: '0.65rem',
                fontWeight: 800,
                letterSpacing: '2.5px',
                color: 'var(--text-muted)',
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
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: '#E2E8F0',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.9rem',
                letterSpacing: '0.5px',
                padding: '8px 18px',
                borderRadius: '30px',
                transition: 'all 0.25s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = 'var(--accent)';
                e.currentTarget.style.background = 'rgba(251, 191, 36, 0.12)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = '#E2E8F0';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <div style={{ display: 'flex', alignItems: 'center' }} className="mobile-toggle-group">
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
            background: 'rgba(15, 23, 42, 0.98)',
            backdropFilter: 'blur(20px)',
            padding: '16px 24px',
            borderBottom: '2px solid var(--accent)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            animation: 'fadeInModal 0.2s ease-out',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: '#E2E8F0',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '1rem',
                padding: '10px 12px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'background 0.2s ease',
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(251, 191, 36, 0.1)')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              {link.name}
              <Sparkles size={14} color="var(--accent)" />
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 993px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle-group { display: none !important; }
        }
      `}</style>
    </header>
  );
}
