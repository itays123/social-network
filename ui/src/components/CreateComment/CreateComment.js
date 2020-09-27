import React, { useState } from 'react';
import useProfile from '../../hooks/useProfile';
import ProfilePic from '../ProfilePic/ProfilePic';
import ResizeableTextArea from '../ResizeableTextArea/ResizeableTextArea';
import './CreateComment.css';
import { motion } from 'framer-motion';

const CreateComment = ({ comment }) => {
  const { name, avatarUrl } = useProfile();
  const [content, setContent] = useState('');
  const [expand, setExpand] = useState(false);
  const placeHolder = `what are your thoughts, ${
    name ? name.split(' ')[0] : ''
  }`;
  return (
    <div className="create-comment" data-expand={expand}>
      <form onSubmit={e => e.preventDefault()}>
        <div className="text flex a-stretch">
          <div className="profile">
            <ProfilePic url={avatarUrl} />
          </div>
          <div className="rta-container">
            <ResizeableTextArea
              onChange={c => {
                setContent(c);
                setExpand(() => c.trim() !== '');
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
          <div className="submit flex j-end">
            <button
              onClick={() => {
                comment(content);
                setContent('');
                setExpand(false);
              }}
            >
              Comment
            </button>
          </div>
        </motion.div>
      </form>
    </div>
  );
};

export default CreateComment;
