import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { navLinks } from '../utils/data/navLinks';
import { BiMenuAltRight } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';

export default function Navbar({ toggleDropdown, open }) {
  const router = useRouter();
  const [animation, setAnimation] = useState(false);

  return (
    <>
      <nav className='flex justify-center items-center h-16  text-black  shadow-sm font-mono sticky top-0 z-10 bg-white dark:bg-black dark:text-gray-300 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200'>
        <div className='container flex items-center justify-between h-full'>
          <Link href='/'>
            <a className='pl-8 hover:text-blue-500 text-lg tracking-widest font-semibold dark:text-gray-400'>
              AlexMaldonado.DEV
              <span className='ml-1 animate-ping relative inline-flex rounded-full h-3 w-3 bg-blue-500'></span>
            </a>
          </Link>

          <div
            className='px-4 cursor-pointer md:hidden'
            onClick={toggleDropdown}
          >
            {open ? (
              <GrClose
                size={25}
                onClick={() => setAnimation(true)}
                onAnimationEnd={() => setAnimation(false)}
                className={`${animation && 'animate-spin'}`}
              />
            ) : (
              <BiMenuAltRight
                size={35}
                onClick={() => setAnimation(true)}
                onAnimationEnd={() => setAnimation(false)}
                className={`${animation && 'animate-spinFast'}`}
              />
            )}
          </div>
          <div className='pr-8 md:block hidden'>
            {navLinks.map(({ id, url, text }) => (
              <Link href={url} key={id}>
                <a
                  className={`p-4 hover:text-blue-500 ${
                    router.asPath === url ? 'border-b-2 border-blue-500' : ''
                  } `}
                >
                  {text}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* DROPDOWN NAV */}
      <div
        className={`sticky top-16 z-10 w-full md:block grid grid-rows-4 text-center rounded-b-xl text-white bg-blue-500 dark:bg-gray-900 transition-all duration-500 ease-in-out transform ${
          open
            ? 'translate-y-0 ease-out transition-medium'
            : '-translate-y-full ease-in transition-medium'
        }`}
      >
        {/* hide links because they still show with height zero. */}
        {open && (
          <>
            {navLinks.map(({ id, url, text }) => (
              <Link href={url} key={id}>
                <a
                  onClick={toggleDropdown}
                  className='p-4 hover:text-blue-200 dark:text-gray-400'
                >
                  {text}
                </a>
              </Link>
            ))}
          </>
        )}
      </div>
    </>
  );
}
