"use client";
import { useState, useEffect } from "react";
import Loading from '@/components/elements/loading'
import Photos from "@/components/media/photos";
import axios from "axios";

const EpisodeMain = ({media_id,season_number,episode_number }) => {
    const [episode, setEpisode] = useState(-1);


    useEffect(() => {
        getEpisode()
    }, []);
    
    //get Seasons
    async function getEpisode() {
        await axios
          .get(`/api/medias/seasons/${media_id}/${season_number}/${episode_number}`)
          .then((d) => {
              setEpisode(d.data.data[0]);
              console.log(d.data.data)
          })
          .catch((e) => {
            console.log(e.response);
            setEpisode(-2);
          });
      }

  return (
                           
    <div className="col-span-8 space-y-6 lg:col-span-4 mt-5">   
      {(episode == -1) ? <Loading /> : (episode == -2) ? <Loading /> :
        <div>
              <div className="expert">
                <div className="flex items-center justify-start">
                  <h2 className="pinline text-base font-normal capitalize dark:font-extrabold dark:text-white mb-2">  {`فصل ${season_number} `} - {episode.name}</h2>
                </div>
                <div className="h-auto min-h-20 rounded-md p-2 w-full bg-zinc-800">
                {episode.summary_episode }
                </div>
              </div>

              <div className="photos">
          <div className="flex items-center justify-start">
            <h2 className="pinline text-base font-normal capitalize dark:font-extrabold dark:text-white">
              تصاویر
            </h2>
          </div>
          <Photos media_id={media_id} episode_id={episode._id} />
        </div>

              {/* <div className="clips">
                <div className="flex items-center justify-start">
                  <h2 className="pinline text-base font-normal capitalize dark:font-extrabold dark:text-white mb-2">ویدئو</h2>
                </div>
                <div className="h-auto min-h-20 rounded-md p-2 w-full bg-zinc-800">
                {episode.clips }
                </div>
              </div>

              <div className="comments">
                <div className="flex items-center justify-start">
                  <h2 className="pinline text-base font-normal capitalize dark:font-extrabold dark:text-white mb-2">نظرات</h2>
                </div>
                <div className="h-auto min-h-20 rounded-md p-2 w-full bg-zinc-800">
                نظرات مربوط به این قسمت از این سریال
                </div>
                </div> */}
          </div>
             
   }

            </div>
            
       
                
         
         
  )
}

export default EpisodeMain