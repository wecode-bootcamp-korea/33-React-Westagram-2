import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginHyeongKyeom from './pages/hyeongkyeom/Login/Login';
import LoginSeulGi from './pages/seulgi/Login/Login.js';
import LoginWanYoung from './pages/wanyoung/Login/Login.js';
import LoginYounSeop from './pages/younseop/Login/Login.js';
import LoginHyeonJeong from './pages/hyeonjeong/Login/Login.js';
import MainHyeongKyeom from './pages/hyeongkyeom/Main/Main.js';
import MainSeulGi from './pages/seulgi/Main/Main.js';
import MainWanYoung from './pages/wanyoung/Main/Main.js';
import MainYounSeop from './pages/younseop/Main/Main.js';
import MainHyeonJeong from './pages/hyeonjeong/Main/Main.js';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginHyeongKyeom />} />
        <Route path="/login-hyeongkyeom" element={<LoginHyeongKyeom />} />
        <Route path="/login-seulgi" element={<LoginSeulGi />} />
        <Route path="/login-wanyoung" element={<LoginWanYoung />} />
        <Route path="/login-younseop" element={<LoginYounSeop />} />
        <Route path="/login-hyeonjeong" element={<LoginHyeonJeong />} />

        <Route path="/main-hyeongkyeom" element={<MainHyeongKyeom />} />
        <Route path="/main-seulgi" element={<MainSeulGi />} />
        <Route path="/main-wanyoung" element={<MainWanYoung />} />
        <Route path="/main-younseop" element={<MainYounSeop />} />
        <Route path="/main-hyeonjeong" element={<MainHyeonJeong />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
