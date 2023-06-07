/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Main from './pages/Main';

export default function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}
