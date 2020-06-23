import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MainContent from './Components/MainContent';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <MainContent></MainContent>
    </div>
  );
}

export default App;
