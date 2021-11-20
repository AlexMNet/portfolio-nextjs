import Link from 'next/link';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';

export default function SocialMedia() {
  return (
    <div className='flex justify-around items-center h-10'>
      <div className=' flex justify-around items-center w-1/2'>
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
    </div>
  );
}
