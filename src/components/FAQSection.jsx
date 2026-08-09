import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/soundEffects';
import useScrollReveal from '../utils/useScrollReveal';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [titleRef, isTitleRevealed] = useScrollReveal();
  const [accordionRef, isAccordionRevealed] = useScrollReveal();

  const faqs = [
    {
      q: 'Is Pocket Arcade 100% free to download and play?',
      a: 'Yes! Pocket Arcade is 100% free to download. All 4 included mini-games (Sudoku, 2048, Memory Match, Tic Tac Toe) are free to play anytime.',
    },
    {
      q: 'Does Pocket Arcade collect or track my physical hardware ID?',
      a: 'No! We maintain a strict zero hardware identifier policy. We do NOT access, track, or transmit your device IMEI, Android ID, MAC address, or hardware serial numbers.',
    },
    {
      q: 'Which games are currently included in the Pocket Arcade app?',
      a: 'The flagship bundle includes 4 classic games: Sudoku Classic (Logic), 2048 Rush (Tile Merger), Memory Match (Brain Training), and Tic Tac Toe Neo (Arcade Strategy with Smart AI).',
    },
    {
      q: 'Are there any forced paywalls or mandatory user sign-ups?',
      a: 'Never. You do not need to register an account or pay to play any level or game mode inside Pocket Arcade.',
    },
    {
      q: 'How can I submit player feedback or feature requests?',
      a: 'We love hearing from our community! You can reach our developer team directly via email at pocketarcade20206@gmail.com or through the contact form below.',
    },
  ];

  const toggleFAQ = (idx) => {
    playClickSound();
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq">
      <div className="container" style={{ maxWidth: '840px' }}>
        <div
          ref={titleRef}
          className={`reveal-slide-up ${isTitleRevealed ? 'revealed' : ''}`}
          style={{ textAlign: 'center', marginBottom: '40px' }}
        >
          <h2 className="section-title font-heading gold-gradient-text">
            Frequently Asked Questions
          </h2>

          <p className="section-subtitle">
            Everything you need to know about Pocket Arcade Studios games, performance, and privacy.
          </p>
        </div>

        {/* Accordion Container */}
        <div
          ref={accordionRef}
          className={`reveal-slide-up ${isAccordionRevealed ? 'revealed' : ''}`}
          style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card"
                onMouseEnter={playHoverSound}
                onClick={() => toggleFAQ(idx)}
                style={{
                  padding: '20px 24px',
                  cursor: 'pointer',
                  border: isOpen ? '3px solid var(--accent)' : '3px solid rgba(148, 163, 184, 0.2)',
                  background: isOpen
                    ? 'rgba(30, 58, 138, 0.3)'
                    : 'rgba(15, 23, 42, 0.65)',
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                  }}
                >
                  <h3
                    className="font-heading"
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 800,
                      color: isOpen ? 'var(--accent)' : '#FFF',
                      lineHeight: 1.3,
                    }}
                  >
                    {faq.q}
                  </h3>
                  <div style={{ color: isOpen ? 'var(--accent)' : 'var(--text-muted)' }}>
                    {isOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                  </div>
                </div>

                {isOpen && (
                  <p
                    style={{
                      marginTop: '12px',
                      paddingTop: '12px',
                      borderTop: '1px solid var(--border-color)',
                      color: '#E2E8F0',
                      fontSize: '0.96rem',
                      lineHeight: 1.65,
                    }}
                  >
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
