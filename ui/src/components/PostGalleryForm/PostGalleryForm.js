import React, { useRef, useState } from 'react';
import Hovering from '../Hovering/Hovering';
import ImageForm from '../ImageForm/ImageForm';
import './PostGalleryForm.css';

const PostGalleryForm = ({ onChange = () => {} }) => {
  const [gallery, setGallery] = useState([]);
  const ref = useRef();
  const [showHovering, setShowHovering] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  return (
    <div className="post-gallery-form flex">
      <div className="add-picture">
        <div
          className="clickme flex a-center j-center"
          onClick={() => setShowHovering(true)}
        >
          <span ref={ref}>+</span>
        </div>
        {showHovering && (
          <Hovering element={ref} onDismiss={() => setShowHovering(false)}>
            <ImageForm onChange={url => setCurrentUrl(url)} />
            <div
              className="add-pic"
              onClick={() => {
                onChange([currentUrl, ...gallery]);
                setGallery(g => [currentUrl, ...g]);
                setCurrentUrl('');
                setShowHovering(false);
              }}
            >
              ADD
            </div>
          </Hovering>
        )}
      </div>
      <div className="preview-container">
        {gallery.map(url => (
          <div key={url} className="preview">
            <img src={url} alt="" height={150} width="auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostGalleryForm;
