import React, { useState, useEffect } from 'react';
import '../styles/ScoreSummary.css';
import { Link, useNavigate } from 'react-router-dom';
import Questions from './QuizBin.js';

export default function ScoreSummary() {
  const navigate = useNavigate();
  const playerData = JSON.parse(localStorage.getItem('playerData'));
  const quizObject = JSON.parse(localStorage.getItem('quizObject'));

  const qus = Questions(playerData.genre, playerData.difficulty);
  const submittedAns = quizObject.submittedAnswers;
  const realAns = qus.map(q => q.answer);

  const [score, setScore] = useState(0);

  useEffect(() => {
    const scoreArray = realAns.map((correct, idx) => {
      const userAns = submittedAns[idx];
      if (userAns === 'idk') return 0;
      return String(correct) === String(userAns) ? 1 : 0;
    });

    const finalScore = scoreArray.reduce((acc, val) => acc + val, 0);
    setScore(finalScore);

    const newStat = {
      Name: playerData.name,
      Category: playerData.genre,
      Difficulty: playerData.difficulty,
      Score: finalScore
    };

    let existing = JSON.parse(localStorage.getItem('LeaderBoard')) || [];
    existing = existing.filter(entry => entry && entry.Name);

    const isDuplicate = existing.some(entry =>
      entry.Name === newStat.Name &&
      entry.Category === newStat.Category &&
      entry.Difficulty === newStat.Difficulty &&
      entry.Score === newStat.Score
    );

    if (!isDuplicate) {
      const updated = [...existing, newStat];
      localStorage.setItem('LeaderBoard', JSON.stringify(updated));
    }
  }, []);

  // 🔄 Reset player and quiz data
  const clearSession = () => {
    localStorage.removeItem('playerData');
    localStorage.removeItem('quizObject');
  };

  // 🎯 Navigation handlers
  const handleNav = (path) => {
    clearSession();
    navigate(path);
  };

  return (
    <div className='ScoreSummary'>
      <h1>Score Summary</h1>

      <div className='scoreContainer'>
        <div className='details'>
          <div className='name'><h3>Name: </h3><p>{playerData.name}</p></div>
          <div className='genre'><h3>Genre: </h3><p>{playerData.genre}</p></div>
          <div className='difficulty'><h3>Difficulty: </h3><p>{playerData.difficulty}</p></div>
        </div>

        <div className='score'>
          <h3>Score: {score}/{realAns.length}</h3>
          <progress value={score} max={realAns.length}></progress>
        </div>
      </div>

      <div className='ansDetails'>
        <div className='correct'>Correct: <b>{score}</b></div>
        <div className='wrong'>Wrong: <b>{realAns.length - score}</b></div>
      </div>

      <div className='ImpBtn'>
        <button className="btn" onClick={() => handleNav('/quiz')}>Play Again</button>
        <button className="btn" onClick={() => handleNav('/leaderboard')}>LeaderBoard</button>
      </div>

      <button className='homeBtn' onClick={() => handleNav('/')}>Go To Home</button>
    </div>
  );
}
