import React from 'react'
import { Outlet } from 'react-router-dom';
import '../styles/Quiz.css';

export default function Quiz() {
  return (
    <div className='quiz'>
      <Outlet />
    </div>
  )
}
