import React from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Blog from './components/Blog';
import Books from './components/Books';
import Donate from './components/Donate';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
      <div className="app-layout">
        <Header />
        <main className="main-content-flow">
          <Hero />
          <Bio />
          <Blog />
          <Books />
          <Donate />
        </main>
        <Footer />
      </div>

      <style>{`
        .app-layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background-color: var(--bg-color);
          transition: background-color var(--transition-normal);
        }

        .main-content-flow {
          flex-grow: 1;
        }
      `}</style>
    </CartProvider>
  );
}

export default App;
