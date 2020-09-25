import React, { useState } from 'react';
import './CreatePost.css';
import useProfile from '../../hooks/useProfile';
import ProfilePic from '../ProfilePic/ProfilePic';
import ResizeableTextArea from '../ResizeableTextArea/ResizeableTextArea';
import { usePost } from '../../hooks/usePost';

const CreatePost = () => {
  const { avatarUrl, name } = useProfile();
  const [content, setContent] = useState('');
  const { post } = usePost();
  const placeHolder = `What's on your mind, ${name ? name.split(' ')[0] : ''}?`;
  return (
    <div className="create-post">
      <form
        onSubmit={e => {
          e.preventDefault();
          post([], content);
        }}
      >
        <div className="text flex a-stretch">
          <div className="profile">
            <ProfilePic url={avatarUrl} />
          </div>
          <div className="rta-container">
            <ResizeableTextArea
              onChange={c => setContent(c)}
              placeholder={placeHolder}
            />
          </div>
        </div>
        <div className="flex a-center j-center">
          <button>Post</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
