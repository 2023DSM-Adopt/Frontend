import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/header';
import "./App.css";
import { DetailPage } from './pages/detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header/>}>
          <Route path='detail' element={<DetailPage/>}/>
        </Route>  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
