import React from 'react'
import { useSelector } from 'react-redux'
import useNewsCall from '../hooks/useNewsCall'
import { useEffect } from 'react'
const News = () => {
    const { getNews } = useNewsCall()
    
    useEffect(() => {
     getNews()
    }, [])
    
    const {news} = useSelector((state)=>state.news)
    console.log(news);
  return (
    <div></div>
  )
}

export default News