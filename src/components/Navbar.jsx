import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Speakers & Panels', href: '#speakers' },
  { label: 'Timeline & Highlights', href: '#timeline' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const updateNavigation = () => {
      setScrolled(window.scrollY > 24);

      const current = navItems
        .map(({ href }) => document.querySelector(href))
        .filter(Boolean)
        .reverse()
        .find((section) => section.getBoundingClientRect().top <= 150);

      setActiveSection(current?.id || 'hero');
    };

    updateNavigation();
    window.addEventListener('scroll', updateNavigation, { passive: true });
    return () => window.removeEventListener('scroll', updateNavigation);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="summit-nav container" aria-label="Primary navigation">
        <a className="brand-lockup" href="#hero" onClick={closeMenu} aria-label="ASTRAX 2026 home">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-mark-left" />
            <span className="brand-mark-right" />
          </span>
          <span className="brand-copy">
            <span className="brand-name">ASTRAX’26</span>
            <span className="brand-tagline">AI INNOVATION SUMMIT</span>
          </span>
        </a>

        <div className={`nav-menu ${menuOpen ? 'is-open' : ''}`}>
          <div className="nav-menu-inner">
            {navItems.map((item) => {
              const sectionId = item.href.slice(1);
              return (
                <a
                  key={item.href}
                  className={`nav-link ${activeSection === sectionId ? 'is-active' : ''}`}
                  href={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              );
            })}

            <a className="nav-register mobile-register" href="#register" onClick={closeMenu}>
              <span>Register now</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        <a className="nav-register desktop-register" href="#register">
          <span>Register now</span>
          <ArrowUpRight size={18} />
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
