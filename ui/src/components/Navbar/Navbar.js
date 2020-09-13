import React from 'react';
import Brand from '../Brand/Brand';
import Container from '../Container/Container';
import './Navbar.css';
import home from '../../assets/home.svg';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Container>
      <div className="wrapper">
        <Brand />
        <ul className="links">
          <NavLink to="/">
            <img width={32} height={32} alt="" src={home} />
          </NavLink>
        </ul>
      </div>
    </Container>
  </nav>
);

export default Navbar;
