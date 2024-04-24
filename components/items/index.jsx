"use client";
import React from 'react';
import Item from "./item";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';

const Items = (props) => {
 
  return (
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        className="itemSlider !overflow-visible"
        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
       768: {
            slidesPerView: 5,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 7.5,
            spaceBetween: 35,
          },
        }}
      >


        {props.newItems.map((da, i) => (
          <SwiperSlide>
            <Item data={da} key={i} />
          </SwiperSlide>
        ))}
      </Swiper>
 
  );
};

export default Items;
