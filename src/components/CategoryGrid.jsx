import React from 'react'

function CategoryGrid() {
  const categories = [
    {
      title: "Economic Analysis",
      items: [
        { icon: "📊", name: "Market Analysis" },
        { icon: "💹", name: "Growth Metrics" },
        { icon: "📈", name: "Trend Analysis" },
        { icon: "🏦", name: "Financial Models" }
      ]
    },
    {
      title: "Data & Statistics",
      items: [
        { icon: "📉", name: "Statistical Tools" },
        { icon: "🔢", name: "Data Processing" },
        { icon: "📊", name: "Visualization" },
        { icon: "📑", name: "Reports" }
      ]
    },
    {
      title: "Market Indicators",
      items: [
        { icon: "💰", name: "Price Analysis" },
        { icon: "📊", name: "Market Trends" },
        { icon: "📈", name: "Performance" },
        { icon: "🎯", name: "Predictions" }
      ]
    },
    {
      title: "Tools & Calculators",
      items: [
        { icon: "🧮", name: "Economic Calculator" },
        { icon: "📐", name: "Measurement Tools" },
        { icon: "🔄", name: "Converters" },
        { icon: "⚡", name: "Quick Analysis" }
      ]
    }
  ]

  return (
    <div className="category-grid">
      {categories.map((category, index) => (
        <div key={index} className="category-section">
          <h2>{category.title}</h2>
          <div className="category-items">
            {category.items.map((item, idx) => (
              <div key={idx} className="category-item">
                <span className="item-icon">{item.icon}</span>
                <span className="item-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default CategoryGrid