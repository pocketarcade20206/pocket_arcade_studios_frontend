import React from 'react';
import { Rocket, CheckCircle2, Clock, Sparkles, Trophy } from 'lucide-react';
import { playHoverSound } from '../utils/soundEffects';

export default function RoadmapSection() {
  const milestones = [
    {
      phase: 'v1.0 - RELEASED',
      title: 'Pocket Arcade Launch',
      status: 'Completed',
      desc: 'Launched Pocket Arcade flagship mobile app featuring Sudoku, 2048, Memory Match, and Tic Tac Toe.',
      icon: <CheckCircle2 size={20} color="#10B981" />,
      active: true,
    },
    {
      phase: 'v1.5 - CURRENT',
      title: 'Neon Themes & Audio Engine',
      status: 'In Progress',
      desc: 'Adding custom neon visual themes, sound FX engine, responsive UI enhancements, and difficulty scaling.',
      icon: <Sparkles size={20} color="var(--accent)" />,
      active: true,
    },
    {
      phase: 'v2.0 - UPCOMING',
      title: 'New Mini-Game Expansion',
      status: 'In Development',
      desc: 'Developing 2 new retro mini-game titles (Block Puzzle & Solitaire) to expand the 4-in-1 app into a 6-in-1 arcade.',
      icon: <Clock size={20} color="var(--cyan-accent)" />,
      active: false,
    },
    {
      phase: 'v2.5 - FUTURE VISION',
      title: 'Global High Scores',
      status: 'Planned',
      desc: 'Optional opt-in global leaderboards & achievement badges for competitive arcade players.',
      icon: <Trophy size={20} color="var(--text-muted)" />,
      active: false,
    },
  ];

  return (
    <section id="roadmap">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-badge">
            <Rocket size={16} /> STUDIO ROADMAP
          </div>

          <h2 className="section-title font-heading gold-gradient-text">
            Development Timeline
          </h2>

          <p className="section-subtitle">
            See what we have accomplished and what exciting updates are coming next to Pocket Arcade Studios.
          </p>
        </div>

        {/* Timeline Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            position: 'relative',
          }}
        >
          {milestones.map((m, idx) => (
            <div
              key={m.phase}
              className="glass-card"
              onMouseEnter={playHoverSound}
              style={{
                border: m.active ? '1px solid var(--accent)' : '1px solid var(--border-color)',
                background: m.active
                  ? 'linear-gradient(145deg, rgba(30, 58, 138, 0.4) 0%, rgba(15, 23, 42, 0.8) 100%)'
                  : 'rgba(15, 23, 42, 0.6)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '12px',
                  }}
                >
                  <span
                    style={{
                      background: m.active ? 'rgba(251, 191, 36, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                      color: m.active ? 'var(--accent)' : 'var(--text-muted)',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                      fontWeight: 900,
                      letterSpacing: '1px',
                    }}
                  >
                    {m.phase}
                  </span>
                  {m.icon}
                </div>

                <h3
                  className="font-heading"
                  style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFF', marginBottom: '8px' }}
                >
                  {m.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {m.desc}
                </p>
              </div>

              <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--border-color)' }}>
                <span style={{ fontSize: '0.8rem', color: m.active ? 'var(--accent)' : 'var(--text-dim)', fontWeight: 700 }}>
                  Status: {m.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
