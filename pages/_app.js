import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import '../styles/gallery.css';
import Head from 'next/head';
import CustomCursor from '../components/CustomCursor';
import ErrorBoundary from '../components/ErrorBoundary';

function MyApp({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);

    // Handle router errors to prevent "Cancel rendering route" errors
    const handleRouteChangeError = (err, url) => {
      if (err.cancelled) {
        console.log(`Route to ${url} was cancelled`);
        return;
      }
      console.error('Router error:', err);
    };

    const handleRouteChangeStart = (url) => {
      // Prevent multiple rapid route changes
      if (router.asPath === url) {
        return;
      }
    };

    const handleRouteChangeComplete = () => {
      // Ensure smooth scrolling for hash links
      if (typeof window !== 'undefined' && window.location.hash) {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    router.events.on('routeChangeError', handleRouteChangeError);
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeError', handleRouteChangeError);
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);

  if (!mounted) return null;

  return (
    <ErrorBoundary>
      <Head>
        <title>Uminda Aberathne | Full-Stack Developer & Freelancer</title>
        <meta name="description" content="Uminda Aberathne's personal portfolio - Full-Stack Developer, Freelancer, and Web & Mobile App Builder specializing in real-world business solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />

        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Uminda Aberathne | Full-Stack Developer & Freelancer" />
        <meta property="og:description" content="Self-taught full-stack developer with 4+ years experience building real-world web and mobile applications" />
        <meta property="og:image" content="/images/og-image.svg" />
        <meta property="og:url" content="https://uminda-portfolio.pages.dev" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Uminda Aberathne | Full-Stack Developer & Freelancer" />
        <meta name="twitter:description" content="Self-taught full-stack developer with 4+ years experience building real-world web and mobile applications" />
        <meta name="twitter:image" content="/images/og-image.svg" />
      </Head>
      <CustomCursor />
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;