import React from 'react'
import BlogCard from '../components/BlogCard'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useBlogCall from "../hooks/useBlogCall"


const Home = () => {
  const {blogs} = useSelector((state)=>state.blog)
  const { getData } = useBlogCall()


  console.log(blogs);
  useEffect(() => {
    getData("blogs")
    
  }, [])
  console.log(blogs);


  return (
    <div>
      <BlogCard blogs={blogs}/>
    </div>
  )
}

export default Home