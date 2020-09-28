import React, { useState } from 'react';
import AuthForm from '../components/AuthForm/AuthForm';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
  const [credentials, setCredentials] = useState({});
  const { login } = useLogin();
  return (
    <div
      className="login route flex a-center j-center"
      style={{ width: '100vw', height: '90vh' }}
    >
      <AuthForm
        email
        password
        onChange={c => setCredentials(c)}
        values={credentials}
        onSubmit={() => {
          console.log('submit');
          login(credentials);
        }}
      />
    </div>
  );
};

export default Login;
