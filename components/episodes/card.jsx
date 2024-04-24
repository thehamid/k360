import React from 'react'
import Image from "next/image"
import Link from 'next/link'

const EpisodeCard = (props) => {
    const data=props.data
  return (
      <div className='w-relative z-10 w-full max-w-xs overflow-hidden rounded-lg pb-4 m-3'>
          <Link className='block' href='#'>
              <Image className='h-40 w-full object-cover' src={data.photos[0]} alt={data.title } width={350} height={180} />
          </Link>
          <div className='card flex items-center justify-between rounded-b-lg bg-zinc-800 shadow-md z-20 overflow-visible p-2'>
              <Link className='relative' href='link episod'>
                  <h2 className='leading-none'>{data.title}</h2>
                  <span className='text-xs text-gray-400'>{data.date_show }</span>
              </Link>
              <button className='btn z-20 border-2 text-primary dark:text-white btn-sm border-primary'> دیده ام</button>
          </div>
      </div>
  )
}

export default EpisodeCard