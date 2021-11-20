import Link from 'next/link';

export default function Dropdown({ open, toggleDropdown }) {
  return (
    <div
      className={`absolute z-10 w-full md:block grid grid-rows-4 text-center text-white bg-blue-500 transition-all duration-500 ease-in-out transform ${
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
  );
}
