import React from 'react'
import Image from "next/image"
import Link from 'next/link'

const ActorCard = (props) => {
    const data=props.data
  return (
      <div className='w-relative  w-full max-w-xs'>
          
              <Image className='h-full w-full rounded-lg object-cover' src={data.actor_img} alt={data.actor_name } width={240} height={240} />
          
          <div className='flex items-center justify-center'>
              <Link className='relative text-center' href={data.actor_link}>
                  <h2 className='font-bold text-gray-50'>{data.actor_name}</h2>
                  <span className='text-xs text-gray-300'>{data.role_name }</span>
              </Link>
            
          </div>
      </div>
  )
}

export default ActorCard