import Link from 'next/link';

export default function Contact() {
  return (
    <div className='container mx-auto text-center'>
      <h1 className='text-6xl'>Contact Page Coming Soon...</h1>
      <Link href='/'>
        <a className='text-blue-500 underline hover:text-blue-700'>Back home</a>
      </Link>
    </div>
  );
}
