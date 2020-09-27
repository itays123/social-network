import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePic from '../ProfilePic/ProfilePic';
import './Comment.css';
import deleteIcon from '../../assets/delete.svg';

const Author = ({ author }) => (
  <Link to={`/u/${author._id}`}>{author.name}</Link>
);

const Comment = ({ content, Author: author, allowDelete, remove }) => {
  return (
    <div className="comment">
      <div className="flex a-center j-btwn">
        <div className="flex a-center">
          <div className="profile">
            <ProfilePic size={24} url={author.avatarUrl} />
          </div>
          <Author author={author} />
        </div>
        <div className="options">
          {allowDelete && (
            <button onClick={remove}>
              <img src={deleteIcon} alt="" />
            </button>
          )}
        </div>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default Comment;
