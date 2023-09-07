import React from 'react'
import BlogCard from '../components/BlogCard'

import { Box } from '@mui/material'

const Home = () => {
  
  

   //console.log(blogs);
 
  

  return (
    <Box sx={{display:"flex", flexWrap:"wrap",justifyContent:"space-evenly"}} width="100vw" > 
      <BlogCard/>  
    </Box>
  )
}

export default Home