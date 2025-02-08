import { useState } from "react";
import Header from './components/Header'
import SearchInterface from './components/SearchInterface'
import CategoryGrid from './components/CategoryGrid'
import './App.css'
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <div className="search-section">
          <h1>Economic Analysis & Computation</h1>
          <SearchInterface />
        </div>
        <CategoryGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App;