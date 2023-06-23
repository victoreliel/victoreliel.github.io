/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ScrollToTop from './components/ScrollToTop';
import Main from './pages/Main';
import Projects from './pages/Projects';

export default function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}
