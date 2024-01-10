import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Home from './pages/Home';
import DetailPage from './pages/DetailPage';
import Explorepage from './pages/Explorepage';
import Categorypage from './pages/Categorypage';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound'
import reportWebVitals from './reportWebVitals';
import Nav from './component/Nav';
import Footer from './component/Footer';
// import Sign from './component/Sign';
import Login from './component/Login';
import Signup from './component/Signup';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Nav></Nav>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/post/:slug" element={<DetailPage />} />
      <Route exact path="/category/post/:category" element={<Categorypage />} />
      <Route exact path="/explore-topics" element={<Explorepage />} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/signup" element={<Signup/>} />
      <Route exact path='/about' element={<About />} />
      <Route exact path="*" element={<PageNotFound />} />
    </Routes>
    <Footer></Footer>
  </BrowserRouter>



);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
