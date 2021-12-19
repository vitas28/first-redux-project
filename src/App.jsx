import React from 'react';
import './styles/main.scss';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ContentPage from './pages/ContentPage';
import FormPage from './pages/FormPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={'/content'} element={<ContentPage />} />
      <Route path={'/add'} element={<FormPage />} />
      <Route path={'*'} element={<Navigate to={'/content'} />} />
    </Routes>
  </BrowserRouter>
);

export default App;
