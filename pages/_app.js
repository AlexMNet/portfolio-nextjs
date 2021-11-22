import 'tailwindcss/tailwind.css';
import '../styles/global.css';
import { ThemeProvider } from 'next-themes';
import NextNProgress from 'nextjs-progressbar';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='light' enableSystem={false}>
      <NextNProgress height={5} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
