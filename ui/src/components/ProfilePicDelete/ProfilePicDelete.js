import React, { useRef, useState } from 'react';
import Hovering from '../Hovering/Hovering';
import './ProfilePicDelete.css';

const ProfilePicDelete = ({ remove, top, left }) => {
  const [showHovering, setShowHovering] = useState();
  const ref = useRef();
  return (
    <div className="profile-delete" style={{ top, left }} ref={ref}>
      <button onClick={() => setShowHovering(true)}></button>
      {showHovering && (
        <Hovering element={ref} onDismiss={() => setShowHovering(false)}>
          confirmation!
        </Hovering>
      )}
    </div>
  );
};

export default ProfilePicDelete;
