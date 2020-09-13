import React from 'react';
import './Brand.css';
import logo from '../../assets/logo.svg';

const Brand = () => (
  <div className="brand flex a-center">
    <img src={logo} alt="" width={32} height={32} />
    <h1>Social Media</h1>
  </div>
);

export default Brand;
