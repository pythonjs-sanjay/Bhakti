import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>हमारे बारे में - वैदिक परंपरा</title>
      </Head>

      <div className="page-header">
        <div className="container">
            <h1>हमारे बारे में</h1>
        </div>
      </div>

      <div className="about-us-section page-section">
          <div className="container">
              <div className="about-us-content">
                  <div className="about-us-image">
                      <img src="/images/freepik.png" alt="आचार्य राम गोपाल शास्त्री जी" />
                  </div>
                  <div className="about-us-text">
                      <h2>आचार्य राम गोपाल शास्त्री जी</h2>
                      <p className="tagline">पवित्रता, विश्वास, और वैदिक परंपरा का संगम।</p>
                      <p>आचार्य राम गोपाल शास्त्री जी एक प्रतिष्ठित और ज्ञानी विद्वान हैं, जिन्हें वैदिक अनुष्ठानों और ज्योतिष का गहरा ज्ञान है। उन्होंने अपना जीवन सनातन धर्म के प्रचार और लोगों को उनकी आध्यात्मिक यात्रा में मार्गदर्शन करने के लिए समर्पित कर दिया है।</p>
                      
                      <div className="mission-statement">
                          <h4>हमारा लक्ष्य</h4>
                          <p>हमारा लक्ष्य हर अनुष्ठान को पूर्ण शुद्धता, भक्ति और विधि-विधान के साथ संपन्न करना है, ताकि यजमान को उसका सर्वोत्तम फल और आध्यात्मिक शांति प्राप्त हो सके।</p>
                      </div>

                      <p>भारत के एक सम्मानित गुरुकुल से शिक्षित, शास्त्री जी ने सभी प्रमुख वेदों, पुराणों और उपनिषदों का गहन अध्ययन किया है। वह विवाह संस्कार, गृह प्रवेश, विशेष पूजा-पाठ, और ज्योतिष परामर्श सहित सभी प्रकार की धार्मिक सेवाओं में विशेषज्ञ हैं।</p>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}
