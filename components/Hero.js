import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

export default function Hero() {
  const { t } = useTranslation('common');

  return (
    <div className="hero-section" id="home">
      <div className="container hero-container">
        <div className="hero-text">
          <h1 id="animated-heading">
            {t('hero_title')}
          </h1>
          <p dangerouslySetInnerHTML={{ __html: t('hero_subtitle') }} />
          <Link href="/contact" className="cta-button">
            {t('hero_cta')}
          </Link>
        </div>
        <div className="hero-image">
          <Image 
            src="/images/ganesh.png" 
            alt="श्री गणेश" 
            width={600} 
            height={600}
            priority
            style={{ width: '100%', height: 'auto' }}
          />
          <div className="flower-shower">
            <span className="flower">❁</span>
            <span className="flower">❁</span>
            <span className="flower">❁</span>
            <span className="flower">❁</span>
            <span className="flower">❁</span>
            <span className="flower">❁</span>
            <span className="flower">❁</span>
            <span className="flower">❁</span>
          </div>
        </div>
      </div>
    </div>
  );
}
