import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { navLinks } from '../utils/data/navLinks';
import { BiMenuAltRight } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
import { AiOutlineClose } from 'react-icons/ai';

export default function Navbar({ toggleDropdown, open }) {
  const router = useRouter();
  const [animation, setAnimation] = useState(false);
  const linksRef = useRef(null);
  const linksContainerRef = useRef(null);

  useEffect(() => {
    if (open) {
      const linksHeight = linksRef.current.getBoundingClientRect().height;
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [open]);

  return (
    <nav className='flex flex-col justify-center items-center h-16  text-black font-mono sticky top-0 z-10 bg-gray-100/70 dark:bg-black/70 dark:text-gray-300 backdrop-filter backdrop-blur-lg border-b border-gray-200 dark:border-gray-800'>
      <div className='container flex items-center justify-between h-full'>
        <Link href='/'>
          <a className='pl-8 hover:text-blue-500 text-lg tracking-widest font-semibold dark:text-gray-400'>
            AlexMaldonado.DEV
            <span className='ml-1 animate-ping relative inline-flex rounded-full h-3 w-3 bg-blue-500'></span>
          </a>
        </Link>

        <div className='px-4 cursor-pointer md:hidden' onClick={toggleDropdown}>
          {open ? (
            <AiOutlineClose
              size={30}
              onClick={() => setAnimation(true)}
              onAnimationEnd={() => setAnimation(false)}
              className={`${animation && 'animate-spin'} `}
            />
          ) : (
            <BiMenuAltRight
              size={35}
              onClick={() => setAnimation(true)}
              onAnimationEnd={() => setAnimation(false)}
              className={`${animation && 'animate-spinFast'} animate-pulse `}
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
      {/* DROPDOWN NAV */}
      <div
        className={`absolute top-16 z-10 w-full md:block text-center rounded-b-xl text-white bg-blue-500 opacity-99 dark:bg-gray-900  transition-all duration-300 ease-in-out h-0 overflow-hidden`}
        ref={linksContainerRef}
      >
        {/* hide links because they still show with height zero. */}
        {open && (
          <ul className={`flex flex-col`} ref={linksRef}>
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
          </ul>
        )}
      </div>
    </nav>
  );
}
