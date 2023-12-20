import style from "./OurProjects.module.scss";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function OurProjects() {
  return (
    <div className={style.container} id="projects">
      <h1>مشاريعنا</h1>

      <div>
        <Swiper
          loop={true} // Enable loop mode
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow]}
          className="mySwiper"
        >
          <SwiperSlide className="swiper-slide2">
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            <p>مركز الملك عبد العزيز للمؤتمرات</p>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide2">
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            <p>مركز الملك عبد العزيز للمؤتمرات</p>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide2">
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            <p>مركز الملك عبد العزيز للمؤتمرات</p>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide2">
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            <p>مركز الملك عبد العزيز للمؤتمرات</p>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide2">
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            <p>مركز الملك عبد العزيز للمؤتمرات</p>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide2">
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            <p>مركز الملك عبد العزيز للمؤتمرات</p>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide2">
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            <p>مركز الملك عبد العزيز للمؤتمرات</p>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide2">
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            <p>مركز الملك عبد العزيز للمؤتمرات</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
