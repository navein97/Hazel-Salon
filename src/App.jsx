import React from 'react';
import Hero from './components/Hero';
import Notice from './components/Notice';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen bg-hazel-50 selection:bg-hazel-200 selection:text-hazel-900">
      <Hero />
      <Notice />
      <Services />
      <Gallery />
      <Footer />
    </main>
  );
}

export default App;
