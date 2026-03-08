import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Lessons from './components/Lessons';
import Minigame from './components/Minigame';
import AIAppendix from './components/AIAppendix';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Lessons />
      <Minigame />
      <AIAppendix />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
