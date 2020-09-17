import React from 'react';
import './Brand.css';
import logo from '../../assets/logo.svg';

const Brand = ({ showTitle }) => (
  <div className="brand flex a-center">
    <img src={logo} alt="" width={32} height={32} />
    {showTitle && <h1>Social Media</h1>}
  </div>
);

export default Brand;
