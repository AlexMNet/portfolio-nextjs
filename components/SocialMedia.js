import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';
import { useTheme } from 'next-themes';

export default function SocialMedia() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  //When mounted on client, now we can show UI
  useEffect(() => setMounted(true), []);

  return (
    <div className='flex justify-items-end items-center h-10 mt-2'>
      <div className=' flex justify-around items-center w-3/4'>
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
      </div>
      <div className='flex justify-self-end w-1/4'>
        {!mounted ? null : (
          <button
            className='ml-auto pr-5'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8 text-yellow-600'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8'
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
