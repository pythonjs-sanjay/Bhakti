import { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function Home() {
  const { t } = useTranslation('common');

  useEffect(() => {
    const headingElement = document.getElementById("animated-heading");
    if (headingElement) {
      const headings = [
        t('hero_carousel_1'),
        t('hero_carousel_2'),
        t('hero_carousel_3'),
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
      
      return () => clearInterval(intervalId);
    }
  }, [t]);

  return (
    <>
      <Hero />
      <Services />
    </>
  );
}
