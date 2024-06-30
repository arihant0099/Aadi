import React from 'react';
import { dataCarousel } from "./dataCarousel";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css"
const Carousel = () => {
    const items = dataCarousel.map((item)=> <img className='cursor-pointer w-full h-full object-cover' role='presentation' src={item.image} alt=''/>)
  return (
    <AliceCarousel
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={1000}
    infinite
    />
  );
}

export default Carousel;
