import React from 'react';
import Brand from '../Brand/Brand';
import Container from '../Container/Container';
import './Navbar.css';

const Navbar = () => (
  <nav>
    <Container>
      <div className="wrapper">
        <Brand />
        <ul className="links"></ul>
      </div>
    </Container>
  </nav>
);

export default Navbar;
