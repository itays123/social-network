import React from 'react';
import Brand from '../Brand/Brand';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import useProfile from '../../hooks/useProfile';
import AuthOnly from '../AuthOnly/AuthOnly';
import ProfilePic from '../ProfilePic/ProfilePic';

const Link = ({ to, children }) => (
  <NavLink className="flex a-center" to={to}>
    {children}
  </NavLink>
);

const Devider = () => <div className="flex a-center devider"> | </div>;

const Navbar = () => {
  const { avatarUrl } = useProfile();
  return (
    <nav>
      <div className="wrapper flex a-center j-btwn">
        <div className="start flex a-center">
          <Brand />
          <SearchBar />
        </div>
        <ul className="links flex a-stretch j-end">
          <div className="flex a-stretch main">
            <Link to="/">Home</Link>
            <AuthOnly>
              <Devider />
              <Link to="/">Sign Out</Link>
            </AuthOnly>
            <AuthOnly reversed>
              <Devider />
              <Link to="/login">Log In</Link>
              <Devider />
              <Link to="/register">Register</Link>
            </AuthOnly>
          </div>
          <AuthOnly>
            <NavLink to="/profile" className="flex a-center">
              <ProfilePic url={avatarUrl} />
            </NavLink>
          </AuthOnly>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
