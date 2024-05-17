"use client";
import {  useState, useEffect } from "react";
import "swiper/css";
import 'swiper/css/navigation';
import axios from "axios";
import Image from 'next/image'
import Link from 'next/link'
import Loading from '@/components/elements/loading'



const Casts = ({ media_id}) => {
    const [allCast, setallCast] = useState(-1);


    useEffect(() => {
        getData();
      }, []);
      //get
      async function getData() {
        await axios
          .get(`/api/medias/casts/${media_id}`)
          .then((d) => {
            setallCast(d.data.data);
          })
          .catch((e) => {
            console.log(e.response);
            setallCast(-2);
          });
      }


  


 
  return (
    
    <div className="grid grid-cols-3 gap-4">

     {allCast == -1 ? (
          <Loading/>
        ) : allCast == -2 ? (
          <Loading/>
        ) : (
            allCast.map((cast, i) => (
              cast.person_cat == "بازیگر" ? 
          <Link href={`/person/${cast.person_id.slug}`} className="flex flex-col justify-center gap-2 md:flex-row md:justify-start" >
              <div className="p-1">
                <Image
                  src={cast.thumb}
                  width={80}
                  height={80}
                  className="rounded-md w-20 h-20 "
                /> 
              </div>
              <div className="p-1 flex flex-col justify-center gap-2">
                        <span className="font-bold text-gray-50 text-sm">{cast.person_id.name }</span>
                        <span className="text-gray-300 text-xs ">{cast.role_name }</span>
              </div>
                </Link>
                :''
        )))}
     
     </div>
  )
};

export default Casts;
