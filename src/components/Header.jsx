import React, { useState } from 'react'

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <nav className="header">
      <div className="nav-container">
        <div className="logo">
          <a href="/" style={{ color: '#fff', textDecoration: 'none' }}>
            <h1>.XYZ</h1>
          </a>
        </div>
        <div className="nav-right">
          <button className="search-toggle" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>
          <a href="/docs" className="nav-link">Docs</a>
          <a href="/blog" className="nav-link">Blog</a>
          <a href="/examples" className="nav-link">Examples</a>
          <a href="/learn" className="nav-link">Learn</a>
          <a href="/deploy" className="nav-link" style={{ marginRight: '1rem' }}>Deploy</a>
        </div>
      </div>
      {isSearchOpen && (
        <div className="search-overlay">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search documentation..."
              autoFocus
              className="search-input"
            />
            <button 
              className="close-search"
              onClick={() => setIsSearchOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Header