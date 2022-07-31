import React , { useState } from 'react';
import { Box } from '@mui/material';

// import { Link } from 'react-router-dom';

import HeroBanner from '../HeroBanner';
// import SearchExcercises from '../SearchExercises';
import Excercises from '../Exercises';



const Home = () => {
  return (
    <Box>

  <HeroBanner />
{/* <SearchExcercises /> */}
<Excercises />
    </Box>


  )
}

export default Home