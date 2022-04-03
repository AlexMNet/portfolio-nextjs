import Image from 'next/image'
import Link from 'next/link'
import Particles from 'react-tsparticles'
import particleConfig from '../utils/particleConfig'

export default function Hero() {
  return (
    <section className="relative ">
      <Particles
        style={{ zIndex: -100 }}
        className="absolute top-0 left-0 h-full w-screen"
        id="tsparticles"
        options={particleConfig}
      />
      {/* HERO */}
      <div className="container px-10 mt-10 md:py-14 mx-auto flex flex-col-reverse md:flex-row">
        {/* Left Content */}
        <div className="flex flex-col flex-1 items-left text-left justify-center">
          <h1 className="text-5xl md:text-6xl font-normal leading-normal mt- mb-2">
            Software Developer
          </h1>
          <hr className="border-0 bg-blue-500 text-blue-500 h-px max-w-md" />

          <p className="text-lg font-normal leading-relaxed mt-6 md:mb-4 text-gray-500 max-w-xl">
            Software Developer From Southern California. I am dedicated to
            implementing the best solution for every project no matter the tech
            stack!
          </p>
          <Link href="#projects">
            <button
              className="self-start invisible md:visible bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-base px-6 py-3 rounded shadow-md outline-none transition duration-500 ease-in-out hover:bg-blue-800 transform hover:-translate-y-1 hover:scale-110"
              type="button"
            >
              Projects
            </button>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 self-center animate-bounce text-gray-400 visible md:invisible"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            />
          </svg>
        </div>
        {/* Right Content Image */}
        <div className="flex-1 flex items-center justify-center md:justify-end">
          <div className="w-3/4 ">
            <Image
              src="/images/alex.jpg"
              layout="responsive"
              objectFit="cover"
              objectPosition="left top"
              width={200}
              height={200}
              priority={true}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
