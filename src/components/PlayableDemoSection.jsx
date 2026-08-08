import React, { useState, useEffect } from 'react';
import { PlayCircle, RotateCcw, Trophy, Cpu, Users, Sparkles, Gamepad2 } from 'lucide-react';
import { playClickSound, playHoverSound, playWinSound } from '../utils/soundEffects';

export default function PlayableDemoSection() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [vsAI, setVsAI] = useState(true);
  const [scores, setScores] = useState({ player: 0, ai: 0, draws: 0 });
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState([]);

  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]            // Diagonals
  ];

  const checkWinner = (currentBoard) => {
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        return { winnerMark: currentBoard[a], line: combo };
      }
    }
    if (currentBoard.every((cell) => cell !== null)) {
      return { winnerMark: 'Draw', line: [] };
    }
    return null;
  };

  // AI Move logic
  useEffect(() => {
    if (vsAI && !isXNext && !winner) {
      const timer = setTimeout(() => {
        const emptyIndices = board
          .map((val, idx) => (val === null ? idx : null))
          .filter((val) => val !== null);

        if (emptyIndices.length > 0) {
          // Smart AI choice: Check if AI can win or block
          let chosenIndex = null;

          // 1. Try to win
          for (let i of emptyIndices) {
            const tempBoard = [...board];
            tempBoard[i] = 'O';
            if (checkWinner(tempBoard)?.winnerMark === 'O') {
              chosenIndex = i;
              break;
            }
          }

          // 2. Block player win
          if (chosenIndex === null) {
            for (let i of emptyIndices) {
              const tempBoard = [...board];
              tempBoard[i] = 'X';
              if (checkWinner(tempBoard)?.winnerMark === 'X') {
                chosenIndex = i;
                break;
              }
            }
          }

          // 3. Fallback random move
          if (chosenIndex === null) {
            chosenIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
          }

          makeMove(chosenIndex, 'O');
        }
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [board, isXNext, vsAI, winner]);

  const makeMove = (index, mark) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = mark;
    setBoard(newBoard);

    const winResult = checkWinner(newBoard);
    if (winResult) {
      setWinner(winResult.winnerMark);
      setWinningLine(winResult.line);
      if (winResult.winnerMark === 'X') {
        playWinSound();
        setScores((prev) => ({ ...prev, player: prev.player + 1 }));
      } else if (winResult.winnerMark === 'O') {
        playClickSound();
        setScores((prev) => ({ ...prev, ai: prev.ai + 1 }));
      } else {
        playClickSound();
        setScores((prev) => ({ ...prev, draws: prev.draws + 1 }));
      }
    } else {
      playClickSound();
      setIsXNext(mark === 'O');
    }
  };

  const handleCellClick = (index) => {
    if (vsAI && !isXNext) return;
    makeMove(index, isXNext ? 'X' : 'O');
  };

  const resetGame = () => {
    playClickSound();
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setWinningLine([]);
  };

  return (
    <section id="demo">
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="section-badge">
          <PlayCircle size={16} /> LIVE IN-BROWSER DEMO
        </div>

        <h2 className="section-title font-heading gold-gradient-text">
          Try Pocket Arcade Live
        </h2>

        <p className="section-subtitle">
          Test our mini-game engine right here on the website! Play Tic-Tac-Toe Neo against our AI.
        </p>

        {/* Demo Arcade Container */}
        <div
          className="glass-card"
          style={{
            maxWidth: '520px',
            margin: '0 auto',
            padding: '32px 24px',
            border: '2px solid var(--accent)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.6), 0 0 25px rgba(251, 191, 36, 0.2)',
          }}
        >
          {/* Controls Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px',
              flexWrap: 'wrap',
              gap: '10px',
            }}
          >
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => {
                  playClickSound();
                  setVsAI(true);
                  resetGame();
                }}
                onMouseEnter={playHoverSound}
                style={{
                  background: vsAI ? 'var(--accent)' : 'rgba(255,255,255,0.06)',
                  color: vsAI ? '#0F172A' : 'var(--text-muted)',
                  border: vsAI ? 'none' : '1px solid var(--border-color)',
                  padding: '6px 12px',
                  borderRadius: '10px',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <Cpu size={14} /> vs AI Engine
              </button>

              <button
                onClick={() => {
                  playClickSound();
                  setVsAI(false);
                  resetGame();
                }}
                onMouseEnter={playHoverSound}
                style={{
                  background: !vsAI ? 'var(--cyan-accent)' : 'rgba(255,255,255,0.06)',
                  color: !vsAI ? '#0F172A' : 'var(--text-muted)',
                  border: !vsAI ? 'none' : '1px solid var(--border-color)',
                  padding: '6px 12px',
                  borderRadius: '10px',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <Users size={14} /> 2 Player Mode
              </button>
            </div>

            <button
              onClick={resetGame}
              onMouseEnter={playHoverSound}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid var(--border-color)',
                color: '#FFF',
                padding: '6px 12px',
                borderRadius: '10px',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <RotateCcw size={14} /> Reset
            </button>
          </div>

          {/* Scoreboard Bar */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid var(--border-color)',
              padding: '10px 16px',
              borderRadius: '14px',
              marginBottom: '24px',
            }}
          >
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 800 }}>YOU (X)</div>
              <div className="font-heading" style={{ fontSize: '1.2rem', color: '#FFF', fontWeight: 900 }}>{scores.player}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 800 }}>DRAWS</div>
              <div className="font-heading" style={{ fontSize: '1.2rem', color: '#FFF', fontWeight: 900 }}>{scores.draws}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: vsAI ? 'var(--cyan-accent)' : '#EF4444', fontWeight: 800 }}>{vsAI ? 'AI (O)' : 'P2 (O)'}</div>
              <div className="font-heading" style={{ fontSize: '1.2rem', color: '#FFF', fontWeight: 900 }}>{scores.ai}</div>
            </div>
          </div>

          {/* Status Message */}
          <div style={{ height: '28px', marginBottom: '16px' }}>
            {winner ? (
              <div
                className="font-heading"
                style={{
                  color: winner === 'X' ? 'var(--accent)' : winner === 'O' ? 'var(--cyan-accent)' : '#E2E8F0',
                  fontWeight: 900,
                  fontSize: '1.1rem',
                }}
              >
                {winner === 'Draw' ? '🤝 GAME DRAW!' : winner === 'X' ? '🎉 YOU WIN!' : vsAI ? '🤖 AI WINS!' : '🎉 PLAYER 2 WINS!'}
              </div>
            ) : (
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>
                {isXNext ? 'Your Turn (X)' : vsAI ? 'AI is thinking...' : 'Player 2 Turn (O)'}
              </div>
            )}
          </div>

          {/* 3x3 Tic Tac Toe Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '12px',
              aspectRatio: '1',
              maxWidth: '360px',
              margin: '0 auto',
            }}
          >
            {board.map((cell, idx) => {
              const isHighlight = winningLine.includes(idx);
              return (
                <button
                  key={idx}
                  onClick={() => handleCellClick(idx)}
                  onMouseEnter={playHoverSound}
                  disabled={cell !== null || winner !== null}
                  style={{
                    background: isHighlight
                      ? 'rgba(251, 191, 36, 0.25)'
                      : 'rgba(15, 23, 42, 0.85)',
                    border: isHighlight
                      ? '2px solid var(--accent)'
                      : '1px solid var(--border-color)',
                    borderRadius: '16px',
                    fontSize: '2.5rem',
                    fontWeight: 900,
                    fontFamily: 'var(--font-heading)',
                    color: cell === 'X' ? 'var(--accent)' : cell === 'O' ? 'var(--cyan-accent)' : 'transparent',
                    cursor: cell === null && !winner ? 'pointer' : 'default',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: isHighlight ? '0 0 20px rgba(251, 191, 36, 0.4)' : 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {cell}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
