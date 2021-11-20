import Image from 'next/image';

export default function Hero() {
  return (
    <section className='w-screen px-10 py-10'>
      <div className='container mx-auto flex flex-col-reverse md:flex-row md:h-screen justify-items-center md:items-center '>
        <div className='items-center text-left lg:flex-grow md:w-1/2 '>
          <h1 className='text-6xl font-normal leading-normal mt-0 mb-2'>
            Web Developer | Educator
          </h1>
          <p className='text-lg font-normal leading-relaxed mt-6 mb-4 text-gray-500 max-w-xl'>
            Web Developer From Southern California. I am dedicated to
            implementing the best solution for every project no matter the tech
            stack!
          </p>
        </div>
        <div className='items-center md:w-1/2'>
          <div className='overflow-hidden rounded-full'>
            <Image
              src='/images/alex.jpg'
              layout='responsive'
              objectFit='cover'
              objectPosition='left top'
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
