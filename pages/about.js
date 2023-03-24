import React, { useState, useEffect } from 'react'
// import { ReactPhotoCollage } from 'react-photo-collage'
import Link from 'next/link'
import Image from 'next/image'
import { RoughNotation } from 'react-rough-notation'
import { useInView } from 'react-intersection-observer'
import { galleryImages } from '../utils/data/galleryImages'

export default function About() {
  //useInView is used to detect if a div or ele is in view.
  //inView will  be true when in view and can be used to se animations
  const { ref, inView, entry } = useInView({
    threshold: 1,
  })
  const [width, setWidth] = useState()

  useEffect(() => {
    const width = window.innerWidth
    setWidth(width)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
    })

    return () => {
      window.removeEventListener('resize', () => {
        setWidth(window.innerWidth)
      })
    }
  }, [])

  return (
    <section>
      <div className="container mx-auto mb-20 items-center flex flex-col lg:flex-row text-center md:mt-32">
        <div className="flex-1 py-10 px-10">
          <div className="w-full mx-auto justify-center items-center container flex flex-col overflow-hidden">
            {/* <ReactPhotoCollage
              {...galleryImages}
              width={width <= 610 ? `325px` : `600px`}
              height={width <= 610 ? ['150px', '100px'] : ['250px', '170px']}
            /> */}
          </div>
        </div>
        <div className=" px-10 max-w-2xl text-center mx-auto flex-grow">
          <h1 className="text-6xl mb-4 md:mb-6">About </h1>
          <div className="pb-5">
            <p className="text-gray-600 leading-8">
              I started my self-taught journery of learning to code in April of
              2020. Learning mostly through{' '}
              <a className="text-blue-500" href="https://www.udemy.com/">
                Udemy
              </a>{' '}
              courses, YouTube,{' '}
              <a
                className="text-blue-500"
                href="https://www.theodinproject.com/"
              >
                The Odin Project
              </a>{' '}
              and{' '}
              <a className="text-blue-500" href="https://www.freecodecamp.org">
                Free Code Camp
              </a>
              , I completely fell in love with all things Web Development.
            </p>
            <br />
            <p ref={ref} className="text-gray-600 leading-8">
              In March of 2021 I joined a bootcamp called{' '}
              <a className="text-blue-500" href="https://reskillamericans.org/">
                Reskill Americans
              </a>{' '}
              which was intended for underrepresented minorites in Tech. During
              my time in this bootcamp I discoved my passion for{' '}
              <RoughNotation
                type="underline"
                show={inView}
                animate={inView}
                color="#DC2626"
                iterations={5}
                animationDelay={1500}
              >
                mentoring
              </RoughNotation>{' '}
              other students that were struggling. I love working on projects
              but I also love helping others learn and understand that{' '}
              <RoughNotation
                type="underline"
                show={inView}
                animate={inView}
                color="#DC2626"
                iterations={5}
                animationDelay={2000}
              >
                anyone can learn to code!
              </RoughNotation>{' '}
            </p>

            <br />
            <p className="text-gray-600 leading-8">
              I now work fulltime as a software developer for Sandals Church and
              I am the Director of Program Management for the{' '}
              <a className="text-blue-500" href="https://reskillamericans.org/">
                Reskill Americans Bootcamp
              </a>
              . My goal is not only to continue learning and honing in on my
              skills as a developer, but also guide and mentor others that are
              just beginning their journey.
            </p>
          </div>
          <div className="flex flex-col justify-items-center items-center gap-5">
            <Link legacyBehavior href="/#projects">
              <a className=" bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-base px-6 py-3 rounded shadow-md outline-none transition duration-500 ease-in-out hover:bg-blue-800 transform hover:-translate-y-1 hover:scale-110">
                Checkout my work
              </a>
            </Link>
            <Link legacyBehavior href="/">
              <a className="text-blue-500 underline hover:text-blue-700">
                Back home
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
