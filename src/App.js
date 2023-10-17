import React from 'react';
import { Header } from './features/header/Header';
import { TrendingBar } from './features/trendingbar/TrendingBar';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <TrendingBar />
      <Outlet />
    </div>
  );
}

export default App;
