import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Navbar from './components/Navbar';
import Home from './components/Home';
import Layout from './components/Layout';
import Quiz from './components/Quiz';
import AddPlayerForm from './components/AddPlayerForm';
import QuizEngine from './components/QuizEngine';
import ScoreSummary from './components/ScoreSummary';
import LeaderBoard from './components/LeaderBoard';

import './styles/Basics.css';
import './styles/Variables.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/quiz" element={<Quiz />}>
            <Route index element={<AddPlayerForm />}/>
            <Route path="/quiz/start" element={<QuizEngine />} />
            <Route path='/quiz/result' element={<ScoreSummary />} />
          </Route>
          <Route path='/leaderboard' element={<LeaderBoard />} />
        </Route>
      </Routes>
    </Router>  
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
