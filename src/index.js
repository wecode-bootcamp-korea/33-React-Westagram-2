import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import './styles/common.scss';
import './styles/reset.scss';

// render
// update, re-render
// 1. state change
// 2. props change
// 3. Parent re-render

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
