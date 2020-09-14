import React from 'react';
import Post from '../Post/Post';
import './PostList.css';

/**
 *
 * @param {{ posts: any[] }} param0
 */
const PostList = ({ posts }) => {
  return (
    <div className="posts flex column a-center">
      {posts.map(p => (
        <Post key={p._id} {...p} />
      ))}
    </div>
  );
};

export default PostList;
