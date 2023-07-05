import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/header';
import "./App.css";
import { DetailPage } from './pages/detail';
import MainPage from './pages/main';
import { ApplicationPage } from './pages/application';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header/>}>
          <Route path='detail' element={<DetailPage/>}/>
          <Route path='main' element={<MainPage/>}/>
          <Route path='application' element={<ApplicationPage/>}/>
        </Route>  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
