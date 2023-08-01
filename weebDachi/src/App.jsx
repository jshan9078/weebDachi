import { useState, useEffect } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage'
import './App.css';



function App(){
  

  return (

    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<SearchPage/>}/>
          <Route path="/search" element={<SearchPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
