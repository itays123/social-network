import React from 'react';
import AuthForm from '../components/AuthForm/AuthForm';

const Login = () => {
  return (
    <div
      className="login route flex a-center j-center"
      style={{ width: '100vw', height: '90vh' }}
    >
      <AuthForm email password />
    </div>
  );
};

export default Login;
