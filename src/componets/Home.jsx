import React from 'react'
import  "./style.css"
import { Card } from './Card'
export const Home = () => {
  return (
    <div className='home'>
        <h1>Our Doctors</h1>
          <div className='homecard'>
        <Card/>
        <Card/>
        <Card/>
        </div>
    </div>
  )
}
