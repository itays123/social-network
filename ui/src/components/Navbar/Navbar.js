import React from 'react';
import Brand from '../Brand/Brand';
import Container from '../Container/Container';
import './Navbar.css';
import home from '../../assets/home.svg';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Container>
      <div className="wrapper flex a-stretch j-btwn">
        <Brand />
        <ul className="links flex a-stretch j-end">
          <NavLink to="/" className="flex a-center j-center">
            <img width={32} height={32} alt="" src={home} />
          </NavLink>
        </ul>
      </div>
    </Container>
  </nav>
);

export default Navbar;
