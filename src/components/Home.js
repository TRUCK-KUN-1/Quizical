import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Home.css'

export default function Home() {
  return (

    // two parts: text and danceing image
    // button: start quiz (route: /quiz)
    // 
    <>
      <div className='home'>
        <div className='home-text'>
          <h1>Welcome to Quizical!</h1>
          <p>Test your knowledge with our fun and interactive quizzes.</p>
          <Link to="/quiz" className="btn">
            Start Quiz
          </Link>
        </div>
        <div className='home-image'>
          <img src="Images/home/heroIcon.png" alt="iteresting" />
        </div>
      </div>
    </>
  )
}
