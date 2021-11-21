import Link from 'next/link';

export default function Navbar({ toggleDropdown, open }) {
  return (
    <>
      <nav className='flex justify-between items-center h-16  text-black  shadow-sm font-mono sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200'>
        <Link href='/'>
          <a className='pl-8 hover:text-blue-500 text-lg tracking-widest font-semibold'>
            AlexMaldonado.DEV
            <span className='ml-1 animate-ping relative inline-flex rounded-full h-3 w-3 bg-blue-500'></span>
          </a>
        </Link>

        <div className='px-4 cursor-pointer md:hidden' onClick={toggleDropdown}>
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
          <Link href='#projects'>
            <a className='p-4 hover:text-blue-500'>Projects</a>
          </Link>
          <Link href='#'>
            <a className='p-4 hover:text-blue-500'>Docs</a>
          </Link>
          <Link href='/'>
            <a className='p-4 hover:text-blue-500'>About</a>
          </Link>
          <Link href='/'>
            <a className='p-4 hover:text-blue-500'>Contact</a>
          </Link>
        </div>
      </nav>
      <div
        className={`sticky top-16 z-10 w-full md:block grid grid-rows-4 text-center text-white bg-blue-500 transition-all duration-500 ease-in-out transform ${
          open
            ? 'translate-y-0 ease-out transition-medium'
            : '-translate-y-full ease-in transition-medium'
        }`}
      >
        {/* hide links because they still show with height zero. */}
        {open && (
          <>
            <Link href='/'>
              <a onClick={toggleDropdown} className='p-4 hover:text-blue-200'>
                Home
              </a>
            </Link>
            <Link href='#projects'>
              <a onClick={toggleDropdown} className='p-4 hover:text-blue-200'>
                Projects
              </a>
            </Link>
            <Link href='/'>
              <a onClick={toggleDropdown} className='p-4 hover:text-blue-200'>
                About
              </a>
            </Link>
            <Link href='/'>
              <a onClick={toggleDropdown} className='p-4 hover:text-blue-200'>
                Contact
              </a>
            </Link>
          </>
        )}
      </div>
    </>
  );
}
