import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SocialMedia from '../components/SocialMedia';
import Projects from '../components/Projects.js';
import Dropdown from '../components/Dropdown';

export default function Home({ Component, pageProps }) {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  // Hide dropdown if open is true and window is resized larger
  useEffect(() => {
    //Function to hide dropdown larger than 768px
    const hideDropdown = () => {
      if (window.innerWidth > 768 && open) {
        setOpen(false);
      }
    };
    //Add event listening on window resize
    window.addEventListener('resize', hideDropdown);

    //Event listener cleanup
    () => {
      window.removeEventListener('resize', hideDropdown);
    };
  });

  return (
    <div>
      <Head>
        <title>Alex Maldonado | Web Developer</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar toggleDropdown={toggleDropdown} open={open} />
      <Dropdown open={open} toggleDropdown={toggleDropdown} />
      {/* {open && <Dropdown />} */}
      <SocialMedia />
      <Hero />
      <Projects />
    </div>
  );
}
