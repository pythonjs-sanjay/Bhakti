import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    // Mobile Nav
    const hamburger = document.querySelector(".hamburger-menu");
    const mobileNav = document.querySelector(".mobile-nav");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav a");

    const toggleNav = () => {
      hamburger.classList.toggle("is-open");
      mobileNav.classList.toggle("is-open");
      document.body.classList.toggle("mobile-nav-open");
    };

    const closeNav = () => {
      hamburger.classList.remove("is-open");
      mobileNav.classList.remove("is-open");
      document.body.classList.remove("mobile-nav-open");
    };

    if (hamburger && mobileNav) {
      hamburger.addEventListener("click", toggleNav);
      mobileNavLinks.forEach((link) => {
        link.addEventListener("click", closeNav);
      });
    }

    // Scroll Animation
    const animatedElements = document.querySelectorAll(".scroll-animate");
    let observer;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      animatedElements.forEach((element) => observer.observe(element));
    } else {
      animatedElements.forEach((element) =>
        element.classList.add("is-visible")
      );
    }

    // Scroll To Top Logic
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Correct Cleanup function
    return () => {
      if (hamburger) {
        hamburger.removeEventListener("click", toggleNav);
      }
      mobileNavLinks.forEach((link) => {
        link.removeEventListener("click", closeNav);
      });
      if (observer) {
        observer.disconnect();
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [children]); // Rerun on page change

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Head>
        <title>वैदिक परंपरा - Pandit Ji Services</title>
        <meta
          name="description"
          content="Online services for Hindu pujas, rituals, and astrology."
        />
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

      {showTopBtn && (
        <button
          onClick={goToTop}
          className="scroll-to-top"
          aria-label="Scroll to top"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}

      <a
        href="https://wa.me/919529183899" // Replace with actual number
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      <Footer />
    </>
  );
}
