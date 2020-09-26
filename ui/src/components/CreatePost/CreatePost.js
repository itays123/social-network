import React, { useState } from 'react';
import './CreatePost.css';
import useProfile from '../../hooks/useProfile';
import ProfilePic from '../ProfilePic/ProfilePic';
import ResizeableTextArea from '../ResizeableTextArea/ResizeableTextArea';
import { usePost } from '../../hooks/usePost';
import PostGalleryForm from '../PostGalleryForm/PostGalleryForm';
import { motion } from 'framer-motion';

const CreatePost = ({ refetchPosts }) => {
  const { avatarUrl, name } = useProfile();
  const [content, setContent] = useState('');
  const [gallery, setGallery] = useState([]);
  const [expand, setExpand] = useState(false);
  const { post } = usePost(refetchPosts);
  const placeHolder = `What's on your mind, ${name ? name.split(' ')[0] : ''}?`;
  return (
    <div className="create-post" data-expanded={expand}>
      <form onSubmit={e => e.preventDefault()}>
        <div className="text flex a-stretch">
          <div className="profile">
            <ProfilePic url={avatarUrl} />
          </div>
          <div className="rta-container">
            <ResizeableTextArea
              onChange={c => {
                setContent(c);
                setExpand(c.trim() !== '');
              }}
              value={content}
              placeholder={placeHolder}
            />
          </div>
        </div>
        <motion.div
          className="expanded"
          layout
          transition={{
            type: 'spring',
            stiffness: 700,
            damping: 30,
          }}
        >
          <div className="pictures">
            <p>Add Pictures</p>
            <PostGalleryForm onChange={v => setGallery(v)} />
          </div>
          <div className="flex j-end">
            <button
              className="submit"
              onClick={() => {
                post(gallery, content);
                setContent('');
                setGallery([]);
                setExpand(false);
              }}
            >
              Post
            </button>
          </div>
        </motion.div>
      </form>
    </div>
  );
};

export default CreatePost;
