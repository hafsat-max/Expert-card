import React from 'react'
import Image from "next/image";



const FilterIcons = () => {
  return (
    <section className=' flex gap-4 border border-[#F5F6F7] p-3 rounded-[100px]'>
        <Image src={'/shared/data-table.svg'} width={28} height={28} alt='icon'/>
        <Image src={'/shared/landscape.svg'} width={28} height={28} alt='icon'/>
        <Image src={'/shared/portrait.svg'} width={28} height={28} alt='icon'/>
    </section>
  )
}

export default FilterIcons