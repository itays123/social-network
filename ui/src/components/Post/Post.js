import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Like from '../Like/Like';
import { useLike } from '../../hooks/useLike';
import ProfilePic from '../ProfilePic/ProfilePic';
import PostGallery from '../PostGallery/PostGallery';

const Author = ({ author }) => (
  <Link to={`/u/${author._id}`}>{author.name}</Link>
);

const Post = ({
  _id,
  content,
  Author: author,
  date,
  likes: initialLikes,
  isLiked: initialIsLiked,
  gallery,
}) => {
  const { likes, isLiked, toggle } = useLike(initialIsLiked, initialLikes, _id);
  return (
    <div className="post flex column a-stretch">
      <header className="flex a-stretch">
        <div className="profile">
          <ProfilePic url={author.avatarUrl} />
        </div>
        <div>
          <Author author={author} />
          <div className="date">
            {moment(new Date(date.formatted)).fromNow()}
          </div>
        </div>
      </header>
      <main>
        <p>{content}</p>
        {gallery.length > 0 && <PostGallery gallery={gallery} />}
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
