import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import './App.css';
import MainComponent from './components/MainComponent';
import OtherPage from './components/OtherPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">Multicontainer Application</h1>
          <nav className="app-nav">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/otherpage" className="nav-link">
              Other Page
            </Link>
          </nav>
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/otherpage" element={<OtherPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
