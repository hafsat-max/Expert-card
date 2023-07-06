import React, { ReactNode } from 'react'

const Heading = ({ text }: { text: string }) => {
  return (
    <h3 className='font-semibold text-24 text-center text-davy-grey'>
        {text}
    </h3>
  )
}

export default Heading