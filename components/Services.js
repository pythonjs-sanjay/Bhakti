import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function Services({ serviceData }) {
  const { t } = useTranslation('common');

  return (
    <div className="services-section" id="services">
      <div className="container">
        <h2 className="section-heading">{t('services_title')}</h2>
        <p className="section-subtext">
          {t('services_subtitle')}
        </p>

        <div className="services-grid">
          {serviceData.map((category, index) => {
            if (category.special_card) {
              return (
                <div className="service-card scroll-animate special-card" key={index}>
                  <i className={category.icon}></i>
                  <h3>{category.title}</h3>
                  <span className="service-subtitle">{category.subtitle}</span>
                  <div className="special-services">
                    {category.items.map((item, idx) => (
                      <div className="special-item" key={idx}>
                        <i className={item.icon || 'fa-solid fa-om'}></i>
                        <span>{item.name}</span>
                        <small>{item.sub}</small>
                      </div>
                    ))}
                  </div>
                  <p className="special-note">{category.note}</p>
                </div>
              );
            }
            return (
              <div className="service-card scroll-animate" key={index}>
                <i className={category.icon}></i>
                <h3>{category.title}</h3>
                <span className="service-subtitle">{category.subtitle}</span>
                <ul className="service-list">
                  {category.services.map((service, idx) => (
                    <li key={idx}>
                      <span className="service-name">{service.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          <div className="service-card scroll-animate cta-card">
            <i className="fa-solid fa-phone"></i>
            <h3>{t('service_6_title')}</h3>
            <p dangerouslySetInnerHTML={{ __html: t('service_6_desc') }} />
            <Link href="/contact" className="cta-button" style={{ padding: '10px 20px', fontSize: '0.9rem', marginTop: '15px' }}>
              {t('service_6_cta')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
