import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">Students System</h1>
          <nav className="app-nav">
            <Link to="/" className="nav-link">
              Students List
            </Link>
            <Link to="/add" className="nav-link">
              Add Student
            </Link>
          </nav>
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<StudentList />} />
            <Route path="/add" element={<StudentForm />} />
            <Route path="/edit/:id" element={<StudentForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
