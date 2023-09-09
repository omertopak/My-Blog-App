import { Box, Typography, Button, Paper } from '@mui/material';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
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

const Detail = () => {
  const params = useParams()
  // console.log("params=",params.id);
  const id = params.id
  const navigate = useNavigate()
  const { getViews } = useBlogCall()
  //const {userId} = useSelector((state)=>state.auth)
  useEffect(() => {
    console.log("detail");
    getViews("blogs", id);
  }, [])

  const { blogs } = useSelector((state) => state.blog)
  console.log(blogs);
  const blogById = blogs.filter((item)=>item.id==id)
  console.log(blogById);
  //console.log("blogdetail", blogs);
  
  // const userData = blogs.likes_n
  // console.log(userData);
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
          textAlign: "center"
        }}>
          <Box>
            <IconButton aria-label="add to favorites" >
              <FavoriteIcon />
              <Typography sx={likeButton}>{blogById[0]?.likes}</Typography>
            </IconButton>
            <IconButton aria-label="share">
              <Typography sx={likeButton}>{blogById[0]?.post_views}</Typography>
              <PreviewIcon />
            </IconButton>
            <IconButton aria-label="share">
              <CommentIcon />
              <Typography sx={likeButton}>{blogById[0]?.comment_count}</Typography>
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
              <Typography sx={{
                position: "absolute",
                top: "-1px",
                right: "-1px",
              }}></Typography>
            </IconButton>
          </Box>
          <Link to={-1}> <Button variant='contained'>Go Back</Button></Link>
          {/* <Button variant='contained' onClick={() => navigate(-1)}>GO BACK</Button> */}
        </CardActions>

      </Box>
    </>
  )
}

export default Detail