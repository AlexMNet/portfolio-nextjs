import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SocialMedia from '../components/SocialMedia';
import Projects from '../components/Projects.js';

export default function Home({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Alex Maldonado | Web Developer</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <SocialMedia />
      <Hero />
      <Projects />
    </div>
  );
}
