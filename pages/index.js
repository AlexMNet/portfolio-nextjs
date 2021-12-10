import * as smoothscroll from 'smoothscroll-polyfill';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Hero from '../components/Hero';
import Projects from '../components/Projects.js';
import GithubStats from '../components/GithubStats';
import Technologies from '../components/Technologies';

export default function Home({ Component, pageProps }) {
  //Enable smooth scrolling on iOS devices
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <div>
      <Head id='home'>
        <title>Alex Maldonado | Web Developer</title>
        <meta name='description' content='' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/dtbtmmgxx/image/upload/v1639101147/large_dev_portfolio_dark_43823a7947.png'
        />
        <meta property='og:title' content='Alex Maldonado | Web Developer' />
        <meta property='og:type' content='website' />

        <meta property='og:url' content='https://www.AlexMaldonado.dev' />
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
      <Hero />
      <Projects />
      <Technologies />
      <GithubStats />
    </div>
  );
}
