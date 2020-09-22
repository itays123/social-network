import React from 'react';
import UserListItem from '../UserListItem/UserListItem';
import './UserList.css';

/**
 * @param {{ users: any[] }} props
 */
const UserList = ({ users }) => {
  return (
    <ul className="user-list">
      {users.map(u => (
        <UserListItem {...u} key={u._id} />
      ))}
    </ul>
  );
};

export default UserList;
