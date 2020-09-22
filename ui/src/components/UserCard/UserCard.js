import React from 'react';
import { useFollow } from '../../hooks/useFollow';
import ProfilePic from '../ProfilePic/ProfilePic';
import './UserCard.css';

const UserCard = ({
  name,
  avatarUrl,
  followingCount,
  followerCount: initialFollowerCount,
  isFollowing: initialIsFollowing,
  id,
}) => {
  const { followerCount, isFollowing } = useFollow(
    initialIsFollowing,
    initialFollowerCount,
    id
  );
  console.log(isFollowing);
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
