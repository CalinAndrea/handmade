import React from 'react';
import { Zoom } from 'react-slideshow-image';


import './image.slide.show.styles.scss';

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
}

const Slideshow = ({ images }) => {
  return (
    <div className="slide-container">
      <Zoom {...zoomOutProperties}>
        {
          images.map((each, index) => <img key={index} style={{ width: "100%" }} src={each} />)
        }
      </Zoom>
    </div>
  )
}

export default Slideshow;