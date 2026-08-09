import React from 'react';

export default function HeroSection() {
  return (
    <section
      id="home"
      style={{
        paddingTop: '160px',
        paddingBottom: '90px',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Main Logo Container (Wrapped in h1 for SEO, responsive width) */}
        <h1
          className="animate-load-slide-up delay-1"
          style={{ margin: '0 auto 24px auto', display: 'inline-block', width: '100%', maxWidth: '380px' }}
        >
          <img
            src="/assets/pocket arcade studios logo.png"
            alt="Pocket Arcade Studios"
            style={{
              position: 'relative',
              width: '100%',
              height: 'auto',
              aspectRatio: '1 / 1',
              objectFit: 'cover',
              zIndex: 1,
              display: 'block',
            }}
          />
        </h1>

        {/* Tagline */}
        <p
          className="animate-load-slide-up delay-2"
          style={{
            fontSize: '1.35rem',
            color: '#FFFFFF',
            fontWeight: 800,
            letterSpacing: '1px',
            maxWidth: '780px',
            margin: '0 auto 20px auto',
            textShadow: '0 4px 16px rgba(0, 0, 0, 0.6)',
          }}
        >
          Crafting High-Quality Casual & Retro Mini-Games for Mobile
        </p>

        <p
          className="animate-load-slide-up delay-3"
          style={{
            fontSize: '1.08rem',
            color: 'var(--text-muted)',
            maxWidth: '660px',
            margin: '0 auto 0 auto',
            lineHeight: 1.7,
          }}
        >
          Welcome to Pocket Arcade Studios. We build fast, casual mobile games engineered for instant puzzle action, brain training, and classic nostalgia.
        </p>
      </div>
    </section>
  );
}
