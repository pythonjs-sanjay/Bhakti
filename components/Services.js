import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function Services() {
  const { t } = useTranslation('common');
  return (
    <div className="services-section" id="services">
      <div className="container">
        <h2 className="section-heading">{t('services_title')}</h2>
        <p className="section-subtext">
          {t('services_subtitle')}
        </p>
        <div className="services-grid">
          <div className="service-card scroll-animate">
            <i className="fa-solid fa-ring"></i>
            <h3>{t('service_1_title')}</h3>
            <p>{t('service_1_desc')}</p>
          </div>
          <div className="service-card scroll-animate">
            <i className="fa-solid fa-hands-praying"></i>
            <h3>{t('service_2_title')}</h3>
            <p>{t('service_2_desc')}</p>
          </div>
          <div className="service-card scroll-animate">
            <i className="fa-solid fa-star"></i>
            <h3>{t('service_3_title')}</h3>
            <p>{t('service_3_desc')}</p>
          </div>
          <div className="service-card scroll-animate">
            <i className="fa-solid fa-house-chimney"></i>
            <h3>{t('service_4_title')}</h3>
            <p>{t('service_4_desc')}</p>
          </div>
          <div className="service-card scroll-animate">
            <i className="fa-solid fa-om"></i>
            <h3>{t('service_5_title')}</h3>
            <p>{t('service_5_desc')}</p>
          </div>
          <div className="service-card scroll-animate" style={{ borderLeftColor: 'var(--saffron-accent)' }}>
            <i className="fa-solid fa-phone" style={{ color: 'var(--primary-gold)' }}></i>
            <h3>{t('service_6_title')}</h3>
            <p dangerouslySetInnerHTML={{ __html: t('service_6_desc') }} />
            <Link href="/contact" className="cta-button" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
                {t('service_6_cta')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
