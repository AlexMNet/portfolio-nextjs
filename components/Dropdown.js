import Link from 'next/link';

export default function Dropdown({ open }) {
  return (
    <div
      className='md:block grid grid-rows-4 text-center text-white bg-blue-500'
      style={{
        transition: 'all 500ms ease-in-out',
        height: open ? '250px' : '0',
      }}
    >
      <Link href='/'>
        <a className='p-4 hover:text-blue-500'>Home</a>
      </Link>
      <Link href='#projects'>
        <a className='p-4 hover:text-blue-500'>Projects</a>
      </Link>
      <Link href='/'>
        <a className='p-4 hover:text-blue-500'>About</a>
      </Link>
      <Link href='/'>
        <a className='p-4 hover:text-blue-500'>Contact</a>
      </Link>
    </div>
  );
}
