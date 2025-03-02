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
        <title>Uminda Aberathne | Web Developer & UI/UX Designer</title>
        <meta name="description" content="Uminda Aberathne's personal portfolio - Web Developer, UI/UX Designer, App Developer, Crypto Trader, and Entrepreneur" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Uminda Aberathne | Web Developer & UI/UX Designer" />
        <meta property="og:description" content="Crafting Digital Experiences with Code & Design" />
        <meta property="og:image" content="/images/og-image.svg" />
        <meta property="og:url" content="https://uminda-portfolio.vercel.app" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Uminda Aberathne | Web Developer & UI/UX Designer" />
        <meta name="twitter:description" content="Crafting Digital Experiences with Code & Design" />
        <meta name="twitter:image" content="/images/og-image.svg" />
      </Head>
      <CustomCursor />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp; 