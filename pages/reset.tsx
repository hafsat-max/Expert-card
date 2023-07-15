import React from 'react'
import clsx from 'clsx';

import Nav from '@/components/shared/nav'
import LoginBanner from '@/components/login/login-banner';
import ResetForm from '@/components/login/reset-form';

const Reset = () => {
  return (
    <section
    className={clsx('bg-cover bg-no-repeat bg-top-center flex flex-col h-screen')}
    style={{ backgroundImage: "url('/home/background.png')" }}
    >
    <Nav style='w-[80vw] mx-auto max-w-[a440px]'>
    </Nav>

    <div className='w-[80vw] mx-auto flex-1 flex items-center max-w-[1440px]'>
    <section className={clsx('flex ', 'gap-[clamp(2rem,5vw,4.625rem)] w-full')}>
        <LoginBanner  />
        <ResetForm/>
    </section>

    </div>
    </section>


  )
}

export default Reset