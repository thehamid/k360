"use client";
import {  useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import axios from "axios";
import EpisodeCard from './card'

const Episodes = ({ media_id, media_slug }) => {
    const [allEpisode, setallEpisode] = useState(-1);


    useEffect(() => {
        getData();
      }, []);
      //get
      async function getData() {
        await axios
          .get(`/api/medias/episodes/${media_id}`)
          .then((d) => {
            setallEpisode(d.data.data);
          })
          .catch((e) => {
            console.log(e.response);
            setallEpisode(-2);
          });
      }


  


 
  return (
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation={false}
        modules={[Navigation]}
        className="itemSlider "
        breakpoints={{
          320: {
            slidesPerView:2,
            spaceBetween: 10,
          },
       768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >


     {allEpisode == -1 ? (
          <p>Loading...</p>
        ) : allEpisode == -2 ? (
          <p>Error...</p>
        ) : (
          allEpisode.map((ep, i) => (
          <SwiperSlide key={i}>
           
             <EpisodeCard  data={ep} media_slug={media_slug} />
            
          </SwiperSlide>
        )))}
      </Swiper>
 
  );
};

export default Episodes;
