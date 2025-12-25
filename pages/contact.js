import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>संपर्क करें - वैदिक परंपरा</title>
      </Head>

      <div className="page-header">
        <div className="container">
            <h1>संपर्क करें</h1>
            <p>पूजा, अनुष्ठान या परामर्श के लिए आज ही हमसे जुड़ें।</p>
        </div>
      </div>

      <div className="contact-page-section page-section">
          <div className="container">
              <div className="contact-grid">
                  <div className="contact-info">
                      <h3>संपर्क विवरण</h3>
                      <p>नीचे दिए गए विवरण के माध्यम से आप हमसे सीधे संपर्क कर सकते हैं। हम आपकी सेवा में सदैव तत्पर हैं।</p>
                      <div className="info-item">
                          <i className="fa-solid fa-phone"></i>
                          <div>
                              <h4>फ़ोन</h4>
                              <span>+91 98765 43210</span>
                          </div>
                      </div>
                      <div className="info-item">
                          <i className="fa-solid fa-envelope"></i>
                          <div>
                              <h4>ईमेल</h4>
                              <span>panditji@email.com</span>
                          </div>
                      </div>
                      <div className="info-item">
                          <i className="fa-solid fa-map-marker-alt"></i>
                          <div>
                              <h4>पता</h4>
                              <span>अयोध्या, उत्तर प्रदेश, भारत</span>
                          </div>
                      </div>
                  </div>
                  <div className="contact-form-container">
                      <h3>हमें एक संदेश भेजें</h3>
                      <form className="contact-form" action="#" method="POST">
                          <div className="form-group">
                              <label htmlFor="name">आपका नाम</label>
                              <input type="text" id="name" name="name" required />
                          </div>
                          <div className="form-group">
                              <label htmlFor="email">आपका ईमेल</label>
                              <input type="email" id="email" name="email" required />
                          </div>
                          <div className="form-group">
                              <label htmlFor="service">सेवा का प्रकार</label>
                              <select id="service" name="service">
                                  <option>--सेवा चुनें--</option>
                                  <option>विवाह संस्कार</option>
                                  <option>विशेष पूजा</option>
                                  <option>ज्योतिष परामर्श</option>
                                  <option>गृह प्रवेश</option>
                                  <option>अन्य</option>
                              </select>
                          </div>
                          <div className="form-group">
                              <label htmlFor="message">आपका संदेश</label>
                              <textarea id="message" name="message" rows="5" required></textarea>
                          </div>
                          <button type="submit" className="cta-button">संदेश भेजें</button>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}
