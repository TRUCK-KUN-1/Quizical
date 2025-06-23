import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/QuizEngine.css';
import Questions from './QuizBin.js';

export default function QuizEngine() {
  const navigate = useNavigate();
  const playerData = JSON.parse(localStorage.getItem('playerData'));

  const qus = Questions(playerData?.genre, playerData?.difficulty);
  const [qusNumber, setQusNumber] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [remainingTime, setRemainingTime] = useState(15);
  const [answers, setAnswers] = useState([]);
  const timer = useRef(null);

  const quizObjectRef = useRef({
    name: playerData?.name || '',
    genre: playerData?.genre || '',
    difficulty: playerData?.difficulty || '',
    submittedAnswers: []
  });

  // Redirect if player data is invalid
  useEffect(() => {
    if (!playerData?.name || !playerData?.genre || !playerData?.difficulty) {
      navigate('/quiz');
    }
  }, [playerData, navigate]);

  // Start timer on question change
  useEffect(() => {
    timer.current = setInterval(() => {
      setRemainingTime(prev => {
        if (prev <= 1) {
          clearInterval(timer.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer.current);
  }, [qusNumber]);

  // Handle timeout
  useEffect(() => {
    if (remainingTime === 0) {
      handleNextQuestion(); // handles answer push
    }
  }, [remainingTime]);

  // Handle answer change
  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  // Go to next question or finish quiz
  const handleNextQuestion = () => {
    // Push selected or default answer once
    quizObjectRef.current.submittedAnswers.push(
      selectedAnswer !== null ? selectedAnswer : 'idk'
    );
    setAnswers([...quizObjectRef.current.submittedAnswers]);

    setSelectedAnswer(null);
    setRemainingTime(15);

    if (qusNumber < qus.length - 1) {
      setQusNumber(prev => prev + 1);
    } else {
      localStorage.setItem('quizObject', JSON.stringify(quizObjectRef.current));
      navigate('/quiz/result');
    }
  };

  // Reset quiz
  const handleReset = () => {
    localStorage.removeItem('playerData');
    localStorage.removeItem('quizObject');
    navigate('/quiz');
  };

  return (
    <div className='QuizEngine'>
      <div key={qusNumber} className='Question'>
        <h3>{qusNumber + 1}. {qus[qusNumber].question}</h3>
        <h5>00:{remainingTime.toString().padStart(2, '0')}</h5>
      </div>

      <div className='Options'>
        {qus[qusNumber].options.map((option, idx) => (
          <label key={idx} className='Option'>
            <input
              type='radio'
              name={`question-${qusNumber}`}
              value={idx}
              checked={selectedAnswer === String(idx)}
              onChange={handleAnswerChange}
            />
            <h4>{option}</h4>
          </label>
        ))}
      </div>

      <div className='progressBar'>
        <h3>Progress:</h3>
        <progress value={qusNumber} max={qus.length - 1}></progress>
      </div>

      <button onClick={handleNextQuestion} className='NextButton'>
        {qusNumber < qus.length - 1 ? 'Next Question' : 'Finish Quiz'}
      </button>

      <button type='reset' className='ResetButton' onClick={handleReset}>
        Reset Quiz
      </button>
    </div>
  );
}
