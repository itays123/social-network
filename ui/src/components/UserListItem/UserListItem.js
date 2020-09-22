import React from 'react';
import ProfilePic from '../ProfilePic/ProfilePic';
import { useHistory } from 'react-router-dom';
import './UserListItem.css';

const UserListItem = ({ _id, name, isFollowing, avatarUrl }) => {
  const history = useHistory();
  return (
    <li
      className="user-list-item flex a-center"
      onClick={() => history.push(`/u/${_id}`)}
    >
      <div className="profile">
        <ProfilePic url={avatarUrl} />
      </div>
      <div className="flex column j-center">
        <h5>{name}</h5>
        {isFollowing && <p>following</p>}
      </div>
    </li>
  );
};

export default UserListItem;
