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
        {/* Main Logo Container */}
        <div style={{ marginBottom: '24px', display: 'inline-block', position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              inset: -10,
              borderRadius: '40px',
              background: 'radial-gradient(circle, rgba(251, 191, 36, 0.35) 0%, transparent 70%)',
              filter: 'blur(16px)',
              zIndex: 0,
            }}
          />
          <img
            src="/assets/game_app_icon.png"
            alt="Pocket Arcade Studios Logo"
            className="animate-app-icon"
            style={{
              position: 'relative',
              width: '140px',
              height: '140px',
              borderRadius: '34px',
              border: '4px solid var(--accent)',
              objectFit: 'cover',
              zIndex: 1,
            }}
          />
        </div>

        {/* Cinematic Main Title */}
        <h1
          className="font-heading gold-gradient-text"
          style={{
            fontSize: '3.4rem',
            fontWeight: 900,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '12px',
            lineHeight: 1.08,
          }}
        >
          POCKET ARCADE STUDIOS
        </h1>

        {/* Tagline */}
        <p
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
