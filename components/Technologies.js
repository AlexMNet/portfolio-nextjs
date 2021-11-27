import Link from 'next/link';
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiCss3,
  SiGithub,
  SiHtml5,
  SiMarkdown,
  SiStrapi,
  SiTypescript,
} from 'react-icons/si';

export default function Technologies() {
  return (
    <section className=''>
      <div className='container flex flex-col mx-auto text-center justify-center items-center px-10 pt-10 pb-20 md:pb-32 '>
        <h1 className='text-5xl md:text-6xl font-normal leading-normal mt- mb-2 text-gray-700 dark:text-gray-400'>
          Technologies
        </h1>
        <p className='text-gray-700 dark:text-gray-400'>
          Technologies I have used for my projects
        </p>
        <div className='mt-10 flex flex-wrap justify-center max-w-xl gap-10 text-7xl text-blue-500'>
          <div className='mx-auto'>
            <Link href='https://www.javascript.com/'>
              <a>
                <SiJavascript className='hover:scale-110 transform duration-200 ' />
                <p className='text-base text-gray-700'>JavaScript</p>
              </a>
            </Link>
          </div>
          <div className='mx-auto '>
            <Link href='https://reactjs.org/'>
              <a>
                <SiReact className='hover:scale-110 transform duration-200' />
                <p className='text-base text-gray-700'>ReactJS</p>
              </a>
            </Link>
          </div>
          <div className='mx-auto'>
            <Link href='https://reactnative.dev/'>
              <a>
                <SiReact className='hover:scale-110 transform duration-200' />
                <p className='text-base text-gray-700'>React Native</p>
              </a>
            </Link>
          </div>
          <div className='mx-auto'>
            <Link href='https://nextjs.org/'>
              <a>
                <SiNextdotjs className='hover:scale-110 transform duration-200' />
                <p className='text-base text-gray-700'>NextJS</p>
              </a>
            </Link>
          </div>
          <div className='mx-auto'>
            <Link href='https://expressjs.com/'>
              <a>
                <SiNodedotjs className='hover:scale-110 transform duration-200' />
                <p className='text-base text-gray-700'>ExpressJS</p>
              </a>
            </Link>
          </div>
          <div className='mx-auto'>
            <Link href='https://www.mongodb.com/'>
              <a>
                <SiMongodb className='hover:scale-110 transform duration-200' />
                <p className='text-base text-gray-700'>MongoDB</p>
              </a>
            </Link>
          </div>
          <div className='mx-auto'>
            <Link href='https://tailwindcss.com/'>
              <a>
                <SiTailwindcss className='hover:scale-110 transform duration-200' />
                <p className='text-base text-gray-700'>TailwindCSS</p>
              </a>
            </Link>
          </div>
          <div className='mx-auto'>
            <Link href='https://getbootstrap.com/'>
              <a>
                <SiBootstrap className='hover:scale-110 transform duration-200' />
                <p className='text-base text-gray-700'>BootStrap</p>
              </a>
            </Link>
          </div>
          <div className='mx-auto'>
            <Link href='https://developer.mozilla.org/en-US/docs/Web/CSS'>
              <a>
                <SiCss3 className='hover:scale-110 transform duration-200' />
                <p className='text-base text-gray-700'>CSS</p>
              </a>
            </Link>
          </div>
          <div className='mx-auto'>
            <Link href='https://developer.mozilla.org/en-US/docs/Glossary/HTML5'>
              <a>
                <SiHtml5 className='hover:scale-110 transform duration-200' />
                <p className='text-base text-gray-700'>HTML5</p>
              </a>
            </Link>
          </div>
          <div className='mx-auto'>
            <Link href='https://www.markdownguide.org/'>
              <a>
                <SiMarkdown className='hover:scale-110 transform duration-200' />
                <p className='text-base text-gray-700'>Markdown</p>
              </a>
            </Link>
          </div>
          <div className='mx-auto'>
            <Link href='https://github.com/'>
              <a>
                <SiGithub className='hover:scale-110 transform duration-200' />
                <p className='text-base text-gray-700'>Github</p>
              </a>
            </Link>
          </div>
          <div className='mx-auto'>
            <Link href='https://strapi.io/'>
              <a>
                <SiStrapi className='hover:scale-110 transform duration-200' />
                <p className='text-base text-gray-700 '>Strapi</p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
