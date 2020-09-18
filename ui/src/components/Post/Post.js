import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Like from '../Like/Like';
import { useLike } from '../../hooks/useLike';

const Author = ({ author }) => (
  <Link to={`/author/${author._id}`}>{author.name}</Link>
);

const Post = ({
  _id,
  content,
  Author: author,
  date,
  likes: initialLikes,
  isLiked: initialIsLiked,
}) => {
  const { likes, isLiked, toggle } = useLike(initialIsLiked, initialLikes, _id);
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
          <Like isLiked={isLiked} toggle={toggle} />
          <span>{likes}</span>
        </div>
      </footer>
    </div>
  );
};

export default Post;
