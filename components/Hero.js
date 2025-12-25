import Link from 'next/link';

export default function Hero() {
  return (
    <div className="hero-section" id="home">
      <div className="container hero-container">
        <div className="hero-text">
          <h1 id="animated-heading">
            पवित्रता, विश्वास, और वैदिक परंपरा का संगम
          </h1>
          <p>
            भारत के प्रतिष्ठित आचार्य **राम गोपाल शास्त्री जी** द्वारा अपने सभी
            धार्मिक अनुष्ठानों को शुद्धता और संपूर्ण विधि-विधान के साथ संपन्न
            कराएं।
          </p>
          <Link href="/contact" className="cta-button">
            परामर्श/पूजा बुक करें
          </Link>
        </div>
        <div className="hero-image">
          <img src="/images/freepik.png" alt="श्री गणेश" />
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
