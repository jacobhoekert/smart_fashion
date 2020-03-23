import React from 'react';
import '../styles/form_style_card.scss';

const FormStyleCard= (props) => {

  const handleClick = (e) => {
    props.handleClick(e);
    props.setClicked(e.currentTarget.id);
  }

  return (
    <div onClick={handleClick} id={props.id} 
      className={
        `form-style-card ${props.id == props.clicked && "selected-style"}
        ${props.columnStyle}
      `} 
    >
      <img className="form-style-image"
        src={props.image}
        alt={props.alt}
        width="100%"
        height="auto"
      />
      <h4 className="form-style-title">{props.title}</h4>
      {props.desc && <p className="form-style-desc">{props.desc}</p>}
    </div>
  )
}

export default FormStyleCard