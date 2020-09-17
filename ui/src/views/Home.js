import React from 'react';
import PostList from '../components/PostList/PostList';
import useFeed from '../hooks/useFeed';

const Home = () => {
  const { feed } = useFeed();
  return (
    <div className="home route">
      <PostList posts={feed} />
    </div>
  );
};

export default Home;
