import Link from 'next/link'
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { showcasedProjects } from '../utils/data/showcasedProjects'

export default function Projects() {
  return (
    <section
      className=" bg-gray-200 dark:bg-gray-900 py-20 px-10"
      id="projects"
    >
      <div className="container mx-auto">
        <h1 className="text-6xl  dark:text-gray-400 font-medium leading-normal mt-0 mb-2 text-center">
          Projects
        </h1>
        <hr className="border-0 bg-blue-500 text-blue-500 h-px max-w-md mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6 mt-5">
          {/* Cards */}
          {showcasedProjects.map(
            ({ id, img, docLink, title, desc, tech, liveLink, githubLink }) => (
              <ScrollAnimation
                key={id}
                animateIn="fadeInUp"
                animateOut="fadeOutUp"
                animateOnce={true}
              >
                <div className="overflow-hidden container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300 bg-white">
                  <Link href={docLink}>
                    <img src={img} alt="" className=" w-full" />
                  </Link>
                  <div className="p-6 border-t-2 border-blue-500 dark:bg-black overflow-hidden">
                    <h1 className="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 dark:text-gray-400">
                      {title}
                    </h1>
                    <p className="text-gray-700 my-2 hover-text-900 ">{desc}</p>
                    {tech.map((title, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold inline-block py-1 px-2 rounded text-white bg-blue-500 dark:bg-gray-700 uppercase last:mr-0 mr-1"
                      >
                        {title}
                      </span>
                    ))}
                    {/* Github and project links */}
                    <div className="mt-3 flex justify-start">
                      <Link href={liveLink}>
                        <a
                          className="text-blue-500 underline mr-5"
                          target="_blank"
                        >
                          Live
                        </a>
                      </Link>
                      <Link href={githubLink}>
                        <a className="text-blue-500 underline" target="_blank">
                          Github
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            )
          )}
        </div>
      </div>
    </section>
  )
}
