/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Main from './pages/Main';

export default function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Routes>
          <Route path="/" exact Component={Main} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}
