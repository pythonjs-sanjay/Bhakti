import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export default function Navbar() {
  const router = useRouter();
  const currentPath = router.pathname;
  const { t } = useTranslation("common");

  return (
    <>
      <div className="navbar">
        <div className="container nav-content">
          <div className="logo">
            <Link href="/">{t("site_title")}</Link>
          </div>
          <div className="nav-links">
            <Link href="/" className={currentPath === "/" ? "active" : ""}>
              {t("nav_home")}
            </Link>
            <Link
              href="/#services"
              className={currentPath === "/#services" ? "active" : ""}
            >
              {t("nav_services")}
            </Link>
            <Link
              href="/about"
              className={currentPath === "/about" ? "active" : ""}
            >
              {t("nav_about")}
            </Link>
            <Link
              href="/contact"
              className={currentPath === "/contact" ? "active" : ""}
            >
              {t("nav_contact")}
            </Link>
            <Link
              href="/blog"
              className={currentPath.startsWith("/blog") ? "active" : ""}
            >
              {t("nav_blog")}
            </Link>
          </div>

          <div className="lang-switcher">
            {router.locales.map((locale) => (
              <Link
                key={locale}
                href={router.asPath}
                locale={locale}
                className={router.locale === locale ? "active" : ""}
              >
                {locale === "hi" ? "हिंदी" : "EN"}
              </Link>
            ))}
          </div>

          <button className="hamburger-menu" aria-label="Open navigation menu">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>
      <div className="mobile-nav">
        <Link href="/">{t("nav_home")}</Link>
        <Link href="/#services">{t("nav_services")}</Link>
        <Link href="/about">{t("nav_about")}</Link>
        <Link href="/contact">{t("nav_contact")}</Link>
        <Link href="/blog">{t("nav_blog")}</Link>

        {/* <div className="mobile-socials">
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="Youtube">
            <i className="fab fa-youtube"></i>
          </a>
        </div> */}

        {/* <div className="lang-switcher mobile-lang-switcher">
          {router.locales.map((locale) => (
            <Link
              key={locale}
              href={router.asPath}
              locale={locale}
              className={router.locale === locale ? 'active' : ''}
            >
              {locale === 'hi' ? 'हिंदी' : 'EN'}
            </Link>
          ))}
        </div> */}
      </div>
    </>
  );
}
