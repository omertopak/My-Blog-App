import React from 'react'
import BlogCard from '../components/BlogCard'
import { Box } from '@mui/material'
import { useEffect } from 'react'
import useBlogCall from "../hooks/useBlogCall"
// import News from '../components/News'
const Home = () => {
  
  const { getData} = useBlogCall()
  
  useEffect(() => {
    // console.log("homedaki clg");
    getData("blogs")
  }, [])

 
  

  return (
    <Box  sx={{display:"flex", flexWrap:"wrap",justifyContent:"space-evenly",gap:"0"}}>
        <Box sx={{display:"flex", flexWrap:"wrap",justifyContent:"center",flexDirection: 'reverse-row',padding:"6px", }} width="95vw" > 
          <BlogCard /> 
        </Box >
        {/* <News />  */}
    </Box>
  )
}

export default Home