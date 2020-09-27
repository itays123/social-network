import React from 'react';
import Comment from '../Comment/Comment';
import './CommentList.css';

/**
 *
 * @param {{ comments: any[] }} param0
 */
const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      {comments.map(c => (
        <Comment key={c._id} {...c} />
      ))}
    </div>
  );
};

export default CommentList;
