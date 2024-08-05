import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './page/home';
import './App.css';
import Header from './components/Header';

const ColorMatchMaster = lazy(() => import('colorMatchMaster/colormatchmaster'));

function App({ UserButton, useUser }) {
  const { isSignedIn, user, isLoaded } = useUser();
 
  return (
    <Router>
      <div className="app-layout">
        <Header isSignedIn={isSignedIn} UserButton={UserButton} />
        <main className="main-content">
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home isSignedIn={isSignedIn} user={user} />} />
              <Route path="/colormatchmaster" element={<ColorMatchMaster isSignedIn={isSignedIn} />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
