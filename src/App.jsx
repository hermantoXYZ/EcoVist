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
import ArticlesList from "./components/ArticlesList";

function App() {
  return (
    <HelmetProvider>
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <main className="main-content">
              <div className="search-section">
                <h1>Economic Analysis & Computation</h1>
                <SearchInterface />
              </div>
              <CategoryGrid />
              <ArticlesList />              
            </main>
          } />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
 
    </Router>
    </HelmetProvider>
  )
}

export default App;