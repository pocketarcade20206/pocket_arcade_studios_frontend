import React, { useState } from 'react';
import { ExternalLink, Star, Trophy, CheckCircle2, ShieldCheck, Flame } from 'lucide-react';
import { playClickSound } from '../utils/soundEffects';
import useScrollReveal from '../utils/useScrollReveal';

export default function GamesSection() {
  const [activeTab, setActiveTab] = useState('2048');
  const [titleRef, isTitleRevealed] = useScrollReveal();
  const [cardRef, isCardRevealed] = useScrollReveal();

  const miniGames = [
    {
      id: '2048',
      title: '2048',
      badge: 'Tile Merger',
      rating: '4.8',
      shortDesc: 'Slide and merge matching number tiles to reach 2048 in Classic and Blitz timed modes.',
      longDesc: 'Experience the ultimate tile-merging challenge! Slide tiles smoothly across the grid to combine matching numbers and work your way up to the legendary 2048 tile. Test your quick-thinking skills in the timed Blitz mode, or enjoy a relaxed session in Classic mode. Equipped with powerups like Undo, Hammer, and Shuffle to help you beat your high scores.',
      features: ['Classic & Blitz Modes', 'Undo, Hammer & Shuffle Powerups', 'Touch Swipe Controls'],
      controls: 'Swipe Up/Down/Left/Right to slide and merge tiles.',
      banner: '/assets/2048_game_banner.png',
    },
    {
      id: 'tictactoe',
      title: 'Tic Tac Toe',
      badge: 'Arcade Strategy',
      rating: '4.9',
      shortDesc: 'Play Classic 3x3 or Mega 5x5 grids against smart AI robots or pass-and-play friends.',
      longDesc: 'The timeless strategy game of Xs and Os, completely reimagined with retro-modern neon visuals and animations. Challenge yourself against our intelligent AI robot in multiple difficulty levels, or enjoy classic local pass-and-play matches with your friends. Choose between the classic 3x3 grid or step up to the complex 5x5 grid for a deeper strategic battle.',
      features: ['Classic 3x3 & Mega 5x5 Grids', 'Smart AI Robot Opponent', 'Pass-and-Play Local 2P'],
      controls: 'Tap empty grid cells to place X or O markers.',
      banner: '/assets/tic_tac_toe_game_banner.png',
    },
    {
      id: 'sudoku',
      title: 'Sudoku',
      badge: 'Logic & Brain',
      rating: '4.9',
      shortDesc: 'Classic 9x9, 8x8 & 6x6 number grid puzzles with smart pencil notes & hint engine.',
      longDesc: 'Engage your mind with hand-crafted Sudoku grid puzzles designed for players of all skill levels. Challenge yourself across Easy, Medium, Hard, and Expert modes. Make use of the smart pencil-note engine to mark possibilities, toggle error-highlights, and track your solution speed with built-in timers. Perfect for daily brain workouts.',
      features: ['6x6, 8x8 & 9x9 Grid Sizes', 'Smart Notes & Hint Engine', 'Auto-Save & Stat History'],
      controls: 'Tap grid cell -> Input number 1-9. Toggle Pencil for notes.',
      banner: '/assets/sudoku_game_banner.png',
    },
    {
      id: 'memory',
      title: 'Memory Match',
      badge: 'Memory & Speed',
      rating: '4.9',
      shortDesc: 'Flip hidden cards to discover and match icon pairs across Cute Animals and Fruits sets.',
      longDesc: 'Enhance your focus, visual memory, and speed with our delightful card-matching game. Turn over cards to find matching pairs in as few moves as possible. Explore diverse card sets including cute hand-drawn animals and fresh fruits. Track your progress with move counters and speed timers to continuously beat your personal bests.',
      features: ['Animals & Fruits Themes', 'Level Progression System', 'Best Time & Move Counter'],
      controls: 'Tap face-down cards to flip and match pairs.',
      banner: '/assets/memory_match_game_banner.png',
    },
  ];

  const activeGameObj = miniGames.find((g) => g.id === activeTab) || miniGames[0];

  return (
    <section id="games">
      <div className="container">
        {/* Section Title */}
        <div
          ref={titleRef}
          className={`reveal-slide-up ${isTitleRevealed ? 'revealed' : ''}`}
          style={{ textAlign: 'center', marginBottom: '40px' }}
        >
          <h2 className="section-title font-heading gold-gradient-text">
            Our Games
          </h2>
          <p className="section-subtitle" style={{ marginBottom: '0' }}>
            Discover mobile games developed by <strong>Pocket Arcade Studios</strong>.
          </p>
        </div>

        {/* SINGLE PLAY STORE-STYLE PRODUCT CARD FOR POCKET ARCADE */}
        <div
          ref={cardRef}
          className={`static-card reveal-slide-up ${isCardRevealed ? 'revealed' : ''}`}
          style={{
            maxWidth: '1140px',
            margin: '0 auto',
            padding: '40px',
            background: 'rgba(15, 23, 42, 0.65)',
            border: '3px solid rgba(148, 163, 184, 0.2)',
            borderRadius: '28px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
        >
          {/* APP HEADER BAR (Google Play Store Header Style) */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '28px',
              paddingBottom: '32px',
              borderBottom: '1px solid var(--border-color)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
              <img
                src="/assets/game_app_icon.png"
                alt="Pocket Arcade Official App Icon"
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '26px',
                  border: '3px solid var(--accent)',
                  objectFit: 'cover',
                  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.6)',
                }}
              />
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span
                    style={{
                      background: 'rgba(251, 191, 36, 0.15)',
                      border: '1px solid var(--accent)',
                      color: 'var(--accent)',
                      padding: '4px 12px',
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                      fontWeight: 900,
                      letterSpacing: '1.2px',
                      textTransform: 'uppercase',
                    }}
                  >
                    MOBILE APP
                  </span>
                </div>

                <h3
                  className="font-heading"
                  style={{ fontSize: '2.6rem', fontWeight: 900, color: '#FFF', marginBottom: '0', lineHeight: 1.1 }}
                >
                  Pocket Arcade
                </h3>
              </div>
            </div>

            <a
              href="https://play.google.com/store/apps/details?id=com.pocketarcadestudios.pocketarcade"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '16px 36px', fontSize: '1.08rem' }}
            >
              <ExternalLink size={22} /> Get on Google Play
            </a>
          </div>

          {/* INCLUDED MINI-GAMES INTERACTIVE EXPLORER */}
          <div style={{ paddingTop: '32px' }}>
            <h4
              className="font-heading"
              style={{
                fontSize: '1.25rem',
                color: '#FFF',
                marginBottom: '16px',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Flame size={20} color="var(--accent)" /> INCLUDED MINI-GAMES
            </h4>

            {/* Game Selector Tabs */}
            <div
              style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
                marginBottom: '24px',
              }}
            >
              {miniGames.map((game) => (
                <button
                  key={game.id}
                  onClick={() => {
                    playClickSound();
                    setActiveTab(game.id);
                  }}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '14px',
                    border: activeTab === game.id ? '2px solid var(--accent)' : '1px solid var(--border-color)',
                    background: activeTab === game.id ? 'rgba(251, 191, 36, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                    color: activeTab === game.id ? 'var(--accent)' : '#E2E8F0',
                    fontWeight: 800,
                    fontSize: '0.92rem',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                >
                  {game.title}
                </button>
              ))}
            </div>

            {/* Active Game Spotlight Detail Section */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '32px',
                marginTop: '16px',
                paddingTop: '0',
              }}
            >
              <div style={{ flex: '1 1 300px' }}>
                <h4
                  className="font-heading"
                  style={{ fontSize: '1.8rem', fontWeight: 900, color: '#FFF', marginBottom: '10px' }}
                >
                  {activeGameObj.title}
                </h4>

                <p style={{ color: 'var(--text-light)', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '18px' }}>
                  {activeGameObj.longDesc}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '0' }}>
                  {activeGameObj.features.map((feat, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FFF', fontSize: '0.9rem', fontWeight: 600 }}>
                      <CheckCircle2 size={16} color="var(--accent)" /> {feat}
                    </div>
                  ))}
                </div>
              </div>

              {/* Game Spotlight Banner Only (Perfect Square) */}
              <div
                style={{
                  width: '240px',
                  height: '240px',
                  flexShrink: 0,
                  borderRadius: '18px',
                  overflow: 'hidden',
                  border: '1px solid var(--border-color)',
                  boxShadow: '0 16px 36px rgba(0, 0, 0, 0.5)',
                }}
              >
                <img
                  src={activeGameObj.banner}
                  alt={activeGameObj.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
