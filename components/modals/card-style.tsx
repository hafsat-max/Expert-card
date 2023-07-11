import React from 'react'
import CardFlipper from '../create-card/card-flipper'
import { Task } from 'iconsax-react'

const CardStyle = () => {
  return (
    <div className='mt-3 w-[80%] mx-auto flex flex-col  gap-[33px]'>
    <CardFlipper />
    <CardFlipper />
    <CardFlipper />
    <CardFlipper />

    <Task size="32" color="#FF8A65" variant="Outline"/>
    </div>
  )
}

export default CardStyle