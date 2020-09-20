import React from 'react';
import { useParams } from 'react-router-dom';
import useUser from '../hooks/useUser';

const User = () => {
  const { id } = useParams();
  const { name } = useUser(id);
  return <div className="user route">{name}</div>;
};

export default User;
