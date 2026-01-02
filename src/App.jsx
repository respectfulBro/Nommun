import { useState, useEffect } from 'react';
import { gameData } from './data/gameData';
import './App.css';

function BootSequence({ onFinish }) {
  const [lines, setLines] = useState([]);
  const bootMessages = [
    "> INITIALIZING NOMU_OS_v1.0...",
    "> LOADING KERNEL MODULES...",
    "> CHECKING MEMORY BANK [OK]",
    "> CONNECTING TO HEART_SERVER...",
    "> ACCESSING ENCRYPTED_ARCHIVES...",
    "> DECRYPTING MEMORIES [####################] 100%",
    "> SECURITY BYPASS: GRANTED",
    "> WELCOME, NOMU.",
    "> STARTING INTERFACE..."
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootMessages.length) {
        setLines(prev => [...prev, bootMessages[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(onFinish, 1000);
      }
    }, 400);

    const handleKey = () => onFinish();
    window.addEventListener('keydown', handleKey);
    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKey);
    };
  }, []);

  return (
    <div className="boot-screen">
      {lines.map((line, i) => (
        <div key={i} className="terminal-line">{line}</div>
      ))}
      <div className="cursor"></div>
      <div className="boot-skip">PRESS ANY KEY TO SKIP</div>
    </div>
  );
}

