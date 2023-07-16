import React from 'react'
import clsx from 'clsx';

import Nav from '@/components/shared/nav'
import LoginBanner from '@/components/login/login-banner';
import LoginForm from '@/components/login/login-form';

const login = () => {
  return (
    <section
    className={clsx('bg-cover bg-no-repeat bg-top-center flex flex-col h-screen ')}
    style={{ backgroundImage: "url('/home/background.png')" }}
    >
    <Nav style='w-[90vw] mx-auto max-w-[1440px]'>
    </Nav>

    <div className='w-[90vw] mx-auto flex-1 flex items-center max-w-[1440px]'>
    <section className={clsx('flex ', 'gap-[clamp(2rem,5vw,4.625rem)] w-full max-w-[1440px]')}>
        <LoginBanner />
        <LoginForm />
    </section>

    </div>
    </section>


  )
}

export default login