import React from 'react';
import '../styles/style_card.scss';

const StyleCard= (props) => {
  return (
    <div className="style-card">
      <img className="style-image"
        src={props.image}
        alt={props.alt}
        width="100%"
        height="auto"
      />
      <h4 className="style-text">{props.title}</h4>
    </div>
  )
}

export default StyleCard