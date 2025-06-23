import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  return (

    // home, start quiz, scores, about
    // hamburger menu for mobile view
    // responsive design
    <>
        <header className="navbar">
          <div className="icon">
              <div className="iconImg">
                  <img src="\Images\logo\Quizical.png" alt="logo" />
              </div>
              <div className="iconName">
                  <p>uizical</p>
              </div>
          </div>
          <input type="checkbox" id="hamburger-inp" />
          <label htmlFor="hamburger-inp" className="hamburger">☰</label>        
          <nav>
              <Link to="/">Home</Link>
              <Link to="/quiz">Start Quiz</Link>
              <Link to="/quiz/leaderboard">LeaderBoard</Link>
              <Link to="/about">About</Link>
              <input type="checkbox" id="light-dark-inp" />
              <label htmlFor="light-dark-inp" className="light-dark">
                  light/Dark
              </label>
          </nav>
      </header>
    </>
  )
}
