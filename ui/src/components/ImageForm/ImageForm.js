import React from 'react';
import './ImageForm.css';

const isUrl = str =>
  // eslint-disable-next-line
  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(
    str
  );

const ImageForm = ({ onChange = () => {} }) => {
  return (
    <div className="image-form">
      <input
        type="text"
        placeholder="enter image url"
        onChange={e => {
          const { value } = e.target;
          if (isUrl(value)) onChange(value);
        }}
      />
    </div>
  );
};

export default ImageForm;
