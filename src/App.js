import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Main from './pages/Main';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact Component={Main}/>
      </Routes>
    </div>
  );
}
