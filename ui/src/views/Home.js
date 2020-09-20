import React from 'react';
import CreatePost from '../components/CreatePost/CreatePost';
import PostList from '../components/PostList/PostList';
import useFeed from '../hooks/useFeed';

const Home = () => {
  const { feed } = useFeed();
  return (
    <div className="home route">
      <CreatePost />
      <PostList posts={feed} />
    </div>
  );
};

export default Home;
