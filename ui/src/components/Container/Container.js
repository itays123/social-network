import React from 'react';
import './Container.css';

const Container = ({ children }) => {
  return (
    <div className="container">
      <div className="margin"></div>
      <div className="content">{children}</div>
      <div className="margin"></div>
    </div>
  );
};

export default Container;
