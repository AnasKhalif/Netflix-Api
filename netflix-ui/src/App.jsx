import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Netflix from './pages/Netflix';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route exact path="/Netflix" element={<Netflix />} />
      </Routes>
    </BrowserRouter>
  );
}
