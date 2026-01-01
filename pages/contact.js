import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function ContactPage() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>
          {t("contact_page_title")} - {t("site_title")}
        </title>
      </Head>

      <div className="page-header">
        <div className="container">
          <h1>{t("contact_page_title")}</h1>
          <p>{t("contact_page_subtitle")}</p>
        </div>
      </div>

      <div className="contact-page-section page-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h3>{t("contact_details_title")}</h3>
              <p>{t("contact_details_desc")}</p>
              <div className="info-item">
                <i className="fa-solid fa-phone"></i>
                <div>
                  <h4>{t("contact_phone")}</h4>
                  <span>+91 95291 83899</span>
                </div>
              </div>
              <div className="info-item">
                <i className="fa-solid fa-envelope"></i>
                <div>
                  <h4>{t("contact_email")}</h4>
                  <span>@email.com</span>
                </div>
              </div>
              <div className="info-item">
                <i className="fa-solid fa-map-marker-alt"></i>
                <div>
                  <h4>{t("contact_address")}</h4>
                  <span>Bikaner, Rajasthan</span>
                </div>
              </div>
            </div>
            <div className="contact-form-container">
              <h3>{t("contact_form_title")}</h3>
              <form className="contact-form" action="#" method="POST">
                <div className="form-group">
                  <label htmlFor="name">{t("form_name")}</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{t("form_email")}</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="service">{t("form_service_type")}</label>
                  <select id="service" name="service">
                    <option>{t("service_option_default")}</option>
                    <option>{t("service_option_marriage")}</option>
                    <option>{t("service_option_puja")}</option>
                    <option>{t("service_option_astrology")}</option>
                    <option>{t("service_option_griha_pravesh")}</option>
                    <option>{t("service_option_other")}</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">{t("form_message")}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="cta-button">
                  {t("form_submit_button")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
