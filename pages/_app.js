import { useEffect, useState } from 'react';
import '../styles/globals.css';
import Head from 'next/head';
import CustomCursor from '../components/CustomCursor';

function MyApp({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Head>
        <title>Uminda Aberathne | Full-Stack Developer & Freelancer</title>
        <meta name="description" content="Uminda Aberathne's personal portfolio - Full-Stack Developer, Freelancer, and Tech Problem Solver specializing in web and mobile applications" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />

        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Uminda Aberathne | Full-Stack Developer & Freelancer" />
        <meta property="og:description" content="Building Real-World Solutions with Code & Business Focus" />
        <meta property="og:image" content="/images/og-image.svg" />
        <meta property="og:url" content="https://uminda-portfolio.pages.dev" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Uminda Aberathne | Full-Stack Developer & Freelancer" />
        <meta name="twitter:description" content="Building Real-World Solutions with Code & Business Focus" />
        <meta name="twitter:image" content="/images/og-image.svg" />
      </Head>
      <CustomCursor />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;