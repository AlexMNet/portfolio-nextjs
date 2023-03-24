import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { socialMediaLinks } from '../utils/data/socialMediaLinks'
import { HiOutlineLightBulb, HiOutlineMoon } from 'react-icons/hi'

export default function SocialMedia() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  //When mounted on client, now we can show UI
  useEffect(() => setMounted(true), [])

  return (
    <section className="">
      <div className="container items-center mx-auto h-10 p-8 max-w-screen-xl ">
        <div className="flex justify-around items-center h-full w-full">
          {socialMediaLinks.map(({ id, link, icon }) => (
            <Link legacyBehavior key={id} href={link}>
              <a
                target="_blank"
                className="text-2xl hover:text-blue-500 hover:scale-110 transform hover:-translate-y-1 transition duration-500 ease-in-out"
              >
                {icon}
              </a>
            </Link>
          ))}
          {!mounted ? null : (
            <button
              className="cursor-pointer hover:scale-110 z-50 transform hover:-translate-y-1 transition duration-500 ease-in-out"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? (
                <HiOutlineLightBulb size="2rem" color="#fef08a" />
              ) : (
                <HiOutlineMoon size="2rem" color="#3b82f6" />
              )}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
