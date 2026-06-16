import React, { useState } from 'react';
import { PenTool, Compass, Users, Award, ShieldAlert, BookOpen } from 'lucide-react';

const Bio = () => {
  const [activeTab, setActiveTab] = useState('activist');

  const tabData = {
    activist: {
      title: 'Rights Activist & Organiser',
      subtitle: 'Lok Manch Collective & Social Campaigns',
      icon: <Users size={24} />,
      content: 'Abdul Ghaffar Bugti is the chief organiser of the Lok Manch Collective in Balochistan. The collective functions as a grass-roots social movement designed to raise political and social consciousness among rural and local youth. The movement actively mobilizes resources and organises forums to discuss issues related to gender rights, climate crises, educational neglect, and local land rights. As a human rights campaigner, Ghaffar works directly with marginalized local communities to document and challenge cases of honour killings, child marriages, and domestic violence.',
      achievements: [
        'Organised community seminars on women education across rural Balochistan.',
        'Spearheaded awareness campaigns on the clean water crisis in Sui and Pirkoh gas extraction fields.',
        'Established regional youth circles for climate advocacy and gender equality.'
      ]
    },
    columnist: {
      title: 'Columnist & Writer',
      subtitle: 'Joint Secretary, Progressive Writers Association',
      icon: <PenTool size={24} />,
      content: 'As a columnist, Ghaffar writes extensively for several national and international journals, including The Friday Times, NayaDaur, The Express Tribune, and Baam-e-Jahan. His essays explore the intersections of tribal custom (Dastar) and constitutional law (Dastur), criticizing how traditional feudal systems limit the agency of youth and women. His status as Joint Secretary of the Progressive Writers Association reflects his commitment to the historical tradition of resistance literature, using writing as an intellectual tool to challenge religious extremism and economic resource exploitation.',
      achievements: [
        'Published 30+ columns detailing resource exploitation and tribal inequalities.',
        'Wrote critical reviews on literature willed as a tool of social critique and justice.',
        'Invited speaker at national literary festivals on the future of progressive writing in Pakistan.'
      ]
    },
    actor: {
      title: 'Theatre Actor & Playwright',
      subtitle: 'Conscientization through Cultural resistance',
      icon: <Compass size={24} />,
      content: 'Believing that art is a powerful medium for social change, Ghaffar has been deeply involved in street and forum theatre. He uses theatre as a tool for "conscientization" (based on Paulo Freire\'s theory of raising critical awareness) to engage illiterate and rural populations in dialogue. Through Lok Manch, he organizes community theatrical plays that portray conflicts related to gender violence, patriarchal systems, feudal oppression, and environmental degradation, giving local youth a stage to express their narratives.',
      achievements: [
        'Directed and acted in street plays highlighting women\'s right to inheritance and education.',
        'Leveraged street theatre in remote regions of Dera Bugti to discuss domestic health and hygiene.',
        'Conducted theatrical workshops training rural boys and girls in public speaking and artistic expression.'
      ]
    }
  };

  return (
    <section id="about" className="section bio-section">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-title">Biography & Impact</h2>
          <p className="section-subtitle">
            A life dedicated to amplifying the struggles, stories, and cultural heritage of Balochistan through writing, community organizing, and theatrical expression.
          </p>
        </div>

        <div className="bio-grid">
          <div className="bio-nav-panel">
            <h3 className="panel-heading">Core Roles</h3>
            <div className="tab-buttons">
              {Object.keys(tabData).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`tab-btn ${activeTab === key ? 'tab-btn-active' : ''}`}
                >
                  <span className="tab-icon">{tabData[key].icon}</span>
                  <div className="tab-text-wrap">
                    <span className="tab-btn-title">{tabData[key].title}</span>
                    <span className="tab-btn-subtitle">{tabData[key].subtitle}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="quote-card">
              <span className="quote-icon">“</span>
              <p className="quote-text">
                Literature and art are not passive ornaments; they are active weapons of social change, hammers with which we must reshape our society's conscience.
              </p>
              <span className="quote-author">— Abdul Ghaffar Bugti</span>
            </div>
          </div>

          <div className="bio-content-panel">
            <div className="card bio-card animate-fade-in" key={activeTab}>
              <div className="bio-card-header">
                <span className="bio-main-icon">{tabData[activeTab].icon}</span>
                <div>
                  <h3 className="bio-main-title">{tabData[activeTab].title}</h3>
                  <p className="bio-main-subtitle">{tabData[activeTab].subtitle}</p>
                </div>
              </div>
              
              <div className="bio-card-body">
                <p className="bio-description-text">{tabData[activeTab].content}</p>
                
                <div className="achievements-section">
                  <h4 className="achievements-heading">
                    <Award size={18} /> Key Contributions
                  </h4>
                  <ul className="achievements-list">
                    {tabData[activeTab].achievements.map((item, index) => (
                      <li key={index} className="achievement-item">
                        <span className="bullet"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .bio-section {
          background-color: var(--bg-card);
          transition: background-color var(--transition-normal);
        }

        .bio-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 3.5rem;
          align-items: start;
        }

        .panel-heading {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--text-main);
          letter-spacing: -0.01em;
        }

        .tab-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.25rem;
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          cursor: pointer;
          text-align: left;
          transition: all var(--transition-normal);
        }

        .tab-btn:hover {
          border-color: var(--primary-color);
          transform: translateX(4px);
        }

        .tab-btn-active {
          background-color: var(--primary-color);
          border-color: var(--primary-color);
          color: #ffffff;
          box-shadow: 0 8px 20px rgba(var(--primary-color-hsl), 0.2);
        }

        .tab-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          border-radius: 10px;
          background-color: rgba(var(--primary-color-hsl), 0.1);
          color: var(--primary-color);
          transition: all var(--transition-normal);
        }

        .tab-btn-active .tab-icon {
          background-color: rgba(255, 255, 255, 0.2);
          color: #ffffff;
        }

        .tab-text-wrap {
          display: flex;
          flex-direction: column;
        }

        .tab-btn-title {
          font-family: var(--font-title);
          font-weight: 700;
          font-size: 1.1rem;
        }

        .tab-btn-subtitle {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .tab-btn-active .tab-btn-subtitle {
          color: rgba(255, 255, 255, 0.8);
        }

        .quote-card {
          position: relative;
          padding: 2rem;
          background-color: var(--bg-color);
          border-left: 4px solid var(--accent-color);
          border-radius: 0 12px 12px 0;
          margin-top: 2rem;
        }

        .quote-icon {
          position: absolute;
          top: 0px;
          left: 15px;
          font-size: 4rem;
          font-family: var(--font-serif);
          line-height: 1;
          color: var(--accent-color);
          opacity: 0.15;
        }

        .quote-text {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 1.05rem;
          color: var(--text-main);
          margin-bottom: 0.75rem;
          line-height: 1.5;
        }

        .quote-author {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Content Panel */
        .bio-card {
          padding: 2.5rem;
          height: 100%;
        }

        .bio-card-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1.5rem;
        }

        .bio-main-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 12px;
          background-color: rgba(var(--primary-color-hsl), 0.1);
          color: var(--primary-color);
        }

        .bio-main-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .bio-main-subtitle {
          font-size: 0.95rem;
          color: var(--primary-color);
          font-weight: 600;
        }

        .bio-description-text {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-muted);
          margin-bottom: 2rem;
        }

        .achievements-section {
          background-color: var(--bg-color);
          border-radius: 12px;
          padding: 1.5rem;
          border: 1px solid var(--border-color);
        }

        .achievements-heading {
          font-size: 1.1rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
          color: var(--text-main);
        }

        .achievements-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .achievement-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        .achievement-item .bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--accent-color);
          margin-top: 8px;
          flex-shrink: 0;
        }

        @media (max-width: 992px) {
          .bio-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Bio;
