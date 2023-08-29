import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import SocialMedia from './SocialMedia'
import Spotify from './Spotify'

export default function Layout({ children }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [open, setOpen] = useState(false)

  const toggleDropdown = () => {
    setOpen(!open)
  }

  // Hide dropdown if open is true and window is resized larger
  useEffect(() => {
    //Function to hide dropdown larger than 768px
    const hideDropdown = () => {
      if (window.innerWidth > 768 && open) {
        setOpen(false)
      }
    }
    //Add event listening on window resize
    window.addEventListener('resize', hideDropdown)

    //Event listener cleanup
    ;() => {
      window.removeEventListener('resize', hideDropdown)
    }
  })

  return (
    <>
      <Navbar
        toggleDropdown={toggleDropdown}
        open={open}
        isPlaying={isPlaying}
      />
      <div className="w-full py-4 bg-red-500 text-white flex flex-col sm:flex-row justify-center items-center gap-1 z-50 text-sm">
        <span>This project has been deprecated. Please visit the</span>
        <a
          className="font-bold underline cursor-pointer z-50"
          href="https://alexmaldonado.dev/"
        >
          New Site
        </a>
      </div>
      <Spotify setIsPlaying={setIsPlaying} />
      {/* <SocialMedia /> */}
      <main className="flex-auto">{children}</main>
      <Footer />
    </>
  )
}
