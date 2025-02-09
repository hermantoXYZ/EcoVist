import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import { HelmetProvider } from 'react-helmet-async';
import SearchInterface from './components/SearchInterface'
import CategoryGrid from './components/CategoryGrid'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import './App.css'
import Footer from "./components/Footer";

function App() {
  return (
    <HelmetProvider>
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={
            <main className="main-content">
              <div className="search-section">
                <h1>Economic Analysis & Computation</h1>
                <SearchInterface />
              </div>
              <CategoryGrid />
            </main>
          } />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </HelmetProvider>
  )
}

export default App;