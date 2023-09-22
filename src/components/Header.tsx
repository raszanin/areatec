import { User } from '@phosphor-icons/react';
import { useState } from "react";
import Link from 'next/link';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className='flex justify-between items-center gap-2 p-4 bg-black/50 w-full'>
      <nav className='flex w-full'>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ?
            "flex flex-col justify-evenly items-center absolute w-full top-0 left-0 bg-black/80 z-10"
            :
            "hidden"}>
            <div className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/">Início</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/portfolio">Portfolio</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/about">Sobre</a>
              </li>
              <li>
                <Link href='/login' className='flex gap-2 border-b border-gray-400 my-8 uppercase'>
                  <User size={24} />
                  <span>Entre</span>
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <div className="DESKTOP-MENU hidden lg:flex w-full">
          <div className='flex w-full justify-between items-center'>
            <div className='flex gap-10'>
              <div>
                <Link href="/">Início</Link>
              </div>
              <div>
                <Link href="/portfolio">Portfolio</Link>
              </div>
              <div>
                <Link href="/about">Sobre</Link>
              </div>
            </div>


            <Link href='/login' className='flex gap-2'>
              <User size={24} />
              <span>Entre</span>
            </Link>

          </div>
        </div >
      </nav >
    </div >
  )
}

