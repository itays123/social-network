import React, { useState, useEffect, createContext, useContext } from 'react';
import { gql, useQuery } from '@apollo/client';

const PROFILE_QUERY = gql`
  {
    Profile {
      _id
      name
      avatarUrl
    }
  }
`;

const ProfileContext = createContext();

export function ProfileContextProvider({ children }) {
  const { data, loading } = useQuery(PROFILE_QUERY);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    setStatus(() => {
      if (data?.Profile) return 200;
      else if (loading) return 0;
      else return 401;
    });
  }, [data, loading]);

  return (
    <ProfileContext.Provider
      value={{
        profile: data?.Profile || {},
        status,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export default function useProfile() {
  const { profile, status } = useContext(ProfileContext);
  return { ...profile, status };
}
