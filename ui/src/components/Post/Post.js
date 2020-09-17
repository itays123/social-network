import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Author = ({ author }) => (
  <Link to={`/author/${author.id}`}>{author.name}</Link>
);

/**
 *
 * @param {{content: string}} param0
 */
const Content = ({ content }) => {
  let result;
  if (content.length > 30) {
    result = content.slice(0, 27) + '...';
  } else result = content;
  return <p>{result}</p>;
};

const Post = ({ title, content, Author, date }) => {
  return (
    <div className="post flex column a-center">
      <header>
        <Author author={Author} />
      </header>
      <div className="title">
        <h3>{title}</h3>
      </div>
      <div className="content">
        <Content content={content} />
      </div>
      <div className="date">{moment(new Date(date)).fromNow()}</div>
    </div>
  );
};

export default Post;
