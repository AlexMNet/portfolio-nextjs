import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono'>
      <Link href='/'>
        <a className='pl-8 hover:text-blue-500 text-lg tracking-widest font-semibold'>
          AlexMaldonado.DEV
          <span className='ml-1 animate-ping relative inline-flex rounded-full h-3 w-3 bg-blue-500'></span>
        </a>
      </Link>

      <div className='px-4 cursor-pointer md:hidden'>
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
      </div>
      <div className='pr-8 md:block hidden'>
        <Link href='/'>
          <a className='p-4 hover:text-blue-500'>Home</a>
        </Link>
        <Link href='/'>
          <a className='p-4 hover:text-blue-500'>Projects</a>
        </Link>
        <Link href='/'>
          <a className='p-4 hover:text-blue-500'>About</a>
        </Link>
        <Link href='/'>
          <a className='p-4 hover:text-blue-500'>Contact</a>
        </Link>
      </div>
    </nav>
  );
}
