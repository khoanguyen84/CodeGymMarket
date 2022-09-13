import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import Header from './component/Header/Header';
import Market from './component/Market/Market';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Routes>
        <Route path={"/market"} element={<Market/>} />
      </Routes>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
