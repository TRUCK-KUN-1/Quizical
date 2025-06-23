import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/AddPlayerForm.css';

export default function AddPlayerForm() {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [playerData, setPlayerData] = useState({
    name: '',
    genre: '',
    difficulty: ''
  });

  const NameInp = (e) => {
    setName(e.target.value);
  }
  const GenreInp = (e) => {
    setGenre(e.target.value);
  }
  const DifficultyInp = (e) => {
    setDifficulty(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
      setPlayerData({
        name: name,
        genre: genre,
        difficulty: difficulty
      });
      navigate('/quiz/start'); // Navigate to the QuizEngine component
  }

  useEffect(() => {
    if (playerData.name && playerData.genre && playerData.difficulty) {
      localStorage.setItem('playerData', JSON.stringify(playerData));
    }
  }, [playerData, navigate]);

  const isFormComplete = name && genre && difficulty;

  return (
    <div className='AddPlayerForm'>
        <h2>Add Player</h2>
        <form>
            <input name='name' type="text" placeholder="Enter player name" onChange={NameInp} required/>
            <select name='genre' onChange={GenreInp} required>
                <option value="">Select Genre</option>
                <option value="python">Python</option>
                <option value="js">JavaScript</option>
            </select>
            <select name='difficulty' onChange={DifficultyInp} required>
                <option value="">Select Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            <input type="submit" placeholder='Start Quiz' onClick={handleSubmit} disabled={!isFormComplete} />
            <input type="reset" value="Reset" onClick={() => {localStorage.removeItem('playerData');}} />
        </form>
    </div>
  )
}
