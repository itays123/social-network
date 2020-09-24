import React, { useRef, useState } from 'react';
import Hovering from '../Hovering/Hovering';
import ImageForm from '../ImageForm/ImageForm';
import './ProfilePicEdit.css';

const ProfilePicEdit = ({ change, top, left }) => {
  const [showHovering, setShowHovering] = useState();
  const [newUrl, setImageUrl] = useState('');
  const ref = useRef();
  return (
    <div className="profile-edit" style={{ top, left }} ref={ref}>
      <button onClick={() => setShowHovering(true)}></button>
      {showHovering && (
        <Hovering element={ref} onDismiss={() => setShowHovering(false)}>
          <form
            onSubmit={e => {
              e.preventDefault();
              if (newUrl && newUrl !== '') change(newUrl);
              setImageUrl('');
              setShowHovering(false);
            }}
          >
            <ImageForm onChange={url => setImageUrl(url)} />
            <button>Change</button>
          </form>
        </Hovering>
      )}
    </div>
  );
};

export default ProfilePicEdit;
