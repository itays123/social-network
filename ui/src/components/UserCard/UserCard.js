import React from 'react';
import ProfilePic from '../ProfilePic/ProfilePic';
import './UserCard.css';

const UserCard = ({ name, avatarUrl, followingCount, followerCount }) => {
  return (
    <div className="card-wrapper">
      <div className="user-card flex a-stretch j-center">
        <div className="profile">
          <ProfilePic url={avatarUrl} size={108} />
        </div>
        <div>
          <h1>{name}</h1>
          <div className="numbers">
            {followingCount} following
            <span> &#8226; </span>
            {followerCount} followers
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
