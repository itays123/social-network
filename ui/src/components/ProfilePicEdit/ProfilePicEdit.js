import React, { useRef, useState } from 'react';
import Hovering from '../Hovering/Hovering';
import './ProfilePicEdit.css';

const ProfilePicEdit = ({ change, top, left }) => {
  const [showHovering, setShowHovering] = useState();
  const ref = useRef();
  return (
    <div className="profile-edit" style={{ top, left }} ref={ref}>
      <button onClick={() => setShowHovering(true)}></button>
      {showHovering && (
        <Hovering element={ref} onDismiss={() => setShowHovering(false)}>
          change form!
        </Hovering>
      )}
    </div>
  );
};

export default ProfilePicEdit;
