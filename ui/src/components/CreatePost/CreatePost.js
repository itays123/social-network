import React, { useState } from 'react';
import './CreatePost.css';
import useProfile from '../../hooks/useProfile';
import ProfilePic from '../ProfilePic/ProfilePic';
import ResizeableTextArea from '../ResizeableTextArea/ResizeableTextArea';
import { usePost } from '../../hooks/usePost';

const CreatePost = ({ refetchPosts }) => {
  const { avatarUrl, name } = useProfile();
  const [content, setContent] = useState('');
  const [expand, setExpand] = useState(false);
  const { post } = usePost(refetchPosts);
  const placeHolder = `What's on your mind, ${name ? name.split(' ')[0] : ''}?`;
  return (
    <div className="create-post">
      <form
        className={expand ? 'expanded' : 'minified'}
        onSubmit={e => {
          e.preventDefault();
          post([], content);
          setContent('');
          setExpand(false);
        }}
      >
        <div className="text flex a-stretch">
          <div className="profile">
            <ProfilePic url={avatarUrl} />
          </div>
          <div className="rta-container">
            <ResizeableTextArea
              onChange={c => setContent(c)}
              value={content}
              onFocus={() => setExpand(true)}
              onBlur={() => setExpand(() => content.trim() !== '')}
              placeholder={placeHolder}
            />
          </div>
        </div>
        {expand && (
          <div className="expanded">
            <div className="flex j-end">
              <button>Post</button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default CreatePost;
