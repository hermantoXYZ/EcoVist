import React from 'react';

const ArticlesList = () => {
  // Sample articles data (you can replace this with real data later)
  const articles = [
    {
      id: 1,
      title: "Economic Impact of Green Technologies",
      excerpt: "An analysis of how green technologies are shaping the modern economy...",
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "Sustainable Finance Trends",
      excerpt: "Exploring the latest trends in sustainable finance and investment...",
      date: "2024-01-14"
    },
    {
      id: 3,
      title: "Digital Economy Analysis",
      excerpt: "Understanding the transformation of traditional markets in the digital age...",
      date: "2024-01-13"
    },
    {
      id: 4,
      title: "Innovation and Entrepreneurship",
      excerpt: "Insights into the impact of innovation and entrepreneurship on economic growth...",
      date: "2024-01-12"
    }
  ];

  return (
    <div className="articles-section">
      <h2>Latest Articles</h2>
      <div className="articles-grid">
        {articles.map(article => (
          <article key={article.id} className="article-card">
            <h3>{article.title}</h3>
            <p>{article.excerpt}</p>
            <span className="article-date">{article.date}</span>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ArticlesList;