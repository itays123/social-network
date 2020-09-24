import React from 'react';
import useProfile from '../../hooks/useProfile';
import { Redirect } from 'react-router-dom';

const AuthOnly = ({ children, reversed, redirect }) => {
  const { status } = useProfile();
  const showChildren =
    (status === 200 && !reversed) || // if authenticated, and not reversed
    (status === 401 && reversed); // or if not autenticated, but reversed
  if (!showChildren) {
    if (redirect) {
      return <Redirect to={redirect} />;
    }
    return null;
  }
  return <React.Fragment>{children}</React.Fragment>;
};

export default AuthOnly;
