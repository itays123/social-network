import { useEffect } from 'react';
import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client';
import useProfile from './useProfile';

const REGISTER_QUERY = gql`
  mutation Register(
    $email: String
    $password: String
    $name: String
    $avatarUrl: String
  ) {
    Signup(
      email: $email
      password: $password
      name: $name
      avatarUrl: $avatarUrl
    )
  }
`;

export function useRegister() {
  const [Register, { data, error }] = useMutation(REGISTER_QUERY);
  const { refetch } = useProfile();

  useEffect(() => {
    if (data?.Signup) {
      localStorage.setItem('token', data.Signup);
      refetch();
    }
  }, [data, refetch]);

  return {
    error,
    register: credentials =>
      Register({ variables: { ...credentials, avatarUrl: '' } }),
  };
}
