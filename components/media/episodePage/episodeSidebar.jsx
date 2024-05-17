import React from 'react'
import {  LuEye } from "react-icons/lu";

const EpisodeSidebar = () => {
  return (
    <div className="col-span-8 lg:col-span-2">
    <div className="sidebar">
      <div className="p-2">
      <button className="border-2 border-white/80 text-white rounded-lg w-full text-center p-3 mb-2">
          <span className="flex justify-between">
            <p> تماشا کرده‌ام (بزودی)</p>
              <LuEye className="text-2xl"/>
            </span>
          </button>
      </div>
      {/* <div className="p-2">
        <h2 className="pinline text-base font-normal capitalize dark:font-extrabold dark:text-white">واکنش‌ها</h2>
        <div className="bg-zinc-900 p-5 text-gray-100 flex flex-col">
         آیکون واکنش ها
        </div>
      </div> */}
    </div>
        </div>
  )
}

export default EpisodeSidebar