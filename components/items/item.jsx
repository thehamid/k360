import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Item = (props) => {
  const data = props.data
  return (
      <div className="max-w-sm relative w-full">
      <Link  href={`media/${data.slug}`}>
          <div className="w-full relative">
             <Image src={data.poster} alt={data.title} width={200} height={300} className="w-full h-full  top-0 left-0 object-cover rounded-lg" />
          </div>
           
      </Link>    
      </div>
  )
}

export default Item