import Link from 'next/link'
import { technologies } from '../utils/data/technologies'

export default function Technologies() {
  return (
    <section className="">
      <div className="container flex flex-col mx-auto text-center justify-center items-center px-10 pt-24 pb-20 md:pb-32 ">
        {/* <h1 className="text-5xl md:text-6xl font-normal leading-normal mt- mb-2 text-gray-700 dark:text-gray-400">
          Technologies
        </h1> */}
        <h1
          id="projects"
          className="text-6xl text-blue-500 font-medium leading-normal mt-0 mb-1 text-center"
        >
          Technologies
        </h1>
        <div className="h-px w-24 bg-yellow-400"></div>

        <p className="text-gray-700 dark:text-gray-400 mt-4">
          Technologies I have used
        </p>
        <div className="mt-10 flex flex-wrap justify-center max-w-xl gap-10 text-7xl text-blue-500">
          {technologies.map(({ id, link, title, icon }) => (
            <div key={id} className="mx-auto">
              <Link legacyBehavior href={link}>
                <a>
                  {icon}
                  <p className="text-base text-gray-700">{title}</p>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
