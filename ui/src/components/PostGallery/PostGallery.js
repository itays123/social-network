import React from 'react';
import './PostGallery.css';

/**
 *
 * @param {{ gallery: string[] }} props
 */
const PostGallery = ({ gallery }) => {
  return (
    <div className="gallery">
      {gallery.map((url, i) => (
        <img src={url} key={i} alt="" height={150} width="auto" />
      ))}
    </div>
  );
};

export default PostGallery;
