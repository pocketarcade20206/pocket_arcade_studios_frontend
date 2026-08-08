import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, Briefcase, HelpCircle, Sparkles } from 'lucide-react';
import { playClickSound, playHoverSound, playWinSound } from '../utils/soundEffects';

export default function ContactSection() {
  const [inquiryType, setInquiryType] = useState('Player Support');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    { label: 'Player Support', icon: <HelpCircle size={16} /> },
    { label: 'Business & Publishing', icon: <Briefcase size={16} /> },
    { label: 'Game Feedback', icon: <MessageSquare size={16} /> },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    playWinSound();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact">
      <div className="container" style={{ maxWidth: '780px', textAlign: 'center' }}>
        <h2 className="section-title font-heading gold-gradient-text">
          Get in Touch
        </h2>

        <p className="section-subtitle">
          Have questions, publishing inquiries, or game feedback for Pocket Arcade Studios? Drop us a message.
        </p>

        <div className="glass-card" style={{ textAlign: 'left', padding: '36px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '36px 20px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(251, 191, 36, 0.15)',
                  border: '2px solid var(--accent)',
                  color: 'var(--accent)',
                  marginBottom: '16px',
                }}
              >
                <CheckCircle2 size={36} />
              </div>
              <h3 className="font-heading" style={{ fontSize: '1.6rem', color: '#FFF', marginBottom: '8px' }}>
                Message Transmitted!
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', maxWidth: '480px', margin: '0 auto' }}>
                Thank you for reaching out to <strong>Pocket Arcade Studios</strong>. Our team will review your message and respond shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Category Selector */}
              <div>
                <label style={{ display: 'block', color: 'var(--text-light)', fontWeight: 700, marginBottom: '8px', fontSize: '0.9rem' }}>
                  Inquiry Type:
                </label>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {categories.map((cat) => (
                    <button
                      type="button"
                      key={cat.label}
                      onClick={() => {
                        playClickSound();
                        setInquiryType(cat.label);
                      }}
                      onMouseEnter={playHoverSound}
                      style={{
                        background: inquiryType === cat.label ? 'rgba(251, 191, 36, 0.18)' : 'rgba(15, 23, 42, 0.8)',
                        border: inquiryType === cat.label ? '1px solid var(--accent)' : '1px solid var(--border-color)',
                        color: inquiryType === cat.label ? 'var(--accent)' : 'var(--text-muted)',
                        padding: '8px 14px',
                        borderRadius: '12px',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {cat.icon} {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', color: 'var(--text-light)', fontWeight: 600, marginBottom: '6px', fontSize: '0.9rem' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(15, 23, 42, 0.85)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '12px',
                      color: '#FFF',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', color: 'var(--text-light)', fontWeight: 600, marginBottom: '6px', fontSize: '0.9rem' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="pocketarcade20206@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(15, 23, 42, 0.85)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '12px',
                      color: '#FFF',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', color: 'var(--text-light)', fontWeight: 600, marginBottom: '6px', fontSize: '0.9rem' }}>
                  Message *
                </label>
                <textarea
                  required
                  rows="4"
                  placeholder="Describe your inquiry, suggestion, or player support request..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(15, 23, 42, 0.85)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '12px',
                    color: '#FFF',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button
                type="submit"
                onMouseEnter={playHoverSound}
                className="btn-primary"
                style={{ width: '100%', marginTop: '6px', fontSize: '1.02rem', padding: '14px 20px' }}
              >
                <Send size={18} /> Transmit Message
              </button>
            </form>
          )}

          <div
            style={{
              marginTop: '24px',
              paddingTop: '20px',
              borderTop: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Direct Studio Support Email:</span>
            <a
              href="mailto:pocketarcade20206@gmail.com"
              onClick={playClickSound}
              style={{
                color: 'var(--accent)',
                fontWeight: 800,
                fontSize: '0.98rem',
                textDecoration: 'none',
              }}
            >
              pocketarcade20206@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
