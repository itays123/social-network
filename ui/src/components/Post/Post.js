import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Author = ({ author }) => (
  <Link to={`/author/${author.id}`}>{author.name}</Link>
);

const Post = ({ title, content, Author: author, date }) => {
  return (
    <div className="post flex column a-stretch">
      <header>
        <Author author={author} />
        <div className="date">{moment(new Date(date)).fromNow()}</div>
      </header>
      <main>
        <p>{content}</p>
      </main>
    </div>
  );
};

export default Post;
