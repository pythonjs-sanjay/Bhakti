import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function Footer() {
  const { t } = useTranslation("common");

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-branding">
            <h3 className="footer-logo">{t("site_title")}</h3>
            <p>{t("footer_tagline")}</p>
          </div>
          <div className="footer-links">
            <h4>{t("footer_quick_links")}</h4>
            <Link href="/">{t("nav_home")}</Link>
            <Link href="/#services">{t("nav_services")}</Link>
            <Link href="/about">{t("nav_about")}</Link>
            <Link href="/contact">{t("nav_contact")}</Link>
            <Link href="/blog">{t("nav_blog")}</Link>
          </div>
          <div className="footer-socials-new">
            <h4>{t("footer_follow_us")}</h4>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/share/17h2fBaaaC/"
                aria-label="Facebook"
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/p.ramkishanjoshi?igsh=Y2dlcDJnZTh6bmV5"
                aria-label="Instagram"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Youtube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p dangerouslySetInnerHTML={{ __html: t("footer_copyright") }} />
          <p>
            {t("footer_made_by")}{" "}
            <a
              href="https://pythonjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              PythonJs.org
            </a>
          </p>
          <a href="#" className="back-to-top">
            {t("footer_back_to_top")} <i className="fa-solid fa-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
