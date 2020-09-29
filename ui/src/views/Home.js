import React from 'react';
import AuthOnly from '../components/AuthOnly/AuthOnly';
import CreatePost from '../components/CreatePost/CreatePost';
import PostList from '../components/PostList/PostList';
import useFeed from '../hooks/useFeed';

const Home = () => {
  const { feed, refetch } = useFeed();
  return (
    <div className="home route">
      <AuthOnly>
        <CreatePost refetchPosts={refetch} />
      </AuthOnly>
      <PostList posts={feed} refetchPosts={refetch} />
    </div>
  );
};

export default Home;
