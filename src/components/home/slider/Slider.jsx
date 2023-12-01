import React, { useEffect, useState } from "react";
import "./Slider.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Slider = () => {
  const images = [
    "https://images.bewakoof.com/uploads/grid/app/ik-1x1-new--1--1699607681.jpg",
    "https://images.bewakoof.com/uploads/grid/app/NEW-1x1-Joggers-1699357840.jpg",
    "https://images.bewakoof.com/uploads/grid/app/NEW-1x1-OversizedSweatshirts-common-1699594711.jpg",
    "https://images.bewakoof.com/uploads/grid/app/Women-Short-Tops-1x1-Banner-1699634146.jpg",
    "https://images.bewakoof.com/uploads/grid/app/NEW-1x1-KnitPerfection-sweater-common-1699625976.jpg",
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  //     useEffect(()=>{
  //         const sliderinterval = setInterval(nextSlide, 3000);

  //         return()=>{
  //             clearInterval(sliderinterval);
  //         }
  //     }, [images])
  //   return (
  //     <div id='slider-container'>
  //         <img src={images[current]}  className='slider-images'/>
  //         <img src={images[current+1]} className='slider-images'/>
  //         <img src={images[current+2]}  className='slider-images'/>
  //     </div>
  //   )

  const handleDragStart = (e) => {
    e.preventDefault();
  };

  const techResponsive = {
    0: { items: 1 },
    300: { items: 2 },
    600: { items: 3 },
  };

  const items = [
    {
      key: 1,
      imageSrc:
        "https://images.bewakoof.com/uploads/grid/app/ik-1x1-new--1--1699607681.jpg",
    },
    {
      key: 2,
      imageSrc:
        "https://images.bewakoof.com/uploads/grid/app/NEW-1x1-Joggers-1699357840.jpg",
    },
    {
      key: 3,
      imageSrc:
        "https://images.bewakoof.com/uploads/grid/app/NEW-1x1-OversizedSweatshirts-common-1699594711.jpg",
    },
    {
      key: 4,
      imageSrc:
        "https://images.bewakoof.com/uploads/grid/app/Women-Short-Tops-1x1-Banner-1699634146.jpg",
    },
    {
      key: 5,
      imageSrc:
        "https://images.bewakoof.com/uploads/grid/app/NEW-1x1-KnitPerfection-sweater-common-1699625976.jpg",
    },
  ];
  return (
    <div className="slider-container">
      <AliceCarousel
        mouseTracking
        items={items.map((item) => (
          <div key={item.key} >
            <img
              src={item.imageSrc}
              onDragStart={handleDragStart}
              role="presentation"
              className="slider-images"
            />
          </div>
        ))}
        responsive={techResponsive}
        controlsStrategy="alternate"
        autoPlay={true}
        autoPlayInterval={2000}
        infinite={true}
        animationDuration={1500}
        disableDotsControls={true}
        disableButtonsControls={true}
      />
    </div>
  );
};

export default Slider;
