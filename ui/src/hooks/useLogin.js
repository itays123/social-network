import { useEffect } from 'react';
import { gql } from '@apollo/client';
import { useLazyQuery } from '@apollo/client';
import useProfile from './useProfile';

const LOGIN_QUERY = gql`
  query EmailPasswordLogin($email: String, $password: String) {
    Login(email: $email, password: $password)
  }
`;

export function useLogin() {
  const [Login, { data, error }] = useLazyQuery(LOGIN_QUERY);
  const { refetch } = useProfile();

  useEffect(() => {
    if (data?.Login) {
      localStorage.setItem('token', data.Login);
      refetch();
    }
  }, [data, refetch]);

  return {
    error,
    login: credentials => Login({ variables: credentials }),
  };
}
