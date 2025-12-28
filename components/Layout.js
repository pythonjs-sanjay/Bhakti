import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';
import { useEffect } from 'react';

export default function Layout({ children }) {
  useEffect(() => {
    // Mobile Nav
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.mobile-nav');
    const closeBtn = document.querySelector('.mobile-nav-close');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

    if (hamburger && mobileNav && closeBtn && mobileNavLinks) {
      const openNav = () => {
        mobileNav.classList.add('is-open');
        hamburger.classList.add('is-open');
        document.body.classList.add('mobile-nav-open');
      };

      const closeNav = () => {
        mobileNav.classList.remove('is-open');
        hamburger.classList.remove('is-open');
        document.body.classList.remove('mobile-nav-open');
      };

      hamburger.addEventListener('click', openNav);
      closeBtn.addEventListener('click', closeNav);
      mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeNav);
      });

      // Cleanup function to remove event listeners
      return () => {
        hamburger.removeEventListener('click', openNav);
        closeBtn.removeEventListener('click', closeNav);
        mobileNavLinks.forEach(link => {
          link.removeEventListener('click', closeNav);
        });
      };
    }
  }, []);

  return (
    <>
      <Head>
        <title>वैदिक परंपरा - Pandit Ji Services</title>
        <meta name="description" content="Online services for Hindu pujas, rituals, and astrology." />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Poppins:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
