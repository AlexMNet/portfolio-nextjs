import Link from 'next/link';

export default function About() {
  return (
    <div className='container mx-auto text-center'>
      <h1 className='text-6xl'>About page coming soon... </h1>
      <Link href='/'>
        <a className='text-blue-500 underline hover:text-blue-700'>Back home</a>
      </Link>
    </div>
  );
}
