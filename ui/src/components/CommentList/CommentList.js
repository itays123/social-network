import React from 'react';
import { useDeleteComment } from '../../hooks/useDeleteComment';
import Comment from '../Comment/Comment';
import './CommentList.css';

/**
 *
 * @param {{ comments: any[], postAuthorId: any }} param0
 */
const CommentList = ({ comments, postAuthorId }) => {
  const { remove, allowDelete } = useDeleteComment(postAuthorId);
  return (
    <div className="comment-list">
      {comments.map(c => (
        <Comment
          key={c._id}
          {...c}
          allowDelete={allowDelete(c.Author._id)}
          remove={() => remove(c._id)}
        />
      ))}
    </div>
  );
};

export default CommentList;
