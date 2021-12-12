import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import PostView from './pages/post/View';
import Header from './components/globals/Header';
import Home from './pages/Home';
import Footer from './components/globals/Footer';
import About from './pages/About';
import { Login } from './pages/auth/Login';
import { Signup } from './pages/auth/Signup';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

function App() {

  const modalShow = useSelector((state: RootState) => state.postModal.show)
  return (
    <BrowserRouter>
       <div className={modalShow ? ' fixed' :''}>
          <div>
            <Header/>
          </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post/:postID" element={<PostView />} />
                <Route path="/about" element={<About />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/signup" element={<Signup />} />
            </Routes>

            <Footer/>

       </div>
    </BrowserRouter>
  );
  
}

export default App;
