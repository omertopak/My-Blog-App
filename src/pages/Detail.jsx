import { Box, Typography, Button, Paper } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom'
import useBlogCall from "../hooks/useBlogCall"
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import PreviewIcon from '@mui/icons-material/Preview';
import { Link } from 'react-router-dom';
import CommentIcon from '@mui/icons-material/Comment';
import { likeButton } from '../style/theme';




const Detail = () => {
  const params = useParams()
  // console.log("params=",params.id);
  const id = params.id
  
  const { getDataById } = useBlogCall()
  const {userId} = useSelector((state)=>state.auth)
  useEffect(() => {
    console.log("detail");
    getDataById("blogs", id)
  }, [])

  const { blogs } = useSelector((state) => state.blog)
  //console.log("blogdetail", blogs);
  
  const userData = blogs.likes_n
  console.log(userData);
  // userData?.map((item)=>item.includes(userId))

  return (
    <>
      <Box m={8} sx={{
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: "center",
        alignItems: "center"

      }}>

        <img component="img"
          alt='Image'
          src={blogs.image}
          sx={{ width: { xs: "10px", sm: "32px", md: "50px", lg: "100px", xl: "200px" } }}
        />
        {/* <Image alt='Image'
        src={blogs.image}
        /> */}
        <Typography sx={{ textAlign: 'right', fontWeight: "bold", fontStyle: 'italic' }}>
          Category Name:{blogs.category_name}
        </Typography>
        <Typography variant='h5' sx={{ fontSize: 16, fontFamily: 'Monospace', textTransform: 'uppercase', fontWeight: 'bold', fontSize: 'h4.fontSize' }}>
          {blogs.title}
        </Typography>
        <Typography sx={{ typography: 'body1', fontFamily: 'Monospace' }}>
          {blogs.content}
        </Typography>
      </Box>

      <Box m={8} mt={0}>
        <CardActions sx={{
          display: "flex",
          justifyContent: 'space-between',
          textAlign: "center"
        }}>
          <Box>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon sx={{ position: "relative" }} />
              <Typography sx={{
                position: "absolute",
                top: "0px",
                right: "0px",
                backgroundColor:"#f44336",
                width:"1.1rem",
                Height:"1.1rem",
                border:"none",
                borderRadius:"50%",
                fontSize:"12px"
              }}>{blogs.likes}</Typography>
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
              <Typography sx={{
                position: "absolute",
                top: "-1px",
                right: "-1px",
              }}></Typography>
            </IconButton>
            <IconButton aria-label="share">
              <Typography sx={likeButton}>{blogs.post_views}</Typography>
              <PreviewIcon />
            </IconButton>
            <IconButton aria-label="share">
              <CommentIcon />
              <Typography sx={likeButton}>{blogs.comments_count}</Typography>
            </IconButton>
          </Box>
          <Link to={-1}> <Button variant='contained'>Go Back</Button></Link>
        </CardActions>

      </Box>
    </>
  )
}

export default Detail