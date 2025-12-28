import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-branding">
            <h3 className="footer-logo">🕉️ वैदिक परंपरा</h3>
            <p>पवित्रता, विश्वास, और वैदिक परंपरा।</p>
          </div>
          <div className="footer-links">
            <h4>क्विक लिंक्स</h4>
            <Link href="/">होम</Link>
            <Link href="/#services">सेवाएँ</Link>
            <Link href="/about">हमारे बारे में</Link>
            <Link href="/contact">संपर्क</Link>
            <Link href="/blog">ब्लॉग</Link>
          </div>
          <div className="footer-socials-new">
            <h4>हमसे जुड़ें</h4>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Youtube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 वैदिक परंपरा. सर्वाधिकार सुरक्षित।</p>
          <p>
            Made with ❤️ by{" "}
            <a
              href="https://pythonjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              PythonJs.org
            </a>
          </p>
          <a href="#" className="back-to-top">
            ऊपर जाएँ <i className="fa-solid fa-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
