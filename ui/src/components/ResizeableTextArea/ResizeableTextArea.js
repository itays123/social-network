import React, { useLayoutEffect, useRef, useState } from 'react';
import './ResizeableTextArea.css';

const ResizeableTextArea = ({ placeholder, onChange = () => {} }) => {
  const ref = useRef({ scrollHeight: 37 });
  const [refHeight, setHeight] = useState(ref.current.scrollHeight);
  const updateHeight = () => {
    setHeight('auto');
    setHeight(ref.current.scrollHeight);
  };

  useLayoutEffect(updateHeight, [ref]);
  return (
    <textarea
      className="resizeable"
      ref={ref}
      placeholder={placeholder || ''}
      onChange={e => {
        updateHeight();
        onChange(e.target.value);
      }}
      onKeyDown={() => setTimeout(updateHeight, 0)}
      onPaste={() => setTimeout(updateHeight, 0)}
      onCut={() => setTimeout(updateHeight, 0)}
      onDrop={() => setTimeout(updateHeight, 0)}
      style={{
        height: refHeight,
      }}
    />
  );
};

export default ResizeableTextArea;
