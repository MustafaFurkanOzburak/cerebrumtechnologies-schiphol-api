import React, {useState} from 'react';
import Navbar from './companents/Navbar';
import Main_page from './Page/Main_page';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';

function App() {

  return (
    <div className='App'>
      <Router>
        <Navbar/>
      </Router>
        <Route path='/' element={<Main_page/>}/>
      <Routes>

      </Routes>
    </div>
  );
}

export default App;
