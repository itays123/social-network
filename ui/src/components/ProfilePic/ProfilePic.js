import React from 'react';
import './ProfilePic.css';

const ProfilePic = ({ url, size = 36 }) => {
  if (!url) url = '';
  return (
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
          backgroundImage: `url(${url})`,
        }}
      ></div>
    </div>
  );
};

export default ProfilePic;
