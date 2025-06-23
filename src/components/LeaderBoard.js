import React from 'react';
import '../styles/LeaderBoard.css';

export default function LeaderBoard() {
  const [leaderBoard, setLeaderBoard] = React.useState(() => {
    return JSON.parse(localStorage.getItem('LeaderBoard')) || [];
  });

  const handleClearHistory = () => {
    localStorage.removeItem('LeaderBoard');
    setLeaderBoard([]); // clear state too
  };

  return (
    <div className='LeaderBoard'>
      <div className='tableContainer'>
        <table>
          <thead>
            <tr>
              <th className='name'>Name</th>
              <th className='category'>Category: Difficulty</th>
              <th className='score'>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderBoard.map((option, idx) => (
              <tr key={idx}>
                <td className='name'>{option.Name}</td>
                <td className='category'>{option.Category}: {option.Difficulty}</td>
                <td className='score'>{option.Score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={handleClearHistory}>Clear History</button>
    </div>
  );
}
