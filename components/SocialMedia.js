import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsGithub, BsLinkedin, BsInstagram, BsSun } from 'react-icons/bs';
import { useTheme } from 'next-themes';

export default function SocialMedia() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  //When mounted on client, now we can show UI
  useEffect(() => setMounted(true), []);

  return (
    <div className='container items-center mx-auto h-10 max-w-screen-xl'>
      <div className='flex justify-around items-center w-full h-full '>
        <Link href='https://github.com/AlexMNet'>
          <a
            target='_blank'
            className='text-2xl hover:text-blue-500 hover:scale-110 transform hover:-translate-y-1 transition duration-500 ease-in-out'
          >
            <BsGithub />
          </a>
        </Link>
        <Link href='https://www.linkedin.com/in/alex-maldonado-550920205/'>
          <a
            target='_blank'
            className='text-2xl hover:text-blue-500 hover:scale-110 transform hover:-translate-y-1 transition duration-500 ease-in-out'
          >
            <BsLinkedin />
          </a>
        </Link>
        <Link href='https://www.instagram.com/'>
          <a
            target='_blank'
            className='text-2xl hover:text-blue-500 hover:scale-110 transform hover:-translate-y-1 transition duration-500 ease-in-out'
          >
            <BsInstagram />
          </a>
        </Link>
        {!mounted ? null : (
          <button
            className=''
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8 text-yellow-200'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8 text-blue-500'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                />
              </svg>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
