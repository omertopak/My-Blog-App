import React from 'react'
import { useSelector } from 'react-redux'

const News = () => {
    const {news} = useSelector((state)=>state.news)
    console.log(news);
  return (
    <div>News</div>
  )
}

export default News