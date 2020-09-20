import React from 'react';
import { useParams } from 'react-router-dom';
import UserCard from '../components/UserCard/UserCard';
import useUser from '../hooks/useUser';

const User = () => {
  const { id } = useParams();
  const user = useUser(id);
  return (
    <div className="user route">
      <UserCard {...user} />
    </div>
  );
};

export default User;
