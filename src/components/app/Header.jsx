import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../../styles/Header.css';

const Header = () => {
  return (
    <header>
      <h1>Welcome to Arda</h1>
      <nav className={style.navBar}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/characters">Characters</NavLink>
        <NavLink to="/quotes">Quotes</NavLink>
      </nav>
    </header>
  );
};

export default Header;
