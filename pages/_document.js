import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body className='dark:bg-black relative min-h-screen flex flex-col'>
          <Main className='flex-auto' />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
