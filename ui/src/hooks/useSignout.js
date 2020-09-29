import useProfile from './useProfile';

export function useSignout() {
  const { refetch } = useProfile();
  return {
    signout: () => {
      localStorage.removeItem('token');
      refetch();
    },
  };
}
