import React from 'react';
import Brand from '../Brand/Brand';
import './Navbar.css';
import home from '../../assets/home.svg';
import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => (
  <nav>
    <div className="wrapper flex a-center j-btwn">
      <div className="start flex a-center">
        <Brand />
        <SearchBar />
      </div>

      <ul className="links flex a-stretch j-end">
        <NavLink to="/" className="flex a-center j-center">
          <img width={32} height={32} alt="" src={home} />
        </NavLink>
      </ul>
    </div>
  </nav>
);

export default Navbar;
