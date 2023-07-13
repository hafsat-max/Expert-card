import React from 'react'
import Image from "next/image";

import emptywallet from '../../public/home/empty-wallet.png'
import Link from 'next/link';
import { Button } from '@mantine/core';

const NoCards = () => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center'>
        <Image src={emptywallet} alt='wallet' width={212} height={300}/>
        <h3 className=' text-davy-grey text-20 text-center font-semibold'>Create Card</h3>
        <p className=' text-base text-spanish-gray text-center max-w-[324px]'>You will need to create a card before you can view the list of cards you have created.</p>

        <Link href={'/'}>
        <Button
      className=" flex justify-between items-center gap-3 py-[12px] px-[20px] h-[48px]"
        styles={{
          root: {
            background: "#C81107 !important",
            "&:hover": {
                background: "#6D0802 !important ",
              },
          },
          label:{
            display: 'flex',
            justifyContent: "space-between",
            alignItems: "center",
            gap: '12px'
          }
        }}
      >
        <Image src={'/shared/plus.svg'} width={12} height={12} alt="plus" />
        New Card
      </Button>
        </Link>

        
    </div>
  )

}

export default NoCards