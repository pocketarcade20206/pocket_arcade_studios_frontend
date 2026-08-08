import React from 'react';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'transparent',
        borderTop: 'none',
        padding: '44px 0 32px 0',
        color: 'var(--text-muted)',
        fontSize: '0.92rem',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          textAlign: 'center',
        }}
      >
        {/* Brand Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img
            src="/assets/game_app_icon.png"
            alt="Pocket Arcade Studios"
            style={{ width: '36px', height: '36px', borderRadius: '10px', border: '2px solid var(--accent)' }}
          />
          <span className="font-heading gold-gradient-text" style={{ fontSize: '1.2rem', fontWeight: 900 }}>
            POCKET ARCADE STUDIOS
          </span>
        </div>



        <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-dim)' }}>
          &copy; 2026 <strong>Pocket Arcade Studios</strong>. All Rights Reserved. Built with passion for mobile arcade gamers.
        </p>
      </div>
    </footer>
  );
}
