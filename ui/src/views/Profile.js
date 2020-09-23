import React from 'react';
import PostList from '../components/PostList/PostList';
import UserCard from '../components/UserCard/UserCard';
import useProfile from '../hooks/useProfile';

const Profile = () => {
  const profile = useProfile();
  return (
    <div className="profile-page route">
      {profile.status === 200 && (
        <>
          <UserCard {...profile} self />
          <PostList posts={profile.created} />
        </>
      )}
    </div>
  );
};

export default Profile;
