import React from 'react';
import { Globe, Mail, MapPin, Feather, Heart } from 'lucide-react';

const LinkedinIcon = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Footer = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-grid">
          {/* Brand/About Info */}
          <div className="footer-info-col">
            <h3 className="footer-brand-title">Abdul Ghaffar Bugti</h3>
            <p className="footer-brand-desc">
              Balochistan-based rights activist, columnist, theatre artist, and organizer. Striving for resource justice, gender equality, and progressive literature at the grassroots level.
            </p>
            <div className="footer-social-icons">
              <a 
                href="https://www.linkedin.com/in/abdul-ghaffar-89642a2ba/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
              <a 
                href="https://www.thefridaytimes.com/contributor/abdul-ghaffar-bugti" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="Friday Times Essays"
              >
                <Feather size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading-col">Explore</h4>
            <ul className="footer-links-list">
              <li><button onClick={() => handleScroll('home')} className="footer-btn-link">Home</button></li>
              <li><button onClick={() => handleScroll('about')} className="footer-btn-link">Biography & Roles</button></li>
              <li><button onClick={() => handleScroll('blog')} className="footer-btn-link">Columns & Essays</button></li>
              <li><button onClick={() => handleScroll('books')} className="footer-btn-link">Bookstore</button></li>
              <li><button onClick={() => handleScroll('donate')} className="footer-btn-link">Donation Portal</button></li>
            </ul>
          </div>

          {/* Organization focus */}
          <div className="footer-orgs-col">
            <h4 className="footer-heading-col">Affiliations</h4>
            <ul className="footer-links-list">
              <li>
                <span className="org-title-label">Lok Manch Collective</span>
                <span className="org-role-label">Chief Organiser</span>
              </li>
              <li>
                <span className="org-title-label">Progressive Writers Association</span>
                <span className="org-role-label">Joint Secretary (Balochistan)</span>
              </li>
              <li>
                <span className="org-title-label">The High Asia Herald</span>
                <span className="org-role-label">Assistant Editor</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-contact-col">
            <h4 className="footer-heading-col">Contact & Inquiries</h4>
            <div className="contact-details-list">
              <div className="contact-item-row">
                <Mail size={16} />
                <span className="contact-val">contact@abdulghaffarbugti.org</span>
              </div>
              <div className="contact-item-row">
                <MapPin size={16} />
                <span className="contact-val">Sui, Dera Bugti District, Balochistan, Pakistan</span>
              </div>
            </div>
            
            <div className="hosting-badge-footer">
              <Globe size={14} />
              <span>Hosted for free at <strong>abdulghaffarbugti.org</strong></span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Abdul Ghaffar Bugti. All Rights Reserved.
          </p>
          <p className="credit-text">
            Made with <Heart size={12} fill="currentColor" className="heart-icon-footer" /> for Women's Rights and Social Justice.
          </p>
        </div>
      </div>

      <style>{`
        .footer-area {
          background-color: var(--bg-card);
          border-top: 1px solid var(--border-color);
          padding: 5rem 0 2rem 0;
          transition: background-color var(--transition-normal);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 0.8fr 1.2fr 1.5fr;
          gap: 3.5rem;
          margin-bottom: 4rem;
        }

        .footer-brand-title {
          font-size: 1.4rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .footer-brand-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .footer-social-icons {
          display: flex;
          gap: 0.75rem;
        }

        .social-icon-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          transition: all var(--transition-fast);
        }

        .social-icon-link:hover {
          border-color: var(--primary-color);
          color: var(--primary-color);
          background-color: rgba(var(--primary-color-hsl), 0.05);
          transform: translateY(-2px);
        }

        .footer-heading-col {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--text-main);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .footer-btn-link {
          background: none;
          border: none;
          padding: 0;
          font-family: var(--font-sans);
          font-size: 0.9rem;
          color: var(--text-muted);
          cursor: pointer;
          transition: color var(--transition-fast);
          text-align: left;
        }

        .footer-btn-link:hover {
          color: var(--primary-color);
          text-decoration: underline;
        }

        .org-title-label {
          display: block;
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--text-main);
        }

        .org-role-label {
          font-size: 0.75rem;
          color: var(--primary-color);
          font-weight: 600;
        }

        .contact-details-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .contact-item-row {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .contact-item-row svg {
          color: var(--primary-color);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .hosting-badge-footer {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background-color: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .hosting-badge-footer strong {
          color: var(--text-main);
        }

        /* Bottom bar */
        .footer-bottom-bar {
          border-top: 1px solid var(--border-color);
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .copyright-text, .credit-text {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .heart-icon-footer {
          color: var(--primary-color);
          display: inline-block;
          vertical-align: middle;
          margin: 0 0.15rem;
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
        }

        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer-bottom-bar {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
