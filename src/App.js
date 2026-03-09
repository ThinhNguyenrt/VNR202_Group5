import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LessonsPage from './pages/LessonsPage';
import MinigamePage from './pages/MinigamePage';
import AIAppendixPage from './pages/AIAppendixPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bai-hoc" element={<LessonsPage />} />
          <Route path="/minigame" element={<MinigamePage />} />
          <Route path="/phu-luc-ai" element={<AIAppendixPage />} />
          <Route path="/lien-he" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
