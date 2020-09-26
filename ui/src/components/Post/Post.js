import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Like from '../Like/Like';
import { useLike } from '../../hooks/useLike';
import ProfilePic from '../ProfilePic/ProfilePic';
import PostGallery from '../PostGallery/PostGallery';
import { useDeletePost } from '../../hooks/useDeletePost';
import deleteIcon from '../../assets/delete.svg';

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
  refetchPosts = () => {},
}) => {
  const { likes, isLiked, toggle } = useLike(initialIsLiked, initialLikes, _id);
  const { allowDelete, remove } = useDeletePost(refetchPosts, _id, author._id);
  return (
    <div className="post flex column a-stretch">
      <header className="flex a-stretch j-btwn">
        <div className="flex a-stretch">
          <div className="profile">
            <ProfilePic url={author.avatarUrl} />
          </div>
          <div>
            <Author author={author} />
            <div className="date">
              {moment(new Date(date.formatted)).fromNow()}
            </div>
          </div>
        </div>
        <div className="options">
          {allowDelete && (
            <button onClick={remove}>
              <img src={deleteIcon} alt="" />
            </button>
          )}
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
