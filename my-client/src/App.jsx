import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import  { GetId } from './components/GetId'; 
import  { Delete } from './components/Delete'; 
import { Add } from './components/Add';
import { GetAll } from './components/GetAll';
import { Update } from './components/Update';
import './styles/App.css';
function App() {
  return (
   
  <div className='app-container'>
    
    <div className="heading">
      <h2>Employee Record Management System </h2>
      </div>
<div className="navbar">
   <div className='nav-links'>
        <nav >
            <NavLink to="/insert">Insert</NavLink>
            <NavLink to="/find-all">Find All </NavLink>
            <NavLink to="/find-by-id">Find </NavLink>
            <NavLink to="/delete">Delete</NavLink>
            <NavLink to="/update">Update</NavLink>
        </nav>
    </div>
    </div>

    <div>
        <Routes claasName="routes">
            <Route path="/insert" element={<Add/>}/>
            <Route path="/find-all" element={<GetAll/>}/>
            <Route path="/find-by-id" element={<GetId/>} />
            <Route path="/delete" element={<Delete />} />
            <Route path="/update" element={<Update />} />
        </Routes>
        <footer className="app-footer">
    © 2025 Anira Jewels. All rights reserved.
  </footer>
        
    </div>
  </div>



  );
}

export default App;
