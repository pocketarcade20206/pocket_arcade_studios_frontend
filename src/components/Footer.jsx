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




        <p style={{ margin: 0, fontSize: '0.85rem', color: '#FFFFFF' }}>
          &copy; 2026 <strong style={{ color: '#FFFFFF' }}>Pocket Arcade Studios</strong>. All Rights Reserved. Built with passion for mobile arcade gamers.
        </p>
      </div>
    </footer>
  );
}
