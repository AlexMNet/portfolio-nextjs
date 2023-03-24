import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html className="h-full scroll-smooth">
        <Head />
        <meta name="description" content="" />
        <meta property="og:image" content="/images/ogImage.jpeg" />
        <body className="bg-white dark:bg-neutral-900 relative min-h-screen flex flex-col">
          <Main className="flex-auto" />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
