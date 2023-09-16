import React from 'react'
import BlogCard from '../components/BlogCard'
import { Box } from '@mui/material'
import { useEffect } from 'react'
import useBlogCall from "../hooks/useBlogCall"
import News from '../components/News'
const Home = () => {
  
  const { getData} = useBlogCall()
  
  useEffect(() => {
    console.log("homedaki clg");
    getData("blogs")
  }, [])

   //console.log(blogs);
 
  

  return (
    <Box sx={{display:"flex", flexWrap:"wrap",justifyContent:"space-evenly",flexDirection: 'reverse-row',padding:"6px"}} width="100vw" > 
      <BlogCard /> 
      <News/> 
    </Box>
  )
}

export default Home