import React, { useEffect } from 'react';
import { X, ShieldCheck, Mail, CheckCircle } from 'lucide-react';
import { playClickSound, playModalSound } from '../utils/soundEffects';

export default function PrivacyPolicyModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      playModalSound();
    }
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={() => {
        playClickSound();
        onClose();
      }}
    >
      <div
        className="modal-content"
        style={{ maxWidth: '800px', padding: '36px 32px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-btn"
          onClick={() => {
            playClickSound();
            onClose();
          }}
          aria-label="Close modal"
        >
          <X size={22} />
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: 'rgba(251, 191, 36, 0.15)',
              border: '1px solid var(--accent)',
              color: 'var(--accent)',
              marginBottom: '12px',
            }}
          >
            <ShieldCheck size={32} />
          </div>

          <h2
            className="font-heading gold-gradient-text"
            style={{ fontSize: '2.2rem', fontWeight: 900, marginBottom: '4px' }}
          >
            Privacy Policy
          </h2>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>
            Pocket Arcade Studios • Effective Date: July 19, 2026
          </div>
        </div>

        {/* Modal Body / Scrollable Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            color: '#E2E8F0',
            fontSize: '0.98rem',
            lineHeight: 1.75,
          }}
        >
          <section>
            <h3 className="font-heading" style={{ fontSize: '1.2rem', color: 'var(--accent)', marginBottom: '8px' }}>
              1. Introduction
            </h3>
            <p>
              Welcome to <strong>Pocket Arcade Studios</strong> (referred to as "we", "us", or "our"). We are deeply committed to protecting player privacy. This Privacy Policy details how we collect, handle, and safeguard your data when playing our mobile mini-games, including Sudoku, Memory Match, Tic Tac Toe, and 2048.
            </p>
          </section>

          <section>
            <h3 className="font-heading" style={{ fontSize: '1.2rem', color: 'var(--accent)', marginBottom: '8px' }}>
              2. Information Collection & Use
            </h3>
            <p>
              We enforce a strict minimum data collection policy required solely to ensure game security, stability, and high score tracking:
            </p>
            <ul style={{ listStyle: 'none', paddingLeft: '4px', marginTop: '10px' }}>
              <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle size={18} color="var(--accent)" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span><strong>Randomly Generated User ID:</strong> A randomized, non-identifiable User ID is generated locally on device to store your high scores and game progress. It is never linked to your real-world identity.</span>
              </li>
              <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle size={18} color="var(--accent)" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span><strong>Device Metadata:</strong> Basic OS version and device model information used for performance optimization and crash reporting.</span>
              </li>
              <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle size={18} color="var(--accent)" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span><strong>Gameplay Statistics:</strong> Aggregated game start counters and score progression to balance game difficulty.</span>
              </li>
            </ul>

            <div
              style={{
                background: 'rgba(30, 58, 138, 0.4)',
                borderLeft: '4px solid var(--accent)',
                padding: '14px 18px',
                borderRadius: '0 12px 12px 0',
                marginTop: '14px',
              }}
            >
              <strong style={{ color: '#FFF' }}>Zero Hardware Identifier Guarantee:</strong> We do NOT collect, transmit, or access hardware serial numbers, IMEI numbers, or MAC addresses.
            </div>
          </section>

          <section>
            <h3 className="font-heading" style={{ fontSize: '1.2rem', color: 'var(--accent)', marginBottom: '8px' }}>
              3. Advertising Disclosures (Google AdMob)
            </h3>
            <p>
              To keep our mobile app free for everyone, we use Google AdMob to display contextual ads inside the mobile app. AdMob may process device advertising identifiers (such as Google Advertising ID) in accordance with Google's Privacy Policy.
            </p>
          </section>

          <section>
            <h3 className="font-heading" style={{ fontSize: '1.2rem', color: 'var(--accent)', marginBottom: '8px' }}>
              4. Children's Privacy (COPPA & GDPR Compliance)
            </h3>
            <p>
              Our casual mini-games are family-friendly. We comply with COPPA and GDPR guidelines by serving non-personalized, age-appropriate ads for younger audiences and avoiding any collection of personal identity details.
            </p>
          </section>

          <section>
            <h3 className="font-heading" style={{ fontSize: '1.2rem', color: 'var(--accent)', marginBottom: '8px' }}>
              5. Data Security
            </h3>
            <p>
              All network communications are encrypted end-to-end using standard <strong>HTTPS (SSL)</strong> protocols to protect transmission integrity.
            </p>
          </section>

          <section
            style={{
              paddingTop: '16px',
              borderTop: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div>
              <div style={{ color: 'var(--accent)', fontWeight: 800 }}>Questions regarding privacy?</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Contact Pocket Arcade Studios team</div>
            </div>

            <a
              href="mailto:pocketarcade20206@gmail.com"
              className="btn-primary"
              style={{ padding: '10px 20px', fontSize: '0.9rem' }}
            >
              <Mail size={16} /> pocketarcade20206@gmail.com
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
