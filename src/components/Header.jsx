import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/Main.css';

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`fixed top-0 left-0 w-full shadow-md py-4 px-6 ${
      theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'
    } header-container`}
    >
      <div className="flex justify-between items-center">
        <div className="flex justify-around items-center">
          <button
            type="button"
            onClick={toggleTheme}
            className={`h-8 w-16 bg-gray-200 text-gray-800 rounded-full py-2 px-4 relative transition-colors duration-300 mr-4 ${
              theme === 'light' ? 'bg-gray-200' : 'bg-gray-600'
            }`}
          >
            <span
              className={`absolute left-0 top-0 h-full w-1/2 bg-white rounded-full transition-transform duration-300 ${
                theme === 'light' ? 'transform translate-x-0 bg-gray-400' : 'transform translate-x-full bg-gray-200'
              }`}
            />
          </button>
          {theme === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
        </div>
        <div className="flex space-x-4">
          <Link to="/">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Home
            </button>
          </Link>
          <Link to="/projects">
            <button
              type="button"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Projetos
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
