import React from 'react';

const Image = (props) => (
  <div className={props.className}>
    {props.src ?
      <img src={`${API_ENDPOINT}/image/${props.src}`} alt={props.alt} />
    : null}
  </div>
);

Image.propTypes = {
  src: React.PropTypes.string,
  className: React.PropTypes.string,
  alt: React.PropTypes.string,
  size: React.PropTypes.number,
};

export default Image;
