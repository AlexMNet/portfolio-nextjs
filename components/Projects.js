import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Projects() {
  return (
    <div className='bg-gray-100 dark:bg-gray-900 py-20 px-10' id='projects'>
      <h1 className='text-6xl text-white dark:text-gray-400 font-bold leading-normal mt-0 mb-2 text-center'>
        Projects
      </h1>
      <hr className='border-0 bg-blue-500 text-blue-500 h-px max-w-md mx-auto' />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6 mt-5 '>
        {/* Card */}
        <ScrollAnimation
          animateIn='fadeInUp'
          animateOut='fadeOutUp'
          animateOnce={true}
        >
          <div className='container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300 bg-white'>
            <img
              src='/images/dev-portfolio.png'
              alt=''
              className='rounded-t-lg w-full'
            />
            <div className='p-6 border-t-2 border-blue-500'>
              <h1 className='md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 '>
                Dev Portfolio
              </h1>
              <p className='text-gray-700 my-2 hover-text-900 '>
                Built this Dev Portfolio to showcase my work.
              </p>
              <span className='text-xs font-semibold inline-block py-1 px-2 rounded text-white bg-blue-500 uppercase last:mr-0 mr-1'>
                NextJS
              </span>
              <span className='text-xs font-semibold inline-block py-1 px-2 rounded text-white bg-blue-500 uppercase last:mr-0 mr-1'>
                TailwindCSS
              </span>
              {/* Github and project links */}
              <div className='mt-3 flex justify-start'>
                <Link href='https://www.alexmaldonado.dev'>
                  <a className='text-blue-500 underline mr-5' target='_blank'>
                    Live
                  </a>
                </Link>
                <Link href='https://github.com/AlexMNet/portfolio-nextjs'>
                  <a className='text-blue-500 underline' target='_blank'>
                    Github
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        {/* Card */}
        <ScrollAnimation
          animateIn='fadeInUp'
          animateOut='fadeOutUp'
          animateOnce={true}
        >
          <div className='container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300 bg-white'>
            <img
              src='/images/plate-calculator.jpg'
              alt=''
              className='rounded-t-lg w-full'
            />
            <div className='p-6 border-t-2 border-blue-500'>
              <h1 className='md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 '>
                Plate Calculator
              </h1>
              <p className='text-gray-700 my-2 hover-text-900 '>
                A mobile application that calculates plates to put on a bar
              </p>
              <span className='text-xs font-semibold inline-block py-1 px-2 rounded text-white bg-blue-500 uppercase last:mr-0 mr-1'>
                React-Native
              </span>
              {/* Github and project links */}
              <div className='mt-3 flex justify-start'>
                <Link href='https://github.com/AlexMNet/plateCalculator-React_Native'>
                  <a className='text-blue-500 underline' target='_blank'>
                    Github
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        {/* Card */}
        <ScrollAnimation
          animateIn='fadeInUp'
          animateOut='fadeOutUp'
          animateOnce={true}
        >
          <div className='container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300 bg-white'>
            <img
              src='/images/hot-sauce-app.png'
              alt=''
              className='rounded-t-lg w-full'
            />
            <div className='p-6 border-t-2 border-blue-500'>
              <h1 className='md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 '>
                Hot Sauce Collection
              </h1>
              <p className='text-gray-700 my-2 hover-text-900 '>
                A full stack web app to keep track of my Hot Sauce Collection!
              </p>
              <span className='text-xs font-semibold inline-block py-1 px-2 rounded text-white bg-blue-500 uppercase last:mr-0 mr-1'>
                ExpressJS
              </span>
              <span className='text-xs font-semibold inline-block py-1 px-2 rounded text-white bg-blue-500 uppercase last:mr-0 mr-1'>
                EJS
              </span>
              {/* Github and project links */}
              <div className='mt-3 flex justify-start'>
                <Link href='https://powerful-waters-28442.herokuapp.com/sauces'>
                  <a className='text-blue-500 underline mr-5' target='_blank'>
                    Live
                  </a>
                </Link>
                <Link href='https://github.com/AlexMNet/hotSauceApp'>
                  <a className='text-blue-500 underline' target='_blank'>
                    Github
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
