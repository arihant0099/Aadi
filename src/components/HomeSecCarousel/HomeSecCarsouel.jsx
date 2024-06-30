import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeCard from "../HomeSectionCard/HomeCard";
import "react-alice-carousel/lib/alice-carousel.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";

const HomeSecCarousel = ({ data,section_Name }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 2.5 },
    720: { items: 3.8 },
    1024: {items : 5.5},
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const syncActiveIndex = ({ item }) => {
    setActiveIndex(item);
  };

  const items = data.slice(0, 10).map((item, index) => (
    <HomeCard key={index} product={item} />
  ));

  return (
    <div className="border">
      <h2 className="text-3xl font-bold text-black-600 py-5 text-center">{section_Name}</h2>
      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex < items.length - 5 && (
          <Button
            onClick={slideNext}
            variant="contained"
            className="z-40"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
        {activeIndex > 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            className="z-40"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(-90deg)",
              bgcolor: "white",
            }}
            aria-label="prev"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSecCarousel;
