import React from 'react';
import '../styles/short_banner.scss';

const ShortBanner = (props) => {
  return (
    <div>
      <section id="short-banner-section" style={{backgroundImage: `url(${props.image})`}}>
        <div id="short-banner-overlay">
          <div id="short-tagline-container">
            <h1 id="tagline-text">{props.text}</h1>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ShortBanner