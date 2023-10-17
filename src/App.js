import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Header } from './features/header/Header';
import { Postbox } from './features/Postbox/Postbox';
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
