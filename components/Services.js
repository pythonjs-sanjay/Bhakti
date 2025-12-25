import Link from 'next/link';

export default function Services() {
  return (
    <div className="services-section" id="services">
      <div className="container">
        <h2 className="section-heading">हमारे विशेषज्ञ सेवाएँ</h2>
        <p className="section-subtext">
          हर अनुष्ठान को पूर्ण श्रद्धा और विधि-विधान के साथ संपन्न करने की हमारी
          प्रतिबद्धता।
        </p>
        <div className="services-grid">
          <div className="service-card scroll-animate">
            <i className="fa-solid fa-ring"></i>
            <h3>विवाह संस्कार</h3>
            <p>
              उत्तम मुहूर्त चयन, संपूर्ण वैदिक रीति और सात फेरों की सही विधि।
            </p>
          </div>
          <div className="service-card scroll-animate">
            <i className="fa-solid fa-hands-praying"></i>
            <h3>विशेष पूजा एवं कथा</h3>
            <p>
              सत्यनारायण, रुद्राभिषेक, भागवत, और सभी प्रकार के विशेष धार्मिक
              अनुष्ठान।
            </p>
          </div>
          <div className="service-card scroll-animate">
            <i className="fa-solid fa-star"></i>
            <h3>सटीक ज्योतिष परामर्श</h3>
            <p>
              जन्म कुंडली अध्ययन, ग्रह दोष निवारण, और करियर/विवाह मार्गदर्शन।
            </p>
          </div>
          <div className="service-card scroll-animate">
            <i className="fa-solid fa-house-chimney"></i>
            <h3>गृह प्रवेश एवं वास्तु</h3>
            <p>
              गृह शांति, वास्तु दोष निवारण, और नए घर में सकारात्मक ऊर्जा का
              संचार।
            </p>
          </div>
          <div className="service-card scroll-animate">
            <i className="fa-solid fa-om"></i>
            <h3>जीवन के अन्य संस्कार</h3>
            <p>नामकरण, मुंडन, यज्ञोपवीत (जनेऊ), और अन्य सभी 16 संस्कार।</p>
          </div>
          <div className="service-card scroll-animate" style={{ borderLeftColor: 'var(--saffron-accent)' }}>
            <i className="fa-solid fa-phone" style={{ color: 'var(--primary-gold)' }}></i>
            <h3>तत्काल अपॉइंटमेंट</h3>
            <p>
              सेवाओं की उपलब्धता और मुहूर्त के लिए हमसे **सीधे संपर्क करें**।
            </p>
            <Link href="/contact" className="cta-button" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
                संपर्क विवरण देखें
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
