import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LuEye } from "react-icons/lu";

const EpisodeCard = ({ data , media_slug }) => {
  return (
    <div className="w-relative z-10 w-full max-w-xs overflow-hidden rounded-lg pb-4 m-3">
      <Link className="block" href={`/media/${media_slug}/season-${data.season_number}/${data.slug}`}>
        <Image
          className="h-40 w-full object-cover"
          src={data.cover}
          alt={data.name}
          width={350}
          height={180}
        />
      </Link>
      <div className="card flex items-center justify-between rounded-b-lg bg-zinc-800 shadow-md z-20 overflow-visible p-5">
        <Link className="relative" href={`/media/${media_slug}/season-${data.season_number}/${data.slug}`}>
          <h2 className="leading-none">{data.name}</h2>
          <span className="text-xs text-gray-400">{data.airdate}</span>
              </Link>
              
              <div className="relative flex flex-col items-center group">
               <button data-tooltip-target="tooltip-animation" className="btn z-20 border-[1px] text-primary text-white btn-sm border-red-700 p-2">
          <LuEye />
        </button>
              
        <div className="absolute bottom-3  flex-col items-center hidden mb-6 group-hover:flex">
			<span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">دیده‌ام</span>
			<div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
		</div> 

              </div>     
       
       
      </div>
    </div>
  );
};

export default EpisodeCard;
