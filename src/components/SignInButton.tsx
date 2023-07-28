'use client';
import React from 'react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

const SigninButton = () => {
  const { status, data: session } = useSession();
  return (
    <>
      {status === 'authenticated' ? (
        <div>
          <div>{session?.user?.name}</div>
          <Button onClick={() => signOut()}>Sign Out</Button>
        </div>
      ) : (
        <Link href={'/signin'}>
          <Button variant={'outline'} className='rounded-xl'>Sign In</Button>
        </Link>
      )}
    </>
  );
};

export default SigninButton;
