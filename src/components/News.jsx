import React from 'react'
import { useSelector } from 'react-redux'
import useNewsCall from '../hooks/useNewsCall'
import { useEffect } from 'react'
import axios from 'axios'
const News = () => {
    const { getNews } = useNewsCall()
    
    useEffect(() => {
     getNews()
    }, [])
    
    // axios.get("https://newsapi.org/v2/top-headlines/sources?language=en&pageSize=1&apiKey=26da8c8a13e84db6ae4ed010949c7bd2")
    // .then((response) => {
    //   // İstek başarılı oldu
    //   console.log('Veri:', response.data);
    // })
    // .catch((error) => {
    //   // İstek başarısız oldu
    //   console.error('Hata:', error);
    // });

    const {news} = useSelector((state)=>state.news)
    console.log(news);
  return (
    <></>
  )
}

export default News