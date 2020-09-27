import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePic from '../ProfilePic/ProfilePic';
import './Comment.css';

const Author = ({ author }) => (
  <Link to={`/u/${author._id}`}>{author.name}</Link>
);

const Comment = ({ content, Author: author }) => {
  return (
    <div className="comment">
      <div className="flex a-center">
        <div className="profile">
          <ProfilePic size={24} url={author.avatarUrl} />
        </div>
        <Author author={author} />
      </div>
      <p>{content}</p>
    </div>
  );
};

export default Comment;