function App() {
  const [showBoot, setShowBoot] = useState(true);
  const [gameState, setGameState] = useState(() => {
    const saved = localStorage.getItem('nomus_journey_save');
    return saved ? JSON.parse(saved) : {
      unlockedLevels: [1],
      completedTasks: {},
      unlockedGifts: []
    };
  });

  const [currentScreen, setCurrentScreen] = useState('menu');
  const [activeLevel, setActiveLevel] = useState(null);
  const [activeTaskIndex, setActiveTaskIndex] = useState(0);

  useEffect(() => {
    localStorage.setItem('nomus_journey_save', JSON.stringify(gameState));
  }, [gameState]);

  const handleStart = () => setCurrentScreen('levelSelect');

  if (showBoot) {
    return <BootSequence onFinish={() => setShowBoot(false)} />;
  }

  const selectLevel = (level) => {
    if (gameState.unlockedLevels.includes(level.id)) {
      setActiveLevel(level);
      setActiveTaskIndex(0);
      setCurrentScreen('task');
    }
  };

  const completeTask = (taskId) => {
    const levelId = activeLevel.id;
    const levelTasks = activeLevel.tasks;

    setGameState(prev => {
      const completedForLevel = prev.completedTasks[levelId] || [];
      if (!completedForLevel.includes(taskId)) {
        const newState = {
          ...prev,
          completedTasks: {
            ...prev.completedTasks,
            [levelId]: [...completedForLevel, taskId]
          }
        };

        if (newState.completedTasks[levelId].length === levelTasks.length) {
          if (!newState.unlockedGifts.includes(levelId)) {
            newState.unlockedGifts.push(levelId);
          }
          const nextLevelId = levelId + 1;
          if (nextLevelId <= 5 && !newState.unlockedLevels.includes(nextLevelId)) {
            newState.unlockedLevels.push(nextLevelId);
          }
        }
        return newState;
      }
      return prev;
    });

    if (activeTaskIndex < levelTasks.length - 1) {
      setActiveTaskIndex(prev => prev + 1);
    } else {
      if (activeLevel.id === 2) {
        setCurrentScreen('puzzle');
      } else {
        setCurrentScreen('gift');
      }
    }
  };

  const handleEndClick = () => {
    if (activeLevel.id === 5) {
      setCurrentScreen('ending');
    } else {
      setCurrentScreen('levelSelect');
    }
  };

  const currentMarqueeText = () => {
    if (showBoot) return "BOOTING...";
    if (currentScreen === 'menu') return "SYSTEM ONLINE // NOMU'S JOURNEY // WAITING FOR INPUT...";
    if (currentScreen === 'levelSelect') return `CHAPTER SELECTION // ${gameState.unlockedLevels.length}/5 UNLOCKED // PROCEED WITH CARE...`;
    if (currentScreen === 'task') return `EXECUTING PROCESS: ${activeLevel.title} // TASK ${activeTaskIndex + 1}/${activeLevel.tasks.length} // INITIALIZING RESPONSE...`;
    if (currentScreen === 'puzzle') return "INTERACTIVE_PUZZLE_BLOCK // AWAITING PHYSICAL VALIDATION // STANDY BY...";
    if (currentScreen === 'gift') return "ENCRYPTION BROKEN // DATA RECOVERED // NEW GIFT ARCHIVED...";
    if (currentScreen === 'ending') return "SYSTEM STANDBY // COMPLETED // ALWAYS & FOREVER";
    return "NOMU'S JOURNEY // ALWAYS & FOREVER";
  };

  const handleReplay = () => {
    localStorage.removeItem('nomus_journey_save');
    setGameState({
      unlockedLevels: [1],
      completedTasks: {},
      unlockedGifts: []
    });
    setCurrentScreen('menu');
    setShowBoot(true);
  };

  return (
    <div className="os-window fade-in">
      <div className="window-header">
        <div className="window-controls">
          <div className="control-dot red"></div>
          <div className="control-dot yellow"></div>
          <div className="control-dot green"></div>
        </div>
        <div className="window-title">
          {currentScreen === 'menu' && "NOMU_OS_v1.0.exe"}
          {currentScreen === 'levelSelect' && "ARCHIVE_LOOKUP.sh"}
          {currentScreen === 'task' && `TASK_PROCESSOR_${activeLevel.id}.pkg`}
          {currentScreen === 'puzzle' && "PHYSICAL_PUZZLE_WAIT.sys"}
          {currentScreen === 'gift' && "DECRYPTED_GIFT.dat"}
          {currentScreen === 'ending' && "CORE_SHUTDOWN.log"}
        </div>
        <div className="window-meta">{new Date().toLocaleTimeString()}</div>
      </div>

      <div className="window-content">
        {currentScreen === 'menu' && (
          <div className="menu-screen">
            <h1>Nomu's<br />Journey</h1>
            <p className="typewriter-sub">A narrative experience for Nomu. <br /> Accessing memories...</p>
            <button className="btn btn-primary" onClick={handleStart}>LOGIN_START</button>
          </div>
        )}

        {currentScreen === 'levelSelect' && (
          <div className="level-select">
            <h2>Chapters</h2>
            <div className="level-grid">
              {gameData.levels.map(level => (
                <button
                  key={level.id}
                  className={`btn ${gameState.unlockedLevels.includes(level.id) ? 'active-level' : 'btn-locked'}`}
                  onClick={() => selectLevel(level)}
                >
                  [{level.id}] {level.title} {gameState.unlockedGifts.includes(level.id) ? "// COMPLETE" : ""}
                </button>
              ))}
            </div>
            <button className="btn back-btn" onClick={() => setCurrentScreen('menu')}>[←] LOGOUT</button>
          </div>
        )}

        {currentScreen === 'task' && activeLevel && (
          <TaskScreen
            task={activeLevel.tasks[activeTaskIndex]}
            onComplete={completeTask}
            index={activeTaskIndex}
            total={activeLevel.tasks.length}
          />
        )}

        {currentScreen === 'puzzle' && (
          <div className="puzzle-screen">
            <h2>PHYSICAL_CHALLENGE</h2>
            <div className="gift-box">
              <p className="gift-msg">"Solve the puzzle to continue"</p>
              <p className="task-subtext">// Patience is the key to solving this puzzle and the key to a happy relationship</p>
            </div>
            <button className="btn btn-primary" onClick={() => setCurrentScreen('gift')}>[✓] PUZZLE_SOLVED</button>
          </div>
        )}

        {currentScreen === 'gift' && activeLevel && (
          <div className="gift-screen">
            <h2>Gift_ID: {activeLevel.id}</h2>
            <div className="gift-box">
              <p className="gift-msg">{activeLevel.reward.message}</p>
              {activeLevel.reward.type === 'image' && (
                <div className="gift-image-frame">
                  <img src={activeLevel.reward.content} alt="Gift" />
                </div>
              )}
              {activeLevel.reward.type === 'text' && <p className="gift-text-content">{activeLevel.reward.content}</p>}
            </div>
            <button className="btn btn-primary" onClick={handleEndClick}>[!] RETROSPECTIVE</button>
          </div>
        )}

        {currentScreen === 'ending' && (
          <div className="ending-screen">
            <h1>Thank You</h1>
            <div className="credits-list">
              <p>// CREDITS</p>
              <p>DIRECTOR: YOU</p>
              <p>MUSE: NOMU</p>
              <p>VERSION: 2026.0.1</p>
            </div>
            <p className="ending-note">
              Every memory has been archived. <br />
              Every gift remains yours. <br />
              Happy New Year, Nomu.
            </p>
            <button className="btn btn-primary" onClick={handleReplay}>REBOOT_MEMORIES.sh</button>
          </div>
        )}
      </div>

      <div className="marquee-container">
        <div className="marquee-content">
          {currentMarqueeText()} &nbsp;&nbsp;&nbsp;&nbsp; {currentMarqueeText()} &nbsp;&nbsp;&nbsp;&nbsp; {currentMarqueeText()}
        </div>
      </div>
    </div>
  );
}

