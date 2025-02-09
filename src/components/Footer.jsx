import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><Link to="/docs">Documentation</Link></li>
            <li><Link to="/learn">Learn</Link></li>
            <li><Link to="/examples">Examples</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>More</h3>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/github">GitHub</Link></li>
            <li><Link to="/releases">Releases</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Use</Link></li>
            <li><Link to="/license">License</Link></li>
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