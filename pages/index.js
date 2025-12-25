import { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';

export default function Home() {
  
  useEffect(() => {
    // Scroll Animation
    const animatedElements = document.querySelectorAll('.scroll-animate');
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      animatedElements.forEach((element) => {
        observer.observe(element);
      });
    } else {
      animatedElements.forEach((element) => {
        element.classList.add("is-visible");
      });
    }

    // Text Carousel for Hero Heading
    const headingElement = document.getElementById("animated-heading");
    if (headingElement) {
      const headings = [
        "पवित्रता, विश्वास, और वैदिक परंपरा का संगम।",
        "सभी धार्मिक अनुष्ठानों के लिए विशेषज्ञ।",
        "ज्योतिष और वैदिक समाधान।",
      ];
      let currentIndex = 0;

      const intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % headings.length;

        headingElement.classList.add("fading-out");
        headingElement.classList.remove("fading-in");

        setTimeout(() => {
          headingElement.innerText = headings[currentIndex];
          headingElement.classList.remove("fading-out");
          headingElement.classList.add("fading-in");
        }, 500);
      }, 3000);
      
      return () => clearInterval(intervalId); // Cleanup on component unmount
    }
  }, []);

  return (
    <>
      <Hero />
      <Services />
    </>
  );
}
