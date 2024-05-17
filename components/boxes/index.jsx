import React from 'react'
import NewMedia from './newbox'
import NewAddMedia from './newaddbox'
import Nostalgy from './nostalgybox'

const Boxes = () => {
  return (
      <div className='flex flex-col'>
          <NewMedia/>
          <NewAddMedia/>
          <Nostalgy/>
          

    </div>
  )
}

export default Boxes