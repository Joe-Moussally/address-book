import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './pages/Login';
import Contacts from './pages/Contacts'
import Add from './pages/Add';
import Signup from './pages/Signup';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/signup" element={<Signup />}></Route>
    <Route path="/contacts" element={<Contacts />}></Route>
    <Route path="/add" element={<Add />}></Route>
  </Routes>
</BrowserRouter>
);