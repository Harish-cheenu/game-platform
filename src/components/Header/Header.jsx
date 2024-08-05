import React, { useEffect, useState } from 'react';
import { CiDark } from 'react-icons/ci';
import { FiSun } from "react-icons/fi";
import { useClerk } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ isSignedIn, UserButton }) => {
  const { openSignIn } = useClerk();
  const [theme, setTheme] = useState('');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    console.log(savedTheme)
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDarkMode ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    if (theme) {
      document.body.className = theme + '-mode';
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          GamePlatform
        </Link>
      </div>
      <div className="header-content">
        <div onClick={handleThemeToggle} className="theme-toggle">
          {theme === 'light' ? <CiDark /> : <FiSun />}
        </div>
        {isSignedIn ? <UserButton /> : <button onClick={() => openSignIn()} className="btn login-button">Login</button>}
      </div>
    </header>
  )
}

export default Header