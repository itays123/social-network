import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Like from '../Like/Like';

const Author = ({ author }) => (
  <Link to={`/author/${author._id}`}>{author.name}</Link>
);

const Post = ({ content, Author: author, date, likes, isLiked }) => {
  return (
    <div className="post flex column a-stretch">
      <header>
        <Author author={author} />
        <div className="date">{moment(new Date(date.formatted)).fromNow()}</div>
      </header>
      <main>
        <p>{content}</p>
      </main>
      <footer className="flex a-center">
        <div className="likes flex">
          <Like isLiked={isLiked} />
          <span>{likes}</span>
        </div>
      </footer>
    </div>
  );
};

export default Post;
