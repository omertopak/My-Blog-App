import React from 'react'
import BlogCard from '../components/BlogCard'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useBlogCall from "../hooks/useBlogCall"
import { Box } from '@mui/material'

const Home = () => {
  const {blogs} = useSelector((state)=>state.blog)
  const { getData } = useBlogCall()

  useEffect(() => {
    getData("blogs")
    
  }, [])
  // console.log(blogs);
  

  return (
    <Box sx={{display:"flex", flexWrap:"wrap",justifyContent:"space-evenly"}} width="100vw" >
      {blogs.map((blog)=>(
        
      <BlogCard
      id={blog.id}
      title={blog.title}
      date={blog.publish_date}
      author = {blog.author}
      image={blog.image}
      content={blog.content}
      
       />
      ))}
      
    </Box>
  )
}

export default Home