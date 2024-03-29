import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function GithubStats() {
  const { data, error } = useSWR(
    'https://api.github.com/search/repositories?q=user:AlexMNet+sort:updated&order=desc',
    fetcher
  )

  //Error is not being caught if url is incorrect. error shows up in the data object.
  //So add data.errros to catch
  if (error || (data && data.errors))
    return (
      <section className="bg-white dark:bg-neutral-900">
        <div className="container flex flex-col mx-auto text-center justify-center items-center px-10 pt-10 pb-20 md:pb-32 ">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl font-normal leading-normal mb-10 text-gray-700 dark:text-gray-400">
              Latest GitHub Repos
            </h1>
            <div className="flex flex-col items-center justify-center gap-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 animate-bounce text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h1 className="text-3xl text-gray-300">
                Failed to load repos from github.
              </h1>
            </div>
          </div>
        </div>
      </section>
    )
  if (!data)
    return (
      <section
        className="bg-white dark:bg-neutral-900 relative"
        style={{ height: '500px' }}
      >
        <div className="container flex flex-col mx-auto text-center justify-center items-center px-10 pt-10 pb-20 md:pb-32 ">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl font-normal leading-normal mb-10 text-gray-700 dark:text-gray-400">
              Latest GitHub Repos
            </h1>
            <div className="flex flex-col items-center justify-center gap-6">
              <h1 className="text-3xl animate-pulse">Loading repos...</h1>
            </div>
          </div>
        </div>
      </section>
    )

  return (
    <section className="bg-white dark:bg-neutral-900">
      <div className="container flex flex-col mx-auto text-center justify-center items-center px-10 pt-10 pb-20 md:pb-32">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-normal leading-normal mb-10 text-gray-700 dark:text-gray-400">
            Latest GitHub Repos
          </h1>
          <Link legacyBehavior href="https://github.com/AlexMNet">
            <a
              target="_blank"
              className=" hover:text-blue-500 hover:scale-110 transform hover:-translate-y-1 transition duration-500 ease-in-out"
            >
              <BsGithub className="text-8xl" />
              <small className="font-mono">Visit Github</small>
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-10 font-mono break-words">
          {data &&
            data.items
              .splice(0, 6)
              .map(({ id, name, description, html_url }) => (
                <div key={id} className="mb-10 max-w-xs z-50">
                  <h1 className="text-xl mb-2">{name}</h1>
                  <p className="text-sm text-gray-500 mb-2">
                    {description ? description : 'No description'}
                  </p>
                  <a
                    href={html_url}
                    target="_blank"
                    className="hover:text-blue-500"
                  >
                    Visit Repo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 inline-flex ml-3 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </a>
                </div>
              ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center max-w-xl gap-10 text-7xl text-blue-500"></div>
      </div>
    </section>
  )
}
