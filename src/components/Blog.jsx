import React, { useState } from 'react';
import { Search, Calendar, Tag, ArrowRight, X, Clock, Share2 } from 'lucide-react';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeArticle, setActiveArticle] = useState(null);

  const categories = ['All', 'Gender Rights', 'Resource Justice', 'Extremism', 'Culture & Art'];

  const articles = [
    {
      id: 1,
      title: 'Dastar Vs Dastur – Why Balochistan\'s Youth Are Moving Beyond Hereditary Leadership Systems',
      description: 'An exploration of traditional codes (Dastar) vs. constitutional rights (Dastur), and the transition of the Baloch youth towards democratic activism.',
      category: 'Extremism',
      date: 'May 15, 2026',
      readTime: '6 min read',
      excerpt: 'For decades, the "Dastar" (the tribal turban representing hereditary chiefdom) held unquestioned authority in Dera Bugti and across Balochistan. However, a silent revolution is brewing. The modern Baloch youth, connected digitally and educated under harsh circumstances, are increasingly demanding "Dastur" — the constitution, democratic accountability, and human rights. Hereditary leadership must reconcile with this constitutional awakening or risk fading into absolute irrelevance.',
      content: `
        <p>For decades, the "Dastar" (the traditional Baloch turban representing hereditary chiefdom and tribal leadership) held unquestioned authority in Dera Bugti and across the wider Balochistan province. The word of the Sardar (tribal chief) was the supreme law of the land, resolving disputes, determining resources, and defining political alliances.</p>
        
        <blockquote>
          "The modern Baloch youth, connected digitally and educated under harsh circumstances, are increasingly demanding 'Dastur' — the constitution, democratic accountability, and human rights."
        </blockquote>

        <p>However, a silent revolution is brewing. The modern Baloch youth are moving beyond this feudal paradigm. In our forums organized under the Lok Manch Collective, we see a growing insistence on "Dastur" — the constitution. Young students and activists are questioning why hereditary leadership should dictate their educational opportunities, economic prospects, and basic rights.</p>
        
        <h3>The Collapse of Tribal Protection</h3>
        <p>The traditional tribal system claimed to offer protection and representation in exchange for loyalty. Yet, as resource exploitation continues to drain Balochistan’s gas and mineral wealth, the local population remains in abject poverty. The youth have realized that hereditary elites have often acted as intermediaries, benefiting themselves while leaving Dera Bugti, Sui, and Pirkoh without basic hospitals, gas, or clean drinking water. The demand is no longer for a benevolent master, but for institutional justice, legal rights, and self-determination.</p>
        
        <h3>Gender and the Dastar</h3>
        <p>Furthermore, the traditional tribal code is structurally hostile to women’s agency. Deciding issues of marriage, inheritance, and dispute resolution through tribal jirgas consistently sidelines women. By demanding "Dastur", young female activists in Balochistan are seeking refuge in constitutional laws that guarantee gender equality and protect them from customary violence, honour killings, and forced marriages.</p>
        
        <p>The road ahead is long. Feudal structures are deeply entrenched, and state institutions often prefer dealing with Sardars rather than empowering grassroots democratic movements. But the shift in consciousness is irreversible. The turban of hereditary authority is losing its grip, replaced by the demand for a constitutional rights-based society.</p>
      `
    },
    {
      id: 2,
      title: 'Museum Of Lost Voices: Women Confronting Patriarchal Violence',
      description: 'Documenting local campaigns, the struggle for educational access, and confronting domestic abuse and customary violence in rural Balochistan.',
      category: 'Gender Rights',
      date: 'March 6, 2025',
      readTime: '8 min read',
      excerpt: 'In Balochistan, women\'s voices are often treated as private property, hidden behind high walls. The "Museum of Lost Voices" is a conceptual tribute to those women who have stood up against patriarchal violence. In Dera Bugti, Sui, and Koh-e-Suleiman, women face a double margin: the state\'s structural neglect and the local society\'s strict customs. The Progressive Writers Association and Lok Manch Collective are working to provide platforms where these voices are finally heard, written down, and turned into tools for legal change.',
      content: `
        <p>In Balochistan, women's voices are often treated as private property, hidden behind high walls. The "Museum of Lost Voices" is a conceptual tribute to those women who have stood up against patriarchal violence. In Dera Bugti, Sui, and Koh-e-Suleiman, women face a double margin: the state's structural neglect and the local society's strict customs.</p>

        <blockquote>
          "In a society where speaking out is equated with dishonour, the act of writing becomes a revolutionary declaration of existence."
        </blockquote>

        <p>For generations, domestic abuse, child marriage, and the denial of inheritance have been normalized under the guise of tribal customs. When a girl demands education, she is not just asking to read books; she is challenging a system that relies on her ignorance to survive. Through the Progressive Writers Association, we have documented stories of local women who have secretly learned to write, composing poetry and letters that detail their struggles.</p>

        <h3>Empowerment through Literary Forums</h3>
        <p>We believe that raising consciousness is the first step toward liberation. The Lok Manch Collective has initiated small, safe literary circles where women discuss their legal rights under Pakistani law. These forums are not merely academic; they serve as critical spaces where women share strategies on resisting domestic violence, seeking healthcare, and protecting their daughters from early marriages.</p>

        <h3>International Support Needed</h3>
        <p>Local activists work under immense danger. Defying patriarchal norms in tribal areas often leads to social boycotts or direct threats. To expand our safe houses, legal aid centers, and mobile schools for girls, we require international solidarity. International NGOs working on women’s rights must recognize that change in Balochistan cannot be imported; it must be supported at the grassroots, by funding the local organizers who understand the tribal terrain and are already doing the work.</p>
      `
    },
    {
      id: 3,
      title: 'From Uch To Sui: The Bugti Tribe\'s Struggle for Resource Justice',
      description: 'An analysis of natural gas extraction in Dera Bugti, showing how local communities remain without energy, gas, or clean water while fueling the nation.',
      category: 'Resource Justice',
      date: 'May 18, 2025',
      readTime: '7 min read',
      excerpt: 'Sui and Uch gas fields have fueled Pakistan\'s industrial growth for over seven decades. Yet, walk through the streets of Dera Bugti, and you will find people cooking with wood, living in dark mud houses, and dying of waterborne cholera. This article details the structural inequalities of resource distribution and the urgent need for a localized development model that prioritizes the health and rights of the local Bugti population.',
      content: `
        <p>Sui and Uch gas fields have fueled Pakistan's industrial growth, commercial kitchens, and domestic heating for over seven decades. Yet, walk through the streets of Dera Bugti, and you will find people cooking with firewood, living in dark mud houses without electricity, and dying of waterborne cholera. This is the stark reality of resource injustice.</p>

        <blockquote>
          "While the gas pipelines from Sui heat the drawing rooms of Islamabad and power the factories of Karachi, the families living atop these reserves freeze in the winter."
        </blockquote>

        <p>The extraction of natural gas in the Bugti territory has historically bypassed the locals. Employment at the extraction plants is dominated by non-locals for technical roles, and even the manual labor positions are distributed through tribal patronage systems. The environmental impact is catastrophic—local air quality has degraded, and gas drilling has depleted the groundwater reserves, leading to severe drinking water scarcity.</p>

        <h3>Pirkoh: The Cholera Outbreak Warning</h3>
        <p>In recent years, Pirkoh faced a massive water crisis leading to a cholera outbreak that claimed dozens of lives. The Pirkoh field extracts millions of cubic feet of gas daily, yet its residents were forced to drink contaminated water from dried-up ponds. This outbreak was not a natural disaster; it was a policy failure. It highlighted the complete absence of basic water-treatment plants and medical infrastructure in one of the most resource-rich areas of the country.</p>

        <h3>A New Framework for Justice</h3>
        <p>Resource justice requires a fundamental shift in policy. We need:
        <ul>
          <li>Royalty distribution that directly funds local public infrastructure (schools, water plants, hospitals).</li>
          <li>Mandatory technical training for local youth to ensure employment in gas enterprises.</li>
          <li>Strict environmental regulations and local community oversight over drilling activities.</li>
        </ul>
        Until the local population is treated as shareholders rather than obstacles, the conflict in Balochistan will remain unresolved.</p>
      `
    },
    {
      id: 4,
      title: 'When Murder Becomes Honour: The Karo-Kari Custom',
      description: 'A critical essay on the practice of honour killings, examining how tribal councils utilize customs to justify property seizures and control women.',
      category: 'Gender Rights',
      date: 'May 19, 2026',
      readTime: '5 min read',
      excerpt: 'Honor killing, or "Karo-Kari", is not an ancient, immutable religious practice. It is a social crime wrapped in custom, often used by tribal elites to settle financial disputes or seize property. This column calls for absolute legal enforcement and grass-roots theatre to break the cultural silence surrounding this horror.',
      content: `
        <p>Honor killing, locally known as "Karo-Kari", is not an ancient, immutable religious practice. It is a social crime wrapped in custom, often used by tribal elites to settle financial disputes, cover up local crimes, or seize land and property. It represents the ultimate manifestation of patriarchal control over women's lives and bodies.</p>

        <blockquote>
          "By branding a woman as 'Kari' (blackened woman) and a man as 'Karo' (blackened man), the tribal custom authorizes their immediate execution without trial."
        </blockquote>

        <p>Through our work in the PWA, we have analyzed how tribal councils (Jirgas) use Karo-Kari. In many instances, when a tribal landowner wants to settle a debt or acquire a neighbor's property, a woman is accused of "dishonour", and a male rival is targeted. The woman is murdered, and the male target is forced to pay a heavy fine (Sangchatti) or surrender his land to the tribal elders to "settle" the honour dispute. Custom is thus weaponized for economic gain.</p>

        <h3>Theatre as a Shield</h3>
        <p>To fight this, we take our street plays directly to the villages. In these plays, we depict the economic motivations behind these killings, stripping away the romanticized notions of "honour" that tribal societies attach to these murders. Seeing their own realities enacted on stage forces the villagers to discuss the systemic corruption of the Jirga system.</p>

        <p>We demand the strict implementation of anti-honour killing laws in Pakistan. State courts must reject Jirga settlements and prosecute all accomplices, including the tribal elders who sanction these murders. Honour cannot be bought with the blood of women.</p>
      `
    },
    {
      id: 5,
      title: 'How Bugti Folk Music Is Reclaiming Cultural Space Globally',
      description: 'A study on the rich musical traditions of the Bugti tribe, the preservation of the Nar Sur (flute), and how music acts as a vessel for historical narratives.',
      category: 'Culture & Art',
      date: 'April 15, 2026',
      readTime: '6 min read',
      excerpt: 'The Nar Sur (a unique throat-flute) and the classical Balochi Dastan are not just musical expressions; they are historical records of migrations, wars, and social values. In an era of cultural homogenization, preserving these musical systems is a form of cultural resistance.',
      content: `
        <p>The traditional music of the Bugti tribe is a complex tapestry of historical storytelling and unique vocal instrumentation. Chief among these is the "Nar Sur", a traditional flute played in synchrony with low-pitched throat singing. The Nar Sur is not just an instrument; it is a repository of our collective history, conveying tales of ancient migrations, epic battles, tribal code disputes, and romance.</p>

        <blockquote>
          "In a land where written archives were often destroyed or neglected, our singers and instrumentalists became the custodians of our history."
        </blockquote>

        <p>In our work with the Lok Manch Collective, we have focused on documenting these master musicians, many of whom are aging and live in remote rural valleys without financial support. If they pass away without passing on their skills, a centuries-old musical language will go extinct.</p>

        <h3>Cultural Resistance</h3>
        <p>Preserving our folk music is also a form of cultural resistance. In a national climate that often overlooks or homogenizes regional identities, showcasing the Nar Sur on global platforms asserts the distinctiveness and depth of Baloch culture. Through street plays and local festivals, we integrate these musical performances, introducing the youth to their ancestors' voices and building a sense of pride in their heritage.</p>
      `
    }
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="blog" className="section blog-section">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-title">Columns & Essays</h2>
          <p className="section-subtitle">
            Read critical perspectives on gender equality, resource distribution, extremism, and cultural heritage, originally published in national and international media.
          </p>
        </div>

        {/* Filters and Search controls */}
        <div className="blog-controls">
          <div className="categories-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`category-tab ${selectedCategory === cat ? 'active-tab' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="search-box-wrap">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input-field"
            />
          </div>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid-2 articles-grid">
            {filteredArticles.map((article) => (
              <article key={article.id} className="card article-card animate-fade-in">
                <div className="article-meta">
                  <span className="article-category-tag">
                    <Tag size={12} /> {article.category}
                  </span>
                  <span className="article-date">
                    <Calendar size={12} /> {article.date}
                  </span>
                </div>
                
                <h3 className="article-title">{article.title}</h3>
                <p className="article-excerpt">{article.description}</p>
                
                <div className="article-card-footer">
                  <span className="read-time">
                    <Clock size={12} /> {article.readTime}
                  </span>
                  <button onClick={() => setActiveArticle(article)} className="btn-text read-more-btn">
                    Read Column <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No columns found matching your filters. Try clearing your search.</p>
          </div>
        )}
      </div>

      {/* Full Article Reading View Modal */}
      {activeArticle && (
        <div className="modal-overlay animate-fade-in" onClick={() => setActiveArticle(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveArticle(null)} aria-label="Close Modal">
              <X size={24} />
            </button>
            
            <div className="modal-header-meta">
              <span className="modal-tag">{activeArticle.category}</span>
              <span className="modal-date"><Calendar size={14} /> {activeArticle.date}</span>
              <span className="modal-readtime"><Clock size={14} /> {activeArticle.readTime}</span>
            </div>

            <h2 className="modal-article-title">{activeArticle.title}</h2>
            
            <div className="author-bar">
              <div className="author-info-wrap">
                <span className="author-avatar">AB</span>
                <div>
                  <span className="author-name">Abdul Ghaffar Bugti</span>
                  <span className="author-title">PWA Joint Secretary & Columnist</span>
                </div>
              </div>
              
              <button 
                onClick={() => alert(`Copied link to: abdulghaffarbugti.org/columns/${activeArticle.id}`)}
                className="share-btn-modal" 
                title="Share article"
              >
                <Share2 size={16} /> Share
              </button>
            </div>

            <div 
              className="article-full-body"
              dangerouslySetInnerHTML={{ __html: activeArticle.content }}
            />
          </div>
        </div>
      )}

      <style>{`
        .blog-section {
          background-color: var(--bg-color);
          transition: background-color var(--transition-normal);
        }

        .blog-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .categories-tabs {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .category-tab {
          background-color: var(--bg-card);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          padding: 0.5rem 1.2rem;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .category-tab:hover {
          color: var(--primary-color);
          border-color: var(--primary-color);
        }

        .active-tab {
          background-color: var(--primary-color);
          color: #ffffff;
          border-color: var(--primary-color);
        }

        .active-tab:hover {
          color: #ffffff;
        }

        .search-box-wrap {
          position: relative;
          min-width: 280px;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
          pointer-events: none;
        }

        .search-input-field {
          width: 100%;
          padding: 0.65rem 1rem 0.65rem 2.75rem;
          border-radius: 25px;
          border: 1px solid var(--border-color);
          background-color: var(--bg-card);
          color: var(--text-main);
          font-family: var(--font-sans);
          font-size: 0.9rem;
          outline: none;
          transition: border-color var(--transition-fast);
        }

        .search-input-field:focus {
          border-color: var(--primary-color);
        }

        .article-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .article-meta {
          display: flex;
          gap: 1.25rem;
          margin-bottom: 1rem;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .article-category-tag {
          font-weight: 700;
          color: var(--primary-color);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
        }

        .article-date {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
        }

        .article-title {
          font-size: 1.35rem;
          line-height: 1.3;
          margin-bottom: 0.75rem;
          color: var(--text-main);
        }

        .article-excerpt {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .article-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid var(--border-color);
          padding-top: 1rem;
          margin-top: auto;
        }

        .read-time {
          font-size: 0.8rem;
          color: var(--text-muted);
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
        }

        .read-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.9rem;
        }

        .no-results {
          text-align: center;
          padding: 4rem 0;
          color: var(--text-muted);
        }

        /* Modal Reading Layout */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(4px);
          z-index: 2000;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
        }

        .modal-content {
          background-color: var(--bg-card);
          width: 100%;
          max-width: 800px;
          max-height: 85vh;
          overflow-y: auto;
          border-radius: 16px;
          border: 1px solid var(--border-color);
          padding: 3rem;
          position: relative;
          box-shadow: var(--shadow-lg);
          animation: slideUp var(--transition-normal) forwards;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .modal-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 50%;
          transition: background-color var(--transition-fast);
        }

        .modal-close:hover {
          background-color: var(--border-color);
          color: var(--text-main);
        }

        .modal-header-meta {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          margin-bottom: 1.5rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .modal-tag {
          background-color: rgba(var(--primary-color-hsl), 0.1);
          color: var(--primary-color);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-weight: 700;
          font-size: 0.8rem;
          text-transform: uppercase;
        }

        .modal-date, .modal-readtime {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }

        .modal-article-title {
          font-size: 2.2rem;
          line-height: 1.2;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 2rem;
          letter-spacing: -0.02em;
        }

        .author-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 2.5rem;
        }

        .author-info-wrap {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .author-avatar {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: var(--primary-color);
          color: #ffffff;
          font-weight: 700;
          font-size: 0.9rem;
          border-radius: 50%;
        }

        .author-name {
          display: block;
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-main);
          line-height: 1.2;
        }

        .author-title {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .share-btn-modal {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: 1px solid var(--border-color);
          padding: 0.4rem 1rem;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          color: var(--text-main);
          transition: background-color var(--transition-fast);
        }

        .share-btn-modal:hover {
          background-color: var(--border-color);
        }

        /* Reading styles */
        .article-full-body {
          font-size: 1.15rem;
          line-height: 1.75;
          color: var(--text-main);
        }

        .article-full-body p {
          color: var(--text-main);
          margin-bottom: 1.5rem;
          opacity: 0.95;
        }

        .article-full-body h3 {
          font-size: 1.5rem;
          margin: 2rem 0 1rem 0;
          color: var(--text-main);
        }

        .article-full-body blockquote {
          border-left: 4px solid var(--primary-color);
          padding-left: 1.5rem;
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 1.25rem;
          line-height: 1.6;
          margin: 2rem 0;
          color: var(--text-muted);
        }

        .article-full-body ul {
          margin-bottom: 1.5rem;
          padding-left: 2rem;
        }

        .article-full-body li {
          margin-bottom: 0.5rem;
        }

        @media (max-width: 768px) {
          .modal-overlay {
            padding: 1rem;
          }
          .modal-content {
            padding: 1.75rem;
            max-height: 90vh;
          }
          .modal-article-title {
            font-size: 1.6rem;
          }
          .author-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          .share-btn-modal {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Blog;
