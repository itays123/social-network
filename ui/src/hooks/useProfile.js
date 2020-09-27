import React, { useState, useEffect, createContext, useContext } from 'react';
import { gql, useQuery } from '@apollo/client';

const PROFILE_QUERY = gql`
  {
    Profile {
      _id
      name
      avatarUrl
      followerCount
      followingCount
      created {
        _id
        content
        gallery
        date {
          formatted
        }
        Author {
          _id
          name
          avatarUrl
        }
        likes
        isLiked
        commentCount
        Comments(first: 3) {
          _id
          content
          Author {
            name
            avatarUrl
            _id
          }
        }
      }
    }
  }
`;

const ProfileContext = createContext();

export function ProfileContextProvider({ children }) {
  const { data, loading, refetch } = useQuery(PROFILE_QUERY);
  const [profile, setProfile] = useState({});
  const [status, setStatus] = useState(0);

  useEffect(() => {
    setProfile(p => {
      if (data?.Profile) return data.Profile;
      else if (p._id) return p;
      else return {};
    });
    setStatus(() => {
      if (data?.Profile || profile._id) return 200;
      else if (loading) return 0;
      else return 401;
    });
  }, [data, loading, profile]);

  return (
    <ProfileContext.Provider
      value={{
        profile,
        status,
        refetch,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export default function useProfile() {
  const { profile, status, refetch } = useContext(ProfileContext);
  return { ...profile, status, refetch };
}
