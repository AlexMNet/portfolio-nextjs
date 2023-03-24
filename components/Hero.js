import Image from 'next/image'
import Link from 'next/link'
import Particles from 'react-tsparticles'
import particleConfig from '../utils/particleConfig'
import { socialMediaLinks } from '../utils/data/socialMediaLinks'
import SocialMedia from './SocialMedia'
import Spotify from './Spotify'

export default function Hero() {
  return (
    <section className="max-w-screen-lg flex flex-col h-screen bg-white dark:bg-neutral-900 mx-auto items-center px-3 md:p-0 justify-center -mt-10">
      <Particles
        style={{ zIndex: -100 }}
        className="absolute top-0 left-0 h-full w-screen"
        id="tsparticles"
        options={particleConfig}
      />
      <div className="grid grid-cols-1  ">
        <div className="flex justify-center items-center">
          <Image
            className="inline-block h-64 w-64 rounded-full mx-auto object-cover object-top border-2 border-slate-500"
            src="/images/alex.jpg"
            width={1080}
            height={720}
            alt="Alex holding a guitar"
          />
        </div>
        <div className="text-center max-w-lg">
          <h1 className="mt-2 text-4xl md:text-6xl font-bold tracking-wider text-blue-500 ">
            Alex Maldonado
          </h1>
          <p className="mt-6 text-xl sm:text-2xl leading-8 text-gray-400">
            A former touring musician (Leona Lewis, Becky G, Nispey Hussle and
            more) turned Software Developer with a focus on web technologies.
          </p>
          <SocialMedia />
        </div>
      </div>
    </section>
  )
}
