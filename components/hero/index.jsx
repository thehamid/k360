"use client";
import {useState,useEffect} from "react";
import CardHero from "./cardhero";
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

const Hero = () => {
  const [heroInfo, setheroInfo] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/articles/hero')

      const data = await response.json()

      setheroInfo(data)
    }

    fetchData()
  }, [])

 

  return (
    <div>
      <div className="flex justify-between mt-2 mb-2">
        <Swiper
          dir="rtl"
          spaceBetween={10}
          slidesPerView={1}
          loop="true"
          centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
          className="sliderhero"
          breakpoints={{
            680: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 2.5,
              spaceBetween:20,
            },
          }}
        >
          {heroInfo.map((da, i) => (
            <SwiperSlide>
              <CardHero key={i} data={da} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
};

export default Hero;
