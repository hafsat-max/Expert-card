import React from 'react'
import Image from "next/image";
import Task from '../icons/task';
import Landscape from '../icons/landscape';



const FilterIcons = () => {
  return (
    <section className=' flex items-center gap-4 border border-[#F5F6F7] p-3 rounded-[100px]'>
      <Task color='#C81107'
      />
        <Landscape color='#9FA19C'/>
        <Image src={'/shared/portrait.svg'} width={28} height={28} alt='icon'/>
    </section>
  )
}

export default FilterIcons