import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import { ThemeProvider } from 'next-themes'
import NextNProgress from 'nextjs-progressbar'
import Layout from '../components/Layout'
// import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
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
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});`}
      </Script>
    </ThemeProvider>
  )
}

export default MyApp
