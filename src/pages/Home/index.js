import React from 'react';
import Wrapper from "../../components/Wrapper";
import Carousel from "../../components/Carousel";
import Img1 from '../../assets/carousel/1.jpg';
import Img2 from '../../assets/carousel/2.jpg';
import Img3 from '../../assets/carousel/3.jpg';
import Img4 from '../../assets/carousel/4.jpg';
import Img5 from '../../assets/carousel/5.jpg';
import './index.css';

function index() {
  const ImgArray=[
    Img1,Img2,Img3,Img4,Img5
  ]
  return (
    <Wrapper>
      <div className='home'>
       <Carousel ImgArray={ImgArray}/>
      </div>
    </Wrapper>
  )
}

export default index
