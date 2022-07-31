import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
// import { Box } from '@mui/material';

import Navbar from './components/Navbar';
import { Box } from '@material-ui/core';
import Home from './components/pages/Home';
import ExcerciseDetail from './components/pages/ExerciseDetail';
 


const App = () => {
  return (
    <Box width="400px" sx={{ width: { x1: '1488px '}}} m='auto'>
      <Navbar />
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/excercise/:id" element={<ExcerciseDetail />} />
      </Routes>
    </Box>
  )
}

export default App
