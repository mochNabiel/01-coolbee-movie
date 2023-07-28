'use client';

import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { coolbeeIcon, signInHeroImage } from '../../../public/exportImage';
import { Button } from '@/components/ui/button';
import FormHeader from '@/components/FormHeader';

const SignInPage = () => {
  const handleSignIn = async (provider: string) => {
    await signIn(provider, { callbackUrl: '/' });
  };
  return (
    <div className='h-screen w-screen flex flex-col lg:flex-row overflow-hidden'>
      <div className='relative w-full h-full flex items-center justify-center bg-gray-900 lg:w-1/2'>
        {/* Coolbee Logo */}
        <div className='fixed top-3 left-5'>
          <Image
            src={coolbeeIcon}
            alt='coolbee icon'
            width={120}
            height={120}
          />
        </div>

        {/* Login Form Section */}
        <div className='max-w-sm w-full flex flex-col items-center justify-center'>
          <FormHeader
            title='Login to Your Account'
            subtitle='Welcome back! Please enter your details.'
          />
          <div className='flex flex-col w-full items-center justify-center text-gray-100'>
            <Button
              onClick={() => handleSignIn('google')}
              className='w-full flex gap-5 mb-5 text-md py-7 border border-gray-100 rounded-xl hover:bg-gray-100 hover:text-gray-900'
            >
              <FcGoogle />
              <p>Log in with Google</p>
            </Button>
            <Button
              onClick={() => handleSignIn('github')}
              className='w-full flex gap-5 mb-5 text-md py-7 border border-gray-100 rounded-xl hover:bg-gray-100 hover:text-gray-900'
            >
              <FaGithub />
              <p>Log in with Github</p>
            </Button>
          </div>

          <div className='flex items-center w-full h-10'>
            <div className='w-2/5 h-[0.05rem] bg-gray-100'></div>
            <div className='w-1/5 text-gray-100 font-light my-auto text-center'>
              or
            </div>
            <div className='w-2/5 h-[0.05rem] bg-gray-100'></div>
          </div>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className='relative w-full h-full hidden lg:block lg:w-1/2'>
        <Image
          src={signInHeroImage}
          alt='Sign in hero image'
          objectFit='cover'
          className='h-full object-cover object-center'
        />
        {/* Overlay Hero Image */}
        <div className="hidden lg:block absolute top-0 left-0 w-full h-full bg-gray-900/30"></div>
      </div>
    </div>
  );
};

export default SignInPage;
