import React from 'react'
import Image from "next/image";

import emptywallet from '../../public/home/empty-wallet.png'

const NoCards = () => {
  return (
    <div className='flex flex-col gap-4 items-center'>
        <Image src={emptywallet} alt='wallet' width={212} height={300}/>
        <h3 className=' text-davy-grey text-20 text-center font-semibold'>Create Card</h3>
        <p className=' text-base text-spanish-gray text-center max-w-[324px]'>You will need to create a card before you can view the list of cards you have created.</p>
    </div>
  )
}

export default NoCards