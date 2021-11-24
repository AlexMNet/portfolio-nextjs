import Link from 'next/link';

export default function Navbar({ toggleDropdown, open }) {
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
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 animate-pulse'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16m-7 6h7'
                />
              </svg>
            )}
          </div>
          <div className='pr-8 md:block hidden'>
            <Link href='/'>
              <a className='p-4 hover:text-blue-500'>Home</a>
            </Link>
            <Link href='/#projects'>
              <a className='p-4 hover:text-blue-500'>Projects</a>
            </Link>
            <Link href='/docs'>
              <a className='p-4 hover:text-blue-500'>Docs</a>
            </Link>
            <Link href='/about'>
              <a className='p-4 hover:text-blue-500'>About</a>
            </Link>
            <Link href='/contact'>
              <a className='p-4 hover:text-blue-500'>Contact</a>
            </Link>
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
            <Link href='/'>
              <a
                onClick={toggleDropdown}
                className='p-4 hover:text-blue-200 dark:text-gray-400'
              >
                Home
              </a>
            </Link>
            <Link href='/#projects'>
              <a
                onClick={toggleDropdown}
                className='p-4 hover:text-blue-200 dark:text-gray-400'
              >
                Projects
              </a>
            </Link>
            <Link href='/docs'>
              <a
                onClick={toggleDropdown}
                className='p-4 hover:text-blue-200 dark:text-gray-400'
              >
                Docs
              </a>
            </Link>
            <Link href='/about'>
              <a
                onClick={toggleDropdown}
                className='p-4 hover:text-blue-200 dark:text-gray-400'
              >
                About
              </a>
            </Link>
            <Link href='/contact'>
              <a
                onClick={toggleDropdown}
                className='p-4 hover:text-blue-200 dark:text-gray-400'
              >
                Contact
              </a>
            </Link>
          </>
        )}
      </div>
    </>
  );
}
