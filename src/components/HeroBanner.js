import React from 'react'
import { Box, Typography ,Button} from '@mui/material';

// import { Link } from 'react-router-dom';
import HeroBannerImage from '../assets/images/banner.png';
const HeroBanner = () => {
  return (
    <Box sx={{ 
        mt:{lg:'212px', xs: '70px'},
        ml: {sm:'50px'}
      }}>
    
      <Typography color="#FF2625"
      fontWeight="600" fontSize="26px">
        Fitness Club
  
      </Typography>
      <Typography fontWeight={700}
      sx={{ fontSize: {lg:'44px' , xs:'40px'}
    }}
    mn="23px" mt="30px"
      >
  
        Sweat , Smile <br /> and Repeat
      </Typography >
  
      <Typography fontSize="22px" lineHeight={2} mb={4}>
  
     Check out the most effective excercise
  </Typography>
  
   <Button  variant="contained" color="error" href="#excercise">
    Explore Excercise
   </Button>


   <Typography 
   fontWeight={600}
   color="ff2625"
   
   sx={{ 
   opacity:0.1,
   display:{lg:'block',xs:'none'},
   fontSize:"200px"
}} 
   
   >
Exercise
</Typography >

  <img src={HeroBannerImage} alt="banner" className="hero-banner-img" mt="-50px" />

      </Box>
  )
}

export default HeroBanner