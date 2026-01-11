import { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import hi_translations from '../public/locales/hi/common.json';
import en_translations from '../public/locales/en/common.json';

export async function getStaticProps({ locale }) {
  const translations = locale === 'hi' ? hi_translations : en_translations;
  const serviceData = translations.service_categories;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      serviceData,
    },
  };
}

export default function Home({ serviceData }) {
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
      <Services serviceData={serviceData} />
    </>
  );
}
