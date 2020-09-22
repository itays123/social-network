import React from 'react';
import { useParams } from 'react-router-dom';
import PostList from '../components/PostList/PostList';
import UserCard from '../components/UserCard/UserCard';
import useUser from '../hooks/useUser';

const User = () => {
  const { id } = useParams();
  const user = useUser(id);
  return (
    <div className="user route">
      {!user.loading && user.isFound && (
        <>
          <UserCard {...user} id={id} />
          <PostList posts={user.created} />
        </>
      )}
    </div>
  );
};

export default User;
