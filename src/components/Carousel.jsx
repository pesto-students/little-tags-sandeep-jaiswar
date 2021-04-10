import React, { useState } from 'react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import '../styles/components/Carousel.css'

function Carousel({ ImgArray }) {
  const [current, setCurrent] = useState(0);
  const totalImgs = ImgArray.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? totalImgs - 1 : current - 1)
  }

  const nextSlide = () => {
    setCurrent(current === totalImgs - 1 ? 0 : current + 1);
  }

  console.log(current)

  if (ImgArray.length === 0) {
    return null;
  }

  return (
    <div className="carousel">
      <IoIosArrowDropleftCircle className="leftArrow" onClick={prevSlide} />
      {ImgArray.map((slide, index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && <img src={slide} alt="slide" />}
          </div>
        )
      })}
      <IoIosArrowDroprightCircle className="rightArrow" onClick={nextSlide} />
    </div>
  )
}

export default Carousel
