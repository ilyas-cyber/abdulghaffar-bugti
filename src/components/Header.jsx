import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Menu, X, ShoppingBag, Sun, Moon } from 'lucide-react';

const Header = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('ab_theme') || 'light');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ab_theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-container">
          <div className="logo-area" onClick={() => scrollToSection('home')}>
            <span className="logo-title">Abdul Ghaffar Bugti</span>
            <span className="logo-subtitle">Rights Activist & Columnist</span>
          </div>

          <nav className="desktop-nav">
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">Biography</button>
            <button onClick={() => scrollToSection('blog')} className="nav-link">Columns</button>
            <button onClick={() => scrollToSection('books')} className="nav-link">Books</button>
            <button onClick={() => scrollToSection('donate')} className="nav-link donate-nav-btn">Donate</button>
          </nav>

          <div className="header-actions">
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <button onClick={() => setIsCartOpen(true)} className="cart-trigger" aria-label="Open Cart">
              <ShoppingBag size={20} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="mobile-menu-trigger" 
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'drawer-open' : ''}`}>
        <nav className="mobile-nav-links">
          <button onClick={() => scrollToSection('home')} className="mobile-nav-link">Home</button>
          <button onClick={() => scrollToSection('about')} className="mobile-nav-link">Biography</button>
          <button onClick={() => scrollToSection('blog')} className="mobile-nav-link">Columns & Blogs</button>
          <button onClick={() => scrollToSection('books')} className="mobile-nav-link">Books Store</button>
          <button onClick={() => scrollToSection('donate')} className="mobile-nav-link mobile-donate-btn">Donate Now</button>
        </nav>
      </div>

      {/* Custom Styles for Header */}
      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: transparent;
          border-bottom: 1px solid transparent;
          transition: all var(--transition-normal);
          backdrop-filter: blur(0px);
        }
        
        .header-scrolled {
          background: var(--glass-bg);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--glass-border);
          box-shadow: var(--shadow-sm);
          padding: 0.5rem 0;
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 70px;
        }

        .logo-area {
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }

        .logo-title {
          font-family: var(--font-title);
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--text-main);
          letter-spacing: -0.01em;
          line-height: 1.1;
        }

        .logo-subtitle {
          font-size: 0.75rem;
          color: var(--primary-color);
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          background: none;
          border: none;
          color: var(--text-main);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          position: relative;
          padding: 0.25rem 0;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--primary-color);
          transition: width var(--transition-fast);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .donate-nav-btn {
          background-color: var(--primary-color);
          color: #ffffff;
          padding: 0.5rem 1.2rem;
          border-radius: 6px;
          transition: all var(--transition-fast);
        }

        .donate-nav-btn::after {
          display: none;
        }

        .donate-nav-btn:hover {
          background-color: var(--primary-hover);
          transform: translateY(-1px);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .theme-toggle, .cart-trigger, .mobile-menu-trigger {
          background: none;
          border: none;
          color: var(--text-main);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
          border-radius: 50%;
          transition: background-color var(--transition-fast);
        }

        .theme-toggle:hover, .cart-trigger:hover {
          background-color: var(--border-color);
        }

        .cart-trigger {
          position: relative;
        }

        .cart-badge {
          position: absolute;
          top: -2px;
          right: -2px;
          background-color: var(--accent-color);
          color: #ffffff;
          font-size: 0.7rem;
          font-weight: 700;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-menu-trigger {
          display: none;
        }

        /* Mobile Menu Drawer */
        .mobile-nav-drawer {
          position: fixed;
          top: 70px;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--bg-card);
          z-index: 999;
          transform: translateY(-100%);
          opacity: 0;
          visibility: hidden;
          transition: transform var(--transition-normal), opacity var(--transition-normal), visibility var(--transition-normal);
          padding: 2rem;
          border-top: 1px solid var(--border-color);
        }

        .drawer-open {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          align-items: center;
          justify-content: center;
          height: 70%;
        }

        .mobile-nav-link {
          background: none;
          border: none;
          color: var(--text-main);
          font-family: var(--font-title);
          font-size: 1.5rem;
          font-weight: 700;
          cursor: pointer;
        }

        .mobile-donate-btn {
          color: var(--primary-color);
          border: 2px solid var(--primary-color);
          padding: 0.6rem 2rem;
          border-radius: 30px;
          margin-top: 1rem;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          .mobile-menu-trigger {
            display: flex;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
