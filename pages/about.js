import Head from "next/head";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function AboutPage() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>
          {t("about_page_title")} - {t("site_title")}
        </title>
      </Head>

      <div className="page-header">
        <div className="container">
          <h1>{t("about_page_title")}</h1>
        </div>
      </div>

      <div className="about-us-section page-section">
        <div className="container">
          <div className="about-us-content">
            <div className="about-us-image">
              <Image 
                src="/images/my_img.jpeg" 
                alt={t("about_acharya_name")} 
                width={500} 
                height={600}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="about-us-text">
              <h2>{t("about_acharya_name")}</h2>
              <p className="tagline">{t("about_acharya_tagline")}</p>
              <p>{t("about_acharya_desc_1")}</p>

              <div className="mission-statement">
                <h4>{t("about_mission_title")}</h4>
                <p>{t("about_mission_desc")}</p>
              </div>

              <p>{t("about_acharya_desc_2")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
