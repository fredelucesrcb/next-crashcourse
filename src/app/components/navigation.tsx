'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { SignInButton, UserButton, SignedIn, SignedOut } from '@clerk/nextjs';

const Navigation = () => {

    const pathName = usePathname();
  return (
   <nav>
        <Link href="/" className={ pathName === "/" ? "font-bold mr-4" : 'mr-4 text-blue-500'}>
            Home
        </Link>
        <Link href='/about' className={ pathName === "/about" ? "font-bold mr-4" : 'mr-4 text-blue-500'}>
            About
        </Link>
        <Link href='/products/1' className={ pathName.startsWith("/products") ? "font-bold mr-4" :  'mr-4 text-blue-500'}>
            Product 1
        </Link>
        <SignedOut>
            <SignInButton mode='modal' />
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>
   </nav>
  )
}

export default Navigation