import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><a href="/docs">Documentation</a></li>
            <li><a href="/learn">Learn</a></li>
            <li><a href="/examples">Examples</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>More</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/github">GitHub</a></li>
            <li><a href="/releases">Releases</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Use</a></li>
            <li><a href="/license">License</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 EcoVist. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer