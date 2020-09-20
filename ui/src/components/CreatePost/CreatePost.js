import React from 'react';
import './CreatePost.css';
import useProfile from '../../hooks/useProfile';
import ProfilePic from '../ProfilePic/ProfilePic';
import ResizeableTextArea from '../ResizeableTextArea/ResizeableTextArea';

const CreatePost = () => {
  const { avatarUrl, name } = useProfile();
  const placeHolder = `What's on your mind, ${name ? name.split(' ')[0] : ''}?`;
  return (
    <div className="create-post">
      <form>
        <div className="text flex a-stretch">
          <div className="profile">
            <ProfilePic url={avatarUrl} />
          </div>
          <div className="rta-container">
            <ResizeableTextArea placeholder={placeHolder} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
