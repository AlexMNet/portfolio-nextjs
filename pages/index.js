import React, { useState } from 'react';
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
  return (
    <div>
      <Head>
        <title>Alex Maldonado | Web Developer</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar toggleDropdown={toggleDropdown} open={open} />
      <Dropdown open={open} />
      {/* {open && <Dropdown />} */}
      <SocialMedia />
      <Hero />
      <Projects />
    </div>
  );
}
