import React from 'react';
import { Target, Shield, Zap, Feather, CheckCircle } from 'lucide-react';
import { playHoverSound } from '../utils/soundEffects';
import useScrollReveal from '../utils/useScrollReveal';

export default function AboutSection() {
  const [headerRef, isHeaderRevealed] = useScrollReveal();
  const [profileRef, isProfileRevealed] = useScrollReveal();
  const [pillarsRef, isPillarsRevealed] = useScrollReveal();

  const pillars = [
    {
      icon: <Target size={28} color="var(--accent)" />,
      title: 'Instant Play',
      desc: 'Zero sign-ups or loading delays. Tap the app and start playing in under 2 seconds.',
    },
    {
      icon: <Shield size={28} color="var(--accent)" />,
      title: 'Privacy First',
      desc: 'Completely COPPA & GDPR compliant. We collect zero hardware IDs.',
    },
    {
      icon: <Zap size={28} color="var(--accent)" />,
      title: 'High FPS',
      desc: 'Silky smooth 60 FPS gameplay, optimized for devices of all specifications.',
    },
    {
      icon: <Feather size={28} color="var(--accent)" />,
      title: 'Optimized',
      desc: 'Lightweight build designed to conserve device battery and storage life.',
    },
  ];

  return (
    <section id="about" style={{ padding: '100px 0' }}>
      <div
        ref={headerRef}
        className={`container reveal-slide-up ${isHeaderRevealed ? 'revealed' : ''}`}
        style={{ textAlign: 'center', marginBottom: '48px' }}
      >
        <h2 className="section-title font-heading gold-gradient-text" style={{ margin: 0 }}>
          About Studio
        </h2>
      </div>

      <div 
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '48px',
          alignItems: 'start',
          textAlign: 'left'
        }}
      >
        {/* Left Column: Company Profile & Mission */}
        <div
          ref={profileRef}
          className={`reveal-slide-left ${isProfileRevealed ? 'revealed' : ''}`}
        >

          <h3 
            style={{ 
              fontSize: '1.25rem', 
              color: '#FFF', 
              fontWeight: 800, 
              marginBottom: '16px',
              lineHeight: 1.4 
            }}
          >
            Pioneering Pure, Safe, and High-Performance Mobile Arcade Games
          </h3>

          <p style={{ color: '#FFF', fontSize: '1rem', lineHeight: 1.7, marginBottom: '20px' }}>
            Pocket Arcade Studios is an independent game development studio dedicated to crafting clean, high-performance mobile titles. We believe players deserve instant access to puzzles, strategy, and nostalgic gameplay without the friction of mandatory registrations or invasive tracking.
          </p>

          <p style={{ color: '#FFF', fontSize: '1rem', lineHeight: 1.7, marginBottom: '28px' }}>
            Our custom-designed puzzle engines are built from the ground up to conserve device battery, load instantly, and remain completely family-friendly.
          </p>

          {/* Quick Studio Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <CheckCircle size={18} color="var(--accent)" style={{ flexShrink: 0 }} />
              <span style={{ color: '#FFF', fontWeight: 700, fontSize: '0.95rem' }}>4+ Classic Mini-Games Included</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <CheckCircle size={18} color="var(--accent)" style={{ flexShrink: 0 }} />
              <span style={{ color: '#FFF', fontWeight: 700, fontSize: '0.95rem' }}>COPPA & GDPR Privacy Guaranteed</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <CheckCircle size={18} color="var(--accent)" style={{ flexShrink: 0 }} />
              <span style={{ color: '#FFF', fontWeight: 700, fontSize: '0.95rem' }}>Custom Ultra-Lightweight Optimization</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <CheckCircle size={18} color="var(--accent)" style={{ flexShrink: 0 }} />
              <span style={{ color: '#FFF', fontWeight: 700, fontSize: '0.95rem' }}>No Forced Accounts or Registrations</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <CheckCircle size={18} color="var(--accent)" style={{ flexShrink: 0 }} />
              <span style={{ color: '#FFF', fontWeight: 700, fontSize: '0.95rem' }}>Zero Hardware Identifier Tracking</span>
            </div>
          </div>
        </div>

        {/* Right Column: 2x2 Core Pillars Grid */}
        <div
          ref={pillarsRef}
          className={`reveal-slide-right ${isPillarsRevealed ? 'revealed' : ''}`}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
          }}
        >
          {pillars.map((pil) => (
            <div
              key={pil.title}
              className="glass-card"
              onMouseEnter={playHoverSound}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    background: 'rgba(251, 191, 36, 0.12)',
                    border: '1px solid rgba(251, 191, 36, 0.3)',
                    width: '50px',
                    height: '50px',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                  }}
                >
                  {pil.icon}
                </div>
                <h4 className="font-heading" style={{ fontSize: '1.15rem', color: '#FFF', marginBottom: '8px', fontWeight: 800 }}>
                  {pil.title}
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                  {pil.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
