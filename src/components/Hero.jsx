import React from 'react';
import { BookOpen, Heart, ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Decorative Balochistan pattern overlay */}
      <div className="hero-pattern-overlay"></div>
      
      <div className="container hero-container animate-fade-in">
        <div className="hero-content">
          <div className="badge-wrapper">
            <span className="hero-badge">Joint Secretary, Progressive Writers Association</span>
          </div>
          
          <h1 className="hero-heading">
            Voice of the Soil: <br />
            <span className="highlight">Activism, Literature & Social Justice</span> in Balochistan
          </h1>
          
          <p className="hero-description">
            Abdul Ghaffar Bugti is a Balochistan-based columnist, human rights activist, theatre actor, and organiser of the <strong>Lok Manch Collective</strong>. He writes on gender rights, climate neglect, education accessibility, and resource exploitation.
          </p>

          <div className="hero-ctas">
            <button onClick={() => handleScroll('donate')} className="btn btn-primary">
              Support Women's Rights & Activism <Heart size={18} fill="currentColor" />
            </button>
            <button onClick={() => handleScroll('blog')} className="btn btn-secondary">
              Read My Columns <BookOpen size={18} />
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">30+</span>
              <span className="stat-label">Published Essays & Columns</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Activism & Climate Campaigns</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Theatre Plays Directed/Acted</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 95vh;
          display: flex;
          align-items: center;
          padding: 8rem 0 4rem 0;
          background: radial-gradient(circle at 80% 20%, rgba(var(--primary-color-hsl), 0.05) 0%, transparent 60%),
                      radial-gradient(circle at 10% 80%, rgba(var(--accent-color-hsl), 0.05) 0%, transparent 50%),
                      var(--bg-color);
          overflow: hidden;
          transition: background-color var(--transition-normal);
        }

        /* Abstract geometric lines simulating mountains/landscape */
        .hero-pattern-overlay {
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 100%;
          opacity: 0.08;
          background-image: radial-gradient(var(--primary-color) 1px, transparent 1px),
                            radial-gradient(var(--accent-color) 1px, transparent 1px);
          background-size: 24px 24px;
          background-position: 0 0, 12px 12px;
          mask-image: linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
          pointer-events: none;
        }

        [data-theme='dark'] .hero-pattern-overlay {
          opacity: 0.15;
        }

        .hero-container {
          position: relative;
          z-index: 10;
        }

        .hero-content {
          max-width: 850px;
        }

        .badge-wrapper {
          margin-bottom: 1.5rem;
        }

        .hero-badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          background-color: rgba(var(--primary-color-hsl), 0.1);
          color: var(--primary-color);
          font-size: 0.85rem;
          font-weight: 700;
          border-radius: 30px;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          border: 1px solid rgba(var(--primary-color-hsl), 0.15);
        }

        .hero-heading {
          font-size: 3.8rem;
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 1.5rem;
          color: var(--text-main);
          letter-spacing: -0.03em;
        }

        .hero-heading .highlight {
          color: transparent;
          background-image: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
          -webkit-background-clip: text;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.25rem;
          line-height: 1.6;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
          max-width: 720px;
        }

        .hero-description strong {
          color: var(--text-main);
        }

        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 4rem;
        }

        .hero-stats {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          flex-wrap: wrap;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-family: var(--font-title);
          font-size: 2.25rem;
          font-weight: 800;
          color: var(--primary-color);
          line-height: 1;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
          max-width: 150px;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background-color: var(--border-color);
        }

        @media (max-width: 992px) {
          .hero-heading {
            font-size: 3rem;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 7rem 0 3rem 0;
            min-height: auto;
          }
          .hero-heading {
            font-size: 2.25rem;
          }
          .hero-description {
            font-size: 1.05rem;
          }
          .hero-stats {
            gap: 1.5rem;
          }
          .stat-divider {
            display: none;
          }
          .hero-ctas .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
