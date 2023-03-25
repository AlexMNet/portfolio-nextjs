import Image from 'next/image'
import React from 'react'
import { showcasedProjects } from '../utils/data/showcasedProjects'

export default function Projects() {
  return (
    <section className="max-w-screen-lg flex flex-col bg-white dark:bg-neutral-900 mx-auto items-center px-3 md:p-0">
      <h1
        id="projects"
        className="text-6xl text-blue-500 font-medium leading-normal mt-0 mb-1 text-center"
      >
        Projects
      </h1>
      <div className="h-px w-24 bg-yellow-400"></div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {showcasedProjects.map(
          ({
            id,
            img,
            title,
            desc,
            tech,
            liveLink,
            githubLink,
            notification,
          }) => (
            <div
              key={id}
              className="border-2 backdrop-blur-lg border-slate-800 relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-lg"
            >
              <div className="mx-4 mt-4 overflow-hidden rounded-xl">
                <img
                  className="aspect-video object-top object-cover"
                  src={img}
                  alt="ui/ux review check"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-500 antialiased">
                    {title}
                  </h5>
                </div>
                <p className="block font-sans text-base font-light leading-relaxed text-gray-800 dark:text-gray-300 antialiased h-24">
                  {desc}
                </p>
                <div className="group mt-8 inline-flex flex-wrap items-center gap-3 text-slate-600 dark:text-slate-300">
                  {tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className="p-6 pt-3 flex gap-3">
                {liveLink && (
                  <a href={liveLink} target="_blank">
                    <button
                      className="middle none center rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      data-ripple-light="true"
                    >
                      Live
                    </button>
                  </a>
                )}
                {githubLink && (
                  <a href={githubLink} target="_blank">
                    <button
                      className="middle none center rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      data-ripple-light="false"
                    >
                      Github
                    </button>
                  </a>
                )}
                {notification && <p className="text-red-900">{notification}</p>}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  )
}