function TaskScreen({ task, onComplete, index, total }) {
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState(null);

  const handleChoice = (idx) => {
    if (idx === task.correct || task.correct === undefined) {
      setFeedback('correct');
      setTimeout(() => {
        onComplete(task.id);
        setFeedback(null);
      }, 1000);
    } else {
      setFeedback('wrong');
      setTimeout(() => setFeedback(null), 1000);
    }
  };

  const handlePuzzle = () => {
    if (input.toLowerCase().trim() === task.correct.toLowerCase()) {
      setFeedback('correct');
      setTimeout(() => {
        onComplete(task.id);
        setInput('');
        setFeedback(null);
      }, 1000);
    } else {
      setFeedback('wrong');
      setTimeout(() => setFeedback(null), 1000);
    }
  };

  return (
    <div className="task-container">
      <div className="task-meta">
        <span className="mono-label">PROCESS_ID: {task.id}</span>
        <span className="mono-label">PROGRESS: {index + 1}/{total}</span>
      </div>

      <div className="task-content">
        <h3>{task.question || task.text}</h3>

        {task.image && (
          <div className="task-image-wrapper">
            <img src={task.image} alt="Task Illustration" className="task-image" />
          </div>
        )}

        {task.type === 'choice' && (
          <div className="options-grid">
            {task.options.map((opt, i) => (
              <button key={i} className="btn" onClick={() => handleChoice(i)}>{opt}</button>
            ))}
          </div>
        )}

        {task.type === 'puzzle' && (
          <div className="puzzle-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handlePuzzle()}
              placeholder="INPUT_DATA..."
              autoFocus
            />
            <button className="btn btn-primary" onClick={handlePuzzle}>SUBMIT_VAR</button>
          </div>
        )}

        {task.type === 'click' && (
          <div className="heart-wrapper">
            <button className="btn btn-heart" onClick={() => handleChoice()}>❤️</button>
            <p className="hint">INTERACT_TO_PROCEED</p>
          </div>
        )}

        {task.type === 'narrative' && (
          <button className="btn btn-primary" onClick={() => handleChoice()}>ACKNOWLEDGE</button>
        )}
      </div>

      <div className={`feedback-terminal ${feedback ? 'flash' : ''} ${feedback}`}>
        {feedback === 'correct' && ">>> DATA_VALIDATED: OK"}
        {feedback === 'wrong' && ">>> ERROR: INPUT_MISMATCH. RETRY."}
      </div>

      {task.story && <p className="task-subtext">// {task.story}</p>}
    </div>
  );
}

export default App;
