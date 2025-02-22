import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Calendar from './components/Calendar'

const App = () => {
// create an h1 element with the title of my project in the div 
// create an h2 element with a subtitle containing a message for your schedule recipient
  return (
    <div className="App">
      <h1>Mexico City</h1>
      <h2>Welcome to Mexico, You will be staying in Mexico City! Check out this calendar to get to know the city and see the sights during your stay!🌹</h2>
      <Calendar />


      

      
    </div>
  )
}

export default App