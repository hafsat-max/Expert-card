import React from 'react'
import Image from "next/image";
import clsx from 'clsx';

import Nav from '@/components/shared/nav'
import LoginBanner from '@/components/login/login-banner';
import AuthenticationForm from '@/components/login/authentication-form';

const Authentication = () => {
  return (
    <section
    className={clsx('bg-cover bg-no-repeat bg-top-center flex flex-col h-screen')}
    style={{ backgroundImage: "url('/home/background.png')" }}
    >
    <Nav style='w-[80vw] mx-auto'>
    </Nav>

    <div className='w-[80vw] mx-auto flex-1 flex items-center'>
    <section className={clsx('flex ', 'gap-[clamp(2rem,5vw,4.625rem)] w-full')}>
        <LoginBanner />
        <AuthenticationForm />
    </section>

    </div>
    </section>


  )
}

export default Authentication