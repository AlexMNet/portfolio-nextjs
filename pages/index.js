import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SocialMedia from '../components/SocialMedia';
import Projects from '../components/Projects.js';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';
import GithubStats from '../components/GithubStats';

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
        {/* <link rel='icon' href='/favicon.ico' /> */}
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/images/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/images/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/images/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/images/favicon/site.webmanifest'></link>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css'
        ></link>
      </Head>
      <Navbar toggleDropdown={toggleDropdown} open={open} />
      <Dropdown open={open} toggleDropdown={toggleDropdown} />
      {/* {open && <Dropdown />} */}
      <SocialMedia />
      <Hero />
      <Projects />
      {/* <GithubStats /> */}
      <Footer />
    </div>
  );
}
