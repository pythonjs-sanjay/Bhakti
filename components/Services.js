import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function Services() {
  const { t } = useTranslation('common');

  const serviceCategories = [
    {
      title: "त्योहार एवं पर्व पूजा",
      subtitle: "Festival & Seasonal Pujas",
      icon: "fa-solid fa-calendar-days",
      services: [
        { name: "गणेश पूजा", desc: "Ganesh Puja" },
        { name: "लक्ष्मी पूजा / दीवाली पूजा", desc: "Lakshmi Puja / Diwali Special" },
        { name: "नवरात्रि पूजा / दुर्गा पूजा", desc: "Navratri / Durga Puja" },
        { name: "सरस्वती पूजा", desc: "Saraswati Puja" },
        { name: "शिवरात्रि पूजा", desc: "Shivratri Puja" },
      ]
    },
    {
      title: "हवन एवं यज्ञ",
      subtitle: "Havan & Yagna",
      icon: "fa-solid fa-fire",
      services: [
        { name: "नवग्रह यज्ञ / शांति हवन", desc: "Navgrah Yagna" },
        { name: "रुद्राभिषेक सहित यज्ञ", desc: "Rudrabhishek Havan" },
        { name: "गायत्री अनुष्ठान", desc: "Gayatri Anusthan" },
        { name: "महामृत्युंजय जप", desc: "Mahamrityunjay Jap" },
        { name: "वास्तु शांति यज्ञ", desc: "Vastu Shanti Yagya" },
      ]
    },
    {
      title: "व्यावसायिक सेवाएं",
      subtitle: "Corporate & Business Services",
      icon: "fa-solid fa-building",
      services: [
        { name: "दुकान / कार्यालय उद्घाटन पूजा", desc: "Office Opening Puja" },
        { name: "व्यवसाय शुभारंभ पूजा", desc: "Business / Startup Puja" },
        { name: "फैक्ट्री पूजा", desc: "Factory / Unit Puja" },
        { name: "गृह प्रवेश / ऑफिस पूजा", desc: "Griha Pravesh / Office Puja" },
      ]
    },
    {
      title: "पाठ एवं सत्संग",
      subtitle: "Path & Satsang Events",
      icon: "fa-solid fa-book-open",
      services: [
        { name: "अखंड रामायण पाठ", desc: "Akhand Ramayan Path (24 hrs)" },
        { name: "सत्यनारायण कथा", desc: "Satyanarayan Katha" },
        { name: "गणपति पाठ", desc: "Ganpati Path" },
        { name: "महालक्ष्मी पाठ", desc: "Mahalaxmi Path" },
        { name: "सभी स्तोत्र पाठ", desc: "All Stotra Path" },
      ]
    },
    {
      title: "व्रत उद्यापन",
      subtitle: "Vrat & Personal Observances",
      icon: "fa-solid fa-moon",
      services: [
        { name: "एकादशी उद्यापन", desc: "Ekadashi Udhyapan" },
        { name: "करवा चौथ उद्यापन", desc: "Karva Chauth Udhyapan" },
        { name: "पूर्णिमा उद्यापन", desc: "Purnima Udhyapan" },
        { name: "अनंत चतुर्दशी उद्यापन", desc: "Anant Chaturdashi Udhyapan" },
        { name: "तिथि विशेष के व्रत उद्यापन", desc: "Tithi-specific Vrat Udhyapan" },
      ]
    },
    {
      title: "ज्योतिष दोष निवारण",
      subtitle: "Astrology-Linked Rituals",
      icon: "fa-solid fa-star",
      services: [
        { name: "मांगलिक दोष निवारण", desc: "Mangal Dosh Nivaran Puja" },
        { name: "राहु/केतु शांति पूजा", desc: "Rahu / Ketu Shanti Puja" },
        { name: "नक्षत्र दोष पूजा", desc: "Nakshatra Dosha Puja" },
        { name: "कुंडली विश्लेषण", desc: "Kundli Analysis" },
      ]
    },
    {
      title: "विवाह एवं संस्कार",
      subtitle: "Wedding & Life Events",
      icon: "fa-solid fa-ring",
      services: [
        { name: "सगाई पूजा", desc: "Engagement Puja" },
        { name: "विवाह पूजा", desc: "Wedding Puja" },
        { name: "नामकरण संस्कार", desc: "Namkaran Sanskar" },
        { name: "यज्ञोपवीत (जनेऊ)", desc: "Janeu Sanskar" },
        { name: "गृह प्रवेश", desc: "Griha Pravesh" },
      ]
    },
    {
      title: "पितृ कर्म",
      subtitle: "Ancestral & Pitra Rituals",
      icon: "fa-solid fa-hands-praying",
      services: [
        { name: "श्राद्ध कर्म", desc: "Shraddh Karma" },
        { name: "तर्पण", desc: "Tarpan" },
        { name: "पितृ दोष निवारण", desc: "Pitra Dosh Nivaran" },
      ]
    },
  ];

  return (
    <div className="services-section" id="services">
      <div className="container">
        <h2 className="section-heading">{t('services_title')}</h2>
        <p className="section-subtext">
          {t('services_subtitle')}
        </p>

        <div className="services-grid">
          {serviceCategories.map((category, index) => (
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
          ))}

          {/* Special Devotional Events Card */}
          <div className="service-card scroll-animate special-card">
            <i className="fa-solid fa-music"></i>
            <h3>भजन संध्या एवं कीर्तन</h3>
            <span className="service-subtitle">Devotional Music Events</span>
            <div className="special-services">
              <div className="special-item">
                <i className="fa-solid fa-om"></i>
                <span>भजन संध्या</span>
                <small>Bhajan Sandhya</small>
              </div>
              <div className="special-item">
                <i className="fa-solid fa-hands-praying"></i>
                <span>श्याम कीर्तन</span>
                <small>Shyam Kirtan</small>
              </div>
              <div className="special-item">
                <i className="fa-solid fa-book-open"></i>
                <span>मंगल पाठ</span>
                <small>Mangal Path</small>
              </div>
              <div className="special-item">
                <i className="fa-solid fa-book"></i>
                <span>सुंदरकांड पाठ</span>
                <small>Sunderkand Path</small>
              </div>
            </div>
            <p className="special-note">आध्यात्मिक शांति और भक्ति का अनुभव</p>
          </div>

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
