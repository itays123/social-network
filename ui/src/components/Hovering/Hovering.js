import React, { useState, useEffect, useRef } from 'react';
import './Hovering.css';

function useOutsideAlerter(ref, callback = () => {}) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}

const Hovering = ({ element, children, onDismiss = () => {} }) => {
  const [{ x, y }, setDimen] = useState({ x: 0, y: 0 });
  const ref = useRef({ clientWidth: 0 });
  useEffect(() => {
    const offset = element.current.getBoundingClientRect();
    setDimen(offset);
  }, [element]);
  useOutsideAlerter(ref, onDismiss);
  return (
    <div
      className="hovering flex column a-center"
      style={{
        top: y + (element.current.clientHeight || 0) + 4,
        left:
          x +
          ((element.current.clientWidth || 0) -
            (ref.current.clientWidth || 0)) /
            2,
      }}
    >
      <div className="dec">▲</div>
      <div className="hovering-content" ref={ref}>
        {children}
      </div>
    </div>
  );
};

export default Hovering;
