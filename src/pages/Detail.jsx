import { Box, Typography, Button, Paper } from '@mui/material';
import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import useBlogCall from "../hooks/useBlogCall"
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import PreviewIcon from '@mui/icons-material/Preview';
import CommentIcon from '@mui/icons-material/Comment';
import { likeButton } from '../style/theme';
import { Link } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import CopyToClipboard from "react-copy-to-clipboard"
import { toastSuccessNotify } from '../helper/ToastNotify';
const Detail = () => {
  const params = useParams()
  // console.log("params=",params.id);
  const id = params.id
  const navigate = useNavigate()
  const { getViews } = useBlogCall()
  const { like } = useBlogCall()
  useEffect(() => {
    // console.log("detail");
    getViews("blogs", id);
  }, [])
  
  const { blogs } = useSelector((state) => state.blog)
  // console.log(blogs);
  const blogById = blogs.filter((item)=>item.id==id)
  // console.log(blogById);
  const {userId} = useSelector((state)=>state.auth)
  const likes = blogById[0]?.likes_n
  const likesArray = likes?.map((item)=>item.user_id)
  // console.log(likesArray);
  const heart = likesArray?.includes(userId)
  // console.log(heart);

  const handleClick = ()=>{
    like("likes",id)
  }

  const location = window.location.href 
  // console.log(location);
  return (
    <>
      <Box m={8} sx={{
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: "center",
        alignItems: "center"

      }}>
        <CardMedia
        component="img"
        image={blogById[0]?.image}
        alt="Image"
        sx={{height:"20rem",objectFit:"contain"}}
      />
        {/* <Image alt='Image'
        src={blogById[0].image}
        /> */}
        <Typography sx={{ textAlign: 'right', fontWeight: "bold", fontStyle: 'italic' }}>
          Category Name:{blogById[0]?.category_name}
        </Typography>
        <Typography variant='h5' sx={{ fontSize: 16, fontFamily: 'Monospace', textTransform: 'uppercase', fontWeight: 'bold', fontSize: 'h4.fontSize' }}>
          {blogById[0]?.title}
        </Typography>
        <Typography sx={{ typography: 'body1', fontFamily: 'Monospace' }}>
          {blogById[0]?.content}
        </Typography>
      </Box>

      <Box m={8} mt={0}>
        <CardActions sx={{
          display: "flex",
          justifyContent: 'space-between',
          textAlign: "center",
        }}>
          <Box >
            {heart?
            <IconButton onClick={()=>handleClick()} aria-label="add to favorites" >
              <FavoriteIcon sx={{color:"#d50000"}} />
              <Typography  sx={likeButton}>{blogById[0]?.likes}</Typography>
            </IconButton>:
            <IconButton onClick={()=>handleClick()}  aria-label="add to favorites" >
            <FavoriteIcon />
            <Typography sx={likeButton}>{blogById[0]?.likes}</Typography>
          </IconButton>}
            <IconButton aria-label="share">
              <Typography sx={likeButton}>{blogById[0]?.post_views}</Typography>
              <PreviewIcon />
            </IconButton>
            <IconButton aria-label="share">
              <CommentIcon />
              <Typography sx={likeButton}>{blogById[0]?.comment_count}</Typography>
            </IconButton>
            <CopyToClipboard text={location} >
              <IconButton aria-label="share" onClick={()=>toastSuccessNotify("Address copied")}>
              <ShareIcon />
              <Typography sx={{
                position: "absolute",
                top: "-1px",
                right: "-1px",
              }}></Typography>
            </IconButton>
            </CopyToClipboard>
            
          </Box>
          <Link to={-1}> <Button variant='contained'>Go Back</Button></Link>
          {/* <Button variant='contained' onClick={() => navigate(-1)}>GO BACK</Button> */}
        </CardActions>

      </Box>
    </>
  )
}

export default Detail