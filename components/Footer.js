import Link from 'next/link';

export default function Footer() {
  return (
    <div className='flex justify-center items-center h-16 bg-black text-white'>
      <p>Alex Maldonado &copy; {new Date().getFullYear()}</p>
      <div className='ml-10'>
        {/* <button className='animate-pulse'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-7 w-7'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </button> */}
        <Link href='#home'>
          <a>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-7 w-7 animate-bounce'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
}
