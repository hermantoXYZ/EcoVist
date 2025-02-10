import React from 'react'
import { Link } from 'react-router-dom';

function CategoryGrid() {
  const categories = [
    {
      title: "Economic Analysis",
      items: [
        { icon: "📈", name: "Trend Analysis" },
        { icon: "🏦", name: "Financial Models" }
      ]
    },
    {
      title: "Data & Statistics",
      items: [
        { icon: "📊", name: "Visualization" },
        { icon: "📑", name: "Reports" }
      ]
    },
    {
      title: "Market Indicators",
      items: [
        { icon: "💰", name: "Price Analysis" },
        { icon: "📊", name: "Market Trends" },
      ]
    },
    {
      title: "Macroeconomic",
      items: [
        { icon: "🌐", name: "Model Phillips Curve" },
        { icon: "📈", name: "IS-LM Model" },
      ]
    },
    {
      title: "Tools & Calculators",
      items: [
        { icon: "🧮", name: "Economic Calculator" },
        { icon: "📐", name: "Measurement Tools" },
      ]
    }
  ]

  return (
    <div className="category-container">
      <h2>Latest Category</h2>
      <div className="category-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-section">
            <h2>{category.title}</h2>
            <div className="category-items">
              {category.items.map((item, idx) => (
                <Link 
                  to={`/${category.title.toLowerCase().replace(/\s+/g, '-')}/${item.name.toLowerCase().replace(/\s+/g, '-')}`} 
                  key={idx}
                >
                  <div className="category-item">
                    <span className="item-icon">{item.icon}</span>
                    <span className="item-name">{item.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryGrid