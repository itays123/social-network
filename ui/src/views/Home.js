import React from 'react';
import CreatePost from '../components/CreatePost/CreatePost';
import PostList from '../components/PostList/PostList';
import useFeed from '../hooks/useFeed';

const Home = () => {
  const { feed, refetch } = useFeed();
  return (
    <div className="home route">
      <CreatePost refetchPosts={refetch} />
      <PostList posts={feed} refetchPosts={refetch} />
    </div>
  );
};

export default Home;
