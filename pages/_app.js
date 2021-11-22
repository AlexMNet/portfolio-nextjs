import 'tailwindcss/tailwind.css';
import '../styles/global.css';
import { ThemeProvider } from 'next-themes';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='light' enableSystem={false}>
      <NextNProgress height={5} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
