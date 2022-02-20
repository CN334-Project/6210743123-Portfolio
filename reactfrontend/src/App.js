import "./App.css";
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Data from './pages/Data';
import AddData from './pages/AddData';
import EditData from './pages/EditData';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Data />} />
        <Route path='/admin/add-data' element={<AddData />} />
        <Route path='/admin/edit-data/:id' element={<EditData />} />
      </Routes>
    </Router>
  );
}

export default App;
