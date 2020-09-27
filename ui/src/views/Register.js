import React from 'react';
import AuthForm from '../components/AuthForm/AuthForm';

const Register = () => {
  return (
    <div
      className="register route flex a-center j-center"
      style={{ width: '100vw', height: '90vh' }}
    >
      <AuthForm name email password />
    </div>
  );
};

export default Register;
