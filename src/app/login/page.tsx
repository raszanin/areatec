'use client'

import Link from 'next/link';
import { ArrowCircleLeft } from '@phosphor-icons/react';

export default function Home() {
  return (
    <div className="flex flex-col h-full bg-camera bg-cover">
      <div className='flex justify-start gap-2 p-2 bg-black/50'>
        <Link href='/' className='flex gap-2'>
          <ArrowCircleLeft size={24} />
          <span>Home</span>
        </Link>
      </div>
    </div>
  )
}