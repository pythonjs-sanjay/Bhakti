import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <>
      <div className="navbar">
        <div className="container nav-content">
          <div className="logo">
            <Link href="/">🕉️ वैदिक परंपरा</Link>
          </div>
          <div className="nav-links">
            <Link href="/" className={currentPath === '/' ? 'active' : ''}>होम</Link>
            <Link href="/#services" className={currentPath === '/#services' ? 'active' : ''}>सेवाएँ</Link>
            <Link href="/about" className={currentPath === '/about' ? 'active' : ''}>हमारे बारे में</Link>
            <Link href="/contact" className={currentPath === '/contact' ? 'active' : ''}>संपर्क</Link>
            <Link href="/blog" className={currentPath.startsWith('/blog') ? 'active' : ''}>ब्लॉग</Link>
          </div>
          <button className="hamburger-menu" aria-label="Open navigation menu">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>
      <div className="mobile-nav">
        <button className="mobile-nav-close" aria-label="Close navigation menu">&times;</button>
        <Link href="/">होम</Link>
        <Link href="/#services">सेवाएँ</Link>
        <Link href="/about">हमारे बारे में</Link>
        <Link href="/contact">संपर्क</Link>
        <Link href="/blog">ब्लॉग</Link>
      </div>
    </>
  );
}
