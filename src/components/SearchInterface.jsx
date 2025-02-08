import React, { useState } from 'react'

function SearchInterface() {
  const [query, setQuery] = useState('')

  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter economic data or calculations..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="search-options">
        <button className="option-btn">Natural Language</button>
        <button className="option-btn">Formula Input</button>
        <button className="option-btn">Examples</button>
        <button className="option-btn">Upload Data</button>
      </div>
    </div>
  )
}

export default SearchInterface