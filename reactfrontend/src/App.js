import "./App.css";
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Data from './pages/Data';
import AddData from './pages/AddData';
import EditData from './pages/EditData';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Data />} />
        <Route path='/add-data' element={<AddData />} />
        <Route path='/edit-data/:id' element={<EditData />} />
      </Routes>
    </Router>
  );
}

export default App;
