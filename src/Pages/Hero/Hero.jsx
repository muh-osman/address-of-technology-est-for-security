import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Import the autoplay styles


// import "./styles.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Images
import slide1 from "../../assets/images/slide-1.webp";
import slide2 from "../../assets/images/slide-2.webp";
import slide3 from "../../assets/images/slide-3.webp";

export default function Hero() {
  return (
    <>
      <Swiper
        loop={true} // Enable loop mode
        pagination={{
          type: "progressbar",
        }}
        navigation={false}
        autoplay={{
          delay: 2500, // Delay between transitions (in ms).
          disableOnInteraction: false, // Continue autoplay when the swiper is interacted with.
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="slide" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
