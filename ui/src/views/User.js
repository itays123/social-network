import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import PostList from '../components/PostList/PostList';
import UserCard from '../components/UserCard/UserCard';
import useProfile from '../hooks/useProfile';
import useUser from '../hooks/useUser';

const RedirectOnProfile = ({ currentUser, children }) => {
  const { _id } = useProfile();
  if (currentUser === _id) return <Redirect to="/profile" />;
  else return <>{children}</>;
};

const User = () => {
  const { id } = useParams();
  const user = useUser(id);
  return (
    <RedirectOnProfile currentUser={id}>
      <div className="user route">
        {!user.loading && user.isFound && (
          <>
            <UserCard {...user} id={id} />
            <PostList posts={user.created} />
          </>
        )}
      </div>
    </RedirectOnProfile>
  );
};

export default User;
