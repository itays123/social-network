import React from 'react';
import Post from '../Post/Post';
import './PostList.css';

/**
 *
 * @param {{ posts: any[], refetchPosts: Function }} param0
 */
const PostList = ({ posts, refetchPosts = () => {} }) => {
  return (
    <div className="posts flex column a-stretch">
      {posts.map(p => (
        <Post key={p._id} {...p} refetchPosts={refetchPosts} />
      ))}
    </div>
  );
};

export default PostList;
