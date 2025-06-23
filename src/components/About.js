import React from 'react';
import '../styles/About.css';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="AboutPage">
      <div className="about-card">
        <h1>About the Quiz App</h1>
        <p>
          This Quiz App is designed to help you <strong>test your knowledge</strong>, challenge your memory,
          and learn new things in a fun and engaging way.
        </p>
        <p>
          Whether you're a student, a hobbyist, or just looking to spend your time productively,
          this app offers a clean interface, instant feedback, and a variety of topics to keep your mind sharp.
        </p>

        <h3>How it works:</h3>
        <ul>
          <li>🎯 Choose your preferred <strong>genre</strong> and <strong>difficulty level</strong>.</li>
          <li>🧠 Answer multiple-choice questions one at a time.</li>
          <li>📈 View your final score and how you performed.</li>
          <li>🏆 Your results are stored in a <strong>local leaderboard</strong>.</li>
        </ul>

        <h3>Why use this app?</h3>
        <ul>
          <li>✅ Simple and responsive design</li>
          <li>✅ No login or signup required</li>
          <li>✅ Play as many times as you want</li>
          <li>✅ Track your progress over time</li>
        </ul>

        <p>
          Built with 💙 using <strong>React</strong> and <strong>LocalStorage</strong>, this app is completely
          client-side — your data never leaves your browser.
        </p>

        <div className="about-buttons">
          <Link to="/" className="btn"><button>Go Home</button></Link>
          <Link to="/quiz" className="btn"><button>Start Quiz</button></Link>
          <Link to="/leaderboard" className="btn"><button>View Leaderboard</button></Link>
        </div>
      </div>
    </div>
  );
}
