import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Invoices from './pages/Invoices';
import PrivateRoute from './components/PrivateRoute'; 
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/invoices" element={<Invoices />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;