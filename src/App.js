// src/App.js
import React from 'react'
import Header from './components/layout/Header'
import Navigation from './components/layout/Navigation'
import Home from './pages/Home'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Navigation />
      <Home />
      <Footer />
    </div>
  )
}

export default App;
