import React from 'react'
import { useSelector } from 'react-redux'
import useNewsCall from '../hooks/useNewsCall'
import { useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { borderb2, ellipsis1,ellipsis } from '../style/theme';
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
const News = () => {
    const { getNews } = useNewsCall()
    const navigate = useNavigate()
    useEffect(() => {
        getNews()
    }, [])

    const { news } = useSelector((state) => state.news)

    return (
        <Box  sx={{display:"flex",flexDirection: 'column',width:"20rem"}}>
            {news.map((item,index) =>
            <Link key={index} to={item.url} sx={{width:"100%"}}>
                <Box  sx={[{display:"flex",flexDirection: 'row',flexWrap: 'nowrap',justifyContent: 'flex-start',alignItems: 'flex-start',gap:"0.3rem"},borderb2]}>
                    <Box >
                        <img src={item.urlToImage} alt="Not Found" width="150rem" height="90rem"/>
                    </Box>
                    <Box sx={{color:"#37474f" }}>
                        <Typography sx={[ellipsis1,{fontSize:"0.9rem",fontWeight:"900"}]}>{item.title}</Typography>
                        <Typography sx={[ellipsis,{fontSize:"0.8rem"}]}>{item.description}</Typography>
                        <Typography sx={{textAlign:"right",fontSize:"0.5rem"}}>{item.publishedAt.substring(0,10)+" / "+item.publishedAt.substring(11,16)}</Typography>
                    </Box>
                </Box>
                </Link>
            )}
        </Box>

    )
}

export default News