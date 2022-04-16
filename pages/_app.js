import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import React, { useEffect } from 'react'
import { ThemeProvider } from 'next-themes'
import NextNProgress from 'nextjs-progressbar'
import Layout from '../components/Layout'
// import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router'
import * as ga from '../lib/ga'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <NextNProgress height={5} />
      {/* <motion.div
        key={router.pathname}
        initial='initial'
        animate='animate'
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}
        exit={{ opacity: 0 }}
      > */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* </motion.div> */}
    </ThemeProvider>
  )
}

export default MyApp
