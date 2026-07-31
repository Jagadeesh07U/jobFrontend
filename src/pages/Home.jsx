import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const categories = [
    { title: "Development", count: "120+ Jobs", icon: "💻" },
    { title: "UI/UX Design", count: "45+ Jobs", icon: "🎨" },
    { title: "Marketing", count: "30+ Jobs", icon: "📊" },
    { title: "Data Science", count: "60+ Jobs", icon: "⚡" },
  ];

  const stats = [
    { label: "Active Jobs", value: "2,500+" },
    { label: "Top Companies", value: "450+" },
    { label: "Job Seekers", value: "10,000+" },
  ];

  return (
    <div className="home-wrapper">
      <main className="home-container">
        
        {/* HERO SECTION */}
        <section className="hero-banner">
          <div className="hero-content">
            <span className="hero-badge">✨ Next-Gen Career Portal</span>
            <h1>
              Discover Jobs That <span className="gradient-text">Match Your Vibe</span>
            </h1>
            <p>
              Connect directly with verified tech leaders, high-growth startups, and global enterprises.
            </p>
            <div className="hero-actions">
              <Link to="/jobs" className="btn-primary">
                Browse All Jobs ➔
              </Link>
              <Link to="/add-job" className="btn-secondary">
                + Post a Opportunity
              </Link>
            </div>
          </div>

          {/* STATS STRIP */}
          <div className="stats-strip">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* POPULAR CATEGORIES */}
        <section className="portal-section">
          <div className="section-header">
            <h2>Explore Categories</h2>
            <p>Find specialized roles tailored to your stack</p>
          </div>
          <div className="category-chips">
            {categories.map((cat, idx) => (
              <Link to="/jobs" key={idx} className="chip-card">
                <span className="chip-icon">{cat.icon}</span>
                <div className="chip-info">
                  <h4>{cat.title}</h4>
                  <span>{cat.count}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* FEATURES / WHY CHOOSE US */}
        <section className="portal-section">
          <div className="section-header">
            <h2>Why Choose JobPortal?</h2>
            <p>Everything you need to step up your tech career</p>
          </div>
          <div className="feature-grid">
            <div className="feature-box">
              <div className="feature-icon-wrapper">🚀</div>
              <h3>Fast-Track Applications</h3>
              <p>Skip the fluff. Apply directly to decision-makers with minimal steps.</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon-wrapper">⭐</div>
              <h3>Save & Track</h3>
              <p>Bookmark your dream positions to favorite, organize, and apply later.</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon-wrapper">🏢</div>
              <h3>Verified Employers</h3>
              <p>Work with vetted tech hubs including Infosys, TCS, Accenture, & top startups.</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default Home;