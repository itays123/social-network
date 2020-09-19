import React from 'react';
import './ProfilePic.css';

const ProfilePic = ({ url }) => {
  if (!url) url = '';
  return (
    <div className="profile-picture">
      <div
        className="pic"
        style={{
          backgroundImage: `url(${url})`,
        }}
      ></div>
    </div>
  );
};

export default ProfilePic;
