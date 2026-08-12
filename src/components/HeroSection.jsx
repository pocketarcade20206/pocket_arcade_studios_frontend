import React, { useEffect, useRef } from 'react';
import { Gamepad2, Users, Sparkles, Heart, Zap, Rocket } from 'lucide-react';
import heroGraphics from '../assets/hero-graphics.png';

export default function HeroSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    const section = heroRef.current;
    if (!section) return;
    const timer = setTimeout(() => {
      section.classList.add('hero-entered');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      {/* === Background Effects === */}
      <div className="hero-bg-effects">
        <div className="hero-glow hero-glow-gold" />
        <div className="hero-glow hero-glow-cyan" />
        <div className="hero-glow hero-glow-purple" />
        <div className="hero-star hero-star-1" />
        <div className="hero-star hero-star-2" />
        <div className="hero-star hero-star-3" />
        <div className="hero-star hero-star-4" />
        <div className="hero-star hero-star-5" />
        <div className="hero-star hero-star-6" />
        <div className="hero-star hero-star-7" />
        <div className="hero-star hero-star-8" />
        <div className="hero-pixel-block hero-pb-1" />
        <div className="hero-pixel-block hero-pb-2" />
        <div className="hero-pixel-block hero-pb-3" />
        <div className="hero-pixel-block hero-pb-4" />
        <div className="hero-pixel-block hero-pb-5" />
      </div>

      <div className="hero-main-container">
        {/* ===== LEFT — Text Content ===== */}
        <div className="hero-content">
          {/* Welcome Badge */}
          <div className="hero-anim hero-anim-1">
            <span className="hero-welcome-badge">
              <Sparkles size={14} />
              WELCOME TO POCKET ARCADE STUDIOS
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-anim hero-anim-2 hero-headline">
            <span className="hero-headline-line1">SMALL GAMES.</span>
            <span className="hero-headline-line2">BIG FUN.</span>
          </h1>

          {/* Description */}
          <p className="hero-anim hero-anim-3 hero-description">
            We create simple, engaging and addictive games
            that you can play anytime, anywhere.
          </p>

          {/* Pick up · Play · Enjoy */}
          <div className="hero-anim hero-anim-3 hero-tagline">
            <span className="tagline-item">
              <Gamepad2 size={16} className="tagline-icon tagline-icon-gold" />
              <span className="tagline-text-gold">Pick up.</span>
            </span>
            <span className="tagline-item">
              <Zap size={16} className="tagline-icon tagline-icon-cyan" />
              <span className="tagline-text-cyan">Play.</span>
            </span>
            <span className="tagline-item">
              <Heart size={16} className="tagline-icon tagline-icon-red" />
              <span className="tagline-text-red">Enjoy.</span>
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="hero-anim hero-anim-4 hero-cta-group">
            <a href="#games" className="btn-primary hero-btn" id="hero-explore-btn">
              <Rocket size={16} />
              EXPLORE OUR GAME
            </a>
            <a href="#about" className="btn-secondary hero-btn" id="hero-about-btn">
              <Users size={18} />
              LEARN ABOUT US
            </a>
          </div>
        </div>

        {/* ===== RIGHT — Hero Video (GIF Animation) ===== */}
        <div className="hero-anim hero-anim-2 hero-image-area">
          <div className="hero-img-glow" />
          <img
            src={heroGraphics}
            alt="Pocket Arcade Studios — Arcade cabinet with game characters"

            // <video
            //   src={heroVideo}
            //   autoPlay
            //   loop
            //   muted
            //   playsInline
            className="hero-graphic"
          // style={{ display: 'block', outline: 'none', border: 'none' }}
          />
        </div>
      </div>

      <style>{`
        /* ─────────── SECTION ─────────── */
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 80px 0 20px 0;
          overflow: hidden;
        }

        /* ─────────── BACKGROUND EFFECTS ─────────── */
        .hero-bg-effects {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        .hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
        }
        .hero-glow-gold {
          width: 550px; height: 550px;
          background: radial-gradient(circle, rgba(251,191,36,0.10) 0%, transparent 70%);
          top: -10%; left: -8%;
        }
        .hero-glow-cyan {
          width: 450px; height: 450px;
          background: radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%);
          bottom: -15%; right: -5%;
        }
        .hero-glow-purple {
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%);
          top: 30%; right: 20%;
        }

        .hero-star {
          position: absolute;
          width: 3px; height: 3px;
          border-radius: 50%;
          background: #FBBF24;
          opacity: 0;
          animation: starTwinkle 3s ease-in-out infinite;
        }
        .hero-star-1 { top: 8%;  left: 12%; animation-delay: 0s; }
        .hero-star-2 { top: 15%; right: 18%; animation-delay: 0.7s; width: 2px; height: 2px; background: #38BDF8; }
        .hero-star-3 { top: 55%; left: 6%;  animation-delay: 1.4s; }
        .hero-star-4 { top: 70%; right: 10%; animation-delay: 2.1s; width: 2px; height: 2px; background: #A78BFA; }
        .hero-star-5 { top: 30%; left: 3%;  animation-delay: 0.3s; width: 2px; height: 2px; }
        .hero-star-6 { top: 85%; left: 25%; animation-delay: 1.0s; width: 2px; height: 2px; background: #38BDF8; }
        .hero-star-7 { top: 20%; right: 35%; animation-delay: 1.8s; }
        .hero-star-8 { top: 45%; right: 5%;  animation-delay: 0.5s; width: 2px; height: 2px; background: #A78BFA; }

        @keyframes starTwinkle {
          0%, 100% { opacity: 0; transform: scale(0.6); }
          50%      { opacity: 1; transform: scale(1.2); }
        }

        .hero-pixel-block {
          position: absolute;
          border-radius: 3px;
          opacity: 0.35;
        }
        .hero-pb-1 { width: 8px; height: 8px; background: #FBBF24; top: 18%; left: 8%; animation: pbFloat1 7s ease-in-out infinite; }
        .hero-pb-2 { width: 6px; height: 6px; background: #38BDF8; top: 65%; left: 4%; animation: pbFloat2 9s ease-in-out infinite; }
        .hero-pb-3 { width: 10px; height: 10px; background: #A78BFA; bottom: 20%; right: 6%; animation: pbFloat1 8s ease-in-out infinite 1s; }
        .hero-pb-4 { width: 5px; height: 5px; background: #F59E0B; top: 40%; left: 2%; animation: pbFloat2 6s ease-in-out infinite 0.5s; }
        .hero-pb-5 { width: 7px; height: 7px; background: #38BDF8; top: 12%; right: 12%; animation: pbFloat1 10s ease-in-out infinite 2s; }

        @keyframes pbFloat1 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(-18px) rotate(15deg); }
        }
        @keyframes pbFloat2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50%      { transform: translateY(-14px) translateX(8px); }
        }

        /* ─────────── HERO MAIN CONTAINER ─────────── */
        .hero-main-container {
          width: 94%;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 40px;
          z-index: 2;
          position: relative;
        }

        /* ─────────── LEFT: TEXT CONTENT ─────────── */
        .hero-content {
          flex: 1 1 50%;
          max-width: 600px;
          min-width: 0;
        }

        .hero-welcome-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(251,191,36,0.12);
          border: 1px solid rgba(251,191,36,0.35);
          color: var(--accent);
          padding: 7px 18px;
          border-radius: 50px;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .hero-headline {
          margin-bottom: 22px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 6px;
        }
        .hero-headline-line1 {
          display: block;
          font-family: var(--font-heading);
          font-size: clamp(2.2rem, 4.2vw, 3.4rem);
          font-weight: 800;
          color: #E2E8F0;
          letter-spacing: 3px;
          text-shadow: 0 4px 20px rgba(0,0,0,0.6);
          white-space: nowrap;
          text-transform: uppercase;
          line-height: 1.2;
        }
        .hero-headline-line2 {
          display: block;
          font-family: var(--font-heading);
          font-size: clamp(3.8rem, 7.5vw, 6.2rem);
          font-weight: 900;
          letter-spacing: 3px;
          background: linear-gradient(135deg, #FBBF24 0%, #ce732dff 50%, #ce732dff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 4px 16px rgba(217,119,6,0.35));
          white-space: nowrap;
          text-transform: uppercase;
          line-height: 1.1;
        }

        .hero-description {
          font-size: 1.18rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin-bottom: 14px;
          max-width: 520px;
        }

        /* Tagline — colorful text */
        .hero-tagline {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }
        .tagline-item {
          display: flex; align-items: center; gap: 5px;
          font-weight: 800; font-size: 1.05rem;
        }
        .tagline-icon-gold { color: var(--accent); }
        .tagline-icon-cyan { color: var(--cyan-accent); }
        .tagline-icon-red  { color: #EF4444; }
        .tagline-text-gold { color: var(--accent); }
        .tagline-text-cyan { color: var(--cyan-accent); }
        .tagline-text-red  { color: #EF4444; }

        /* CTAs */
        .hero-cta-group {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        .hero-btn {
          font-family: var(--font-heading);
          letter-spacing: 1.5px;
          font-size: 0.8rem;
          padding: 14px 28px;
        }

        /* ─────────── RIGHT: HERO GRAPHIC ─────────── */
        .hero-image-area {
          flex: 1 1 50%;
          max-width: 650px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          min-width: 0;
        }

        .hero-img-glow {
          position: absolute;
          width: 80%;
          height: 80%;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(
            ellipse at center,
            rgba(56,189,248,0.12) 0%,
            rgba(251,191,36,0.05) 45%,
            transparent 72%
          );
          filter: blur(50px);
          border-radius: 50%;
          z-index: 0;
          pointer-events: none;
        }

        .hero-graphic {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 560px;
          height: auto;
          object-fit: contain;
          animation: heroGraphicFloat 5s ease-in-out infinite;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.45))
                  drop-shadow(0 6px 14px rgba(56,189,248,0.10));
          will-change: transform;
        }

        @keyframes heroGraphicFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50%      { transform: translateY(-12px) scale(1.008); }
        }

        /* ═════════ ENTRANCE ANIMATIONS ═════════ */
        .hero-anim {
          opacity: 0;
          transform: translateY(28px);
        }
        .hero-entered .hero-anim {
          animation: heroSlideIn 0.85s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        .hero-entered .hero-anim-1 { animation-delay: 0.10s; }
        .hero-entered .hero-anim-2 { animation-delay: 0.22s; }
        .hero-entered .hero-anim-3 { animation-delay: 0.35s; }
        .hero-entered .hero-anim-4 { animation-delay: 0.48s; }

        .hero-entered .hero-image-area {
          animation: heroImgEntrance 1s cubic-bezier(0.16,1,0.3,1) forwards;
          animation-delay: 0.18s;
        }

        @keyframes heroSlideIn {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroImgEntrance {
          from { opacity: 0; transform: translateY(36px) scale(0.93); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }

        /* ═════════ RESPONSIVE ═════════ */

        /* Large desktops 1400px+ */
        @media (min-width: 1400px) {
          .hero-main-container { max-width: 1500px; }
          .hero-graphic { max-width: 640px; }
          .hero-headline-line1 { font-size: 3.8rem; }
          .hero-headline-line2 { font-size: 6.8rem; }
          .hero-description { font-size: 1.25rem; }
        }

        /* Small laptops / large tablets (≤ 1100px) */
        @media (max-width: 1100px) {
          .hero-graphic { max-width: 420px; }
          .hero-headline-line1 { font-size: 2.8rem; }
          .hero-headline-line2 { font-size: 5rem; }
          .hero-description { font-size: 1.05rem; }
        }

        /* Tablets (≤ 900px) — stack vertically */
        @media (max-width: 900px) {
          .hero-section { padding: 130px 0 20px 0; }
          .hero-main-container {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }
          .hero-content {
            flex: none;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            order: 2;
          }
          .hero-headline {
            align-items: center;
          }
          .hero-description { max-width: 500px; text-align: center; }
          .hero-tagline     { justify-content: center; }
          .hero-cta-group   { justify-content: center; }

          .hero-image-area {
            flex: none;
            width: 100%;
            justify-content: center;
            order: 1;
          }
          .hero-graphic { max-width: 380px; }

          .hero-headline-line1 { font-size: 2.2rem; white-space: normal; }
          .hero-headline-line2 { font-size: 3.8rem; white-space: normal; }
        }

        /* Large phones / small tablets (≤ 680px) */
        @media (max-width: 680px) {
          .hero-section { padding: 120px 0 16px 0; min-height: auto; }
          .hero-graphic { max-width: 300px; }

          .hero-headline-line1 { font-size: 1.9rem; }
          .hero-headline-line2 { font-size: 3.2rem; }
          .hero-description { font-size: 1rem; }

          .hero-pb-1, .hero-pb-2, .hero-pb-3,
          .hero-pb-4, .hero-pb-5 { display: none; }
        }

        /* Mobile phones (≤ 480px) */
        @media (max-width: 480px) {
          .hero-section { padding: 110px 0 12px 0; }
          .hero-graphic { max-width: 260px; }

          .hero-headline-line1 { font-size: 1.6rem; }
          .hero-headline-line2 { font-size: 2.7rem; }
          .hero-description { font-size: 0.92rem; }

          .hero-welcome-badge {
            font-size: 0.58rem; padding: 5px 12px;
            letter-spacing: 1.2px;
          }

          .hero-cta-group {
            flex-direction: column;
            width: 100%;
          }
          .hero-btn { width: 100%; justify-content: center; }

          .hero-tagline { gap: 12px; }
          .tagline-item { font-size: 0.88rem; }
        }

        /* Very small phones (≤ 360px) */
        @media (max-width: 360px) {
          .hero-headline-line1 { font-size: 1.55rem; }
          .hero-headline-line2 { font-size: 2rem; }
          .hero-graphic { max-width: 230px; }
        }
      `}</style>
    </section>
  );
}
