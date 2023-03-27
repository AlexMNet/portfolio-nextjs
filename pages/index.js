import * as smoothscroll from 'smoothscroll-polyfill'
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Hero from '../components/Hero'
import Projects from '../components/Projects.js'
import GithubStats from '../components/GithubStats'
import Technologies from '../components/Technologies'

export default function Home({ Component, pageProps }) {
  //Enable smooth scrolling on iOS devices
  useEffect(() => {
    smoothscroll.polyfill()
  }, [])

  return (
    <div>
      <Head id="home">
        <title>Alex Maldonado | Software Developer</title>
        <meta
          name="description"
          content="Personal Web Developer Portfolio. See my projects!"
        />
        <meta property="og:image" content="/images/ogImage.jpeg" />
        <meta
          property="og:title"
          content="Alex Maldonado | Software Developer"
        />
        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://www.AlexMaldonado.dev" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/favicon/site.webmanifest"></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        ></link>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <Hero />
      <Projects />
      <Technologies />
    </div>
  )
}
