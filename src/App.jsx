import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RendemUser from './pages/RendemUser';
import Posts from './pages/Posts';
import Header from './components/Header'; 

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='posts' element={<Posts />} />
        <Route path='rendom-user' element={<RendemUser />} />
      </Routes>
    </div>
  );
}

export default App;
