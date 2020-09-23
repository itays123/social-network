import React from 'react';
import { useChangeAvatar } from '../../hooks/useChangeAvatar';
import ProfilePicDelete from '../ProfilePicDelete/ProfilePicDelete';
import ProfilePicEdit from '../ProfilePicEdit/ProfilePicEdit';
import './ProfilePic.css';

const ProfilePic = ({ url, size = 36, self }) => {
  const { avatarUrl, change, delete: remove } = useChangeAvatar(url);
  return (
    <div className="profile-picture-wrapper">
      <div
        className="profile-picture"
        style={{
          width: size,
          height: size,
        }}
      >
        <div
          className="pic"
          style={{
            width: size,
            height: size,
            backgroundImage: `url(${avatarUrl})`,
          }}
        ></div>
      </div>
      {self && (
        <>
          <ProfilePicEdit change={change} top={size - 24} left={size - 60} />
          <ProfilePicDelete remove={remove} top={size - 24} left={size - 30} />
        </>
      )}
    </div>
  );
};

export default ProfilePic;
