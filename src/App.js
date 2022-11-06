import './App.css';
import React from 'react'
import Home from './Home';
import Contact from './Contact';
import { Routes, Route } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/> 
      </Routes>
      {/* <Home />  */}  
    </div>
  );
}

export default App;
