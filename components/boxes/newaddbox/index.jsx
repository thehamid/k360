import React from 'react'
import Items from '../../items'

const NewAdd = () => {

  const newseries = [
    {
       img: "/images/davinchiz.jpg",
       link:"link1"
    },
    {
       img: "/images/davinchiz.jpg",
       link:"link2"
    },
    {
       img: "/images/davinchiz.jpg",
       link:"link1"
    },
    {
       img: "/images/davinchiz.jpg",
       link:"link1"
    },
    {
       img: "/images/davinchiz.jpg",
       link:"link1"
    },
    {
       img: "/images/davinchiz.jpg",
       link:"link1"
    },
    {
       img: "/images/davinchiz.jpg",
       link:"link1"
    },
    {
       img: "/images/davinchiz.jpg",
       link:"link1"
    },
    {
       img: "/images/davinchiz.jpg",
       link:"link1"
    },
    {
       img: "/images/davinchiz.jpg",
       link:"link1"
    },
    {
       img: "/images/davinchiz.jpg",
       link:"link1"
    },
    {
       img: "/images/davinchiz.jpg",
       link:"link1"
    },
 ]



    return (
      <div className='slider mt-5 xl:mr-48 mr-5 overflow-visible xl:container'>
        <h3 className='text-red-600 font-bold text-2xl '>تازه‌ها</h3>
        <div className='border-b-4 w-5 border-red-600 p-1 mb-5 '></div>

        <Items newItems={newseries} />
      </div>
    
  )
}

export default NewAdd