import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, Button } from '@mui/material';
import PreviewIcon from '@mui/icons-material/Preview';
import { Link } from 'react-router-dom';
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useBlogCall from "../hooks/useBlogCall"
import { ellipsis2, shadow } from '../style/theme';
import { ellipsis } from '../style/theme';
import { likeButton } from '../style/theme';
import CommentIcon from '@mui/icons-material/Comment';
import styled from 'styled-components';

const BlogCard=() =>{  
  const { getData } = useBlogCall()
  useEffect(() => {
    // console.log("blogcard daki clg");
    getData("blogs");
  }, [])
  const {blogs} = useSelector((state)=>state.blog)
  // console.log(blogs);
  
  const rev = [...blogs].reverse();
  // console.log(reversed);
  const reversed = rev.filter((item)=>item.status=="p")
  //LIKE BUTTONS
  const {userId} = useSelector((state)=>state.auth)
  //console.log(userId);
  
  // const likesData = likes?.map((item)=>item.user_id)
  // console.log("likesdata",likesData);

  const { like } = useBlogCall()
  const handleClick=(id,blog)=> {
    like("likes", id)
    console.log(userId);
    console.log("like",id);
    console.log(blog);
  }
  
  // console.log(reversed);

  const CustomTitle = styled.div`
    height:4rem;
    /* display: '-webkit-box'; */
    overflow: hidden;
    text-overflow:ellipsis;
`;
  

  return (
    <>
     {reversed?.map((blog)=>(
     
     <Card style={shadow} key={blog?._id} sx={{ maxWidth: 330,backgroundColor:"#eceff1",alignContent:"center",transform:"scale(0.8)"}}>
      <CardHeader 
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            
        //   </Avatar>
        // }
        
        title={<CustomTitle>{blog?.title}</CustomTitle>}
        subheader={blog?.publish_date.substring(0,10)+" / "+blog?.publish_date.substring(11,16) }
      />
      <CardMedia
        component="img"
        image={blog?.image}
        alt="Not found"
        sx={{objectFit:"contain",padding:"4px",marginBottom:"1rem",width:"20rem",height:"15rem",margin:"auto"}}
      />
      <CardContent sx={{width:"100%"}}>
        <Typography variant="body2" color="text.secondary" m={1} mb={1} sx={[ellipsis,{minHeight:"4.2rem"}]} >
        {blog?.content}
        </Typography>
      </CardContent>
      <Box sx={{display:"flex",alignItems:"center",marginBottom:"0rem" }} justifyContent="space-between"  m p >
      <CardActions >
        
        {
        blog?.likes_n.includes(userId) ?  
        <IconButton sx={{ color: "#d50000" }} onClick={() => handleClick(blog._id,blog)} 
         aria-label="add to favorites">
          <FavoriteIcon />
          <Typography sx={[likeButton,{color:"black"}]}>{blog?.likes}</Typography>
        </IconButton>
         :  
        <IconButton onClick={() => handleClick(blog._id,blog)} 
        aria-label="add to favorites">
          <FavoriteIcon />
          <Typography sx={[likeButton,{color:"black"}]}>{blog?.likes}</Typography>
        </IconButton>
        }

          
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
  
        <IconButton aria-label="share">
          <CommentIcon />
          <Typography sx={[likeButton,{color:"black"}]}>{blog?.comment_count}</Typography>
        </IconButton>

        <IconButton aria-label="share">
          <PreviewIcon />
          <Typography sx={[likeButton,{color:"black"}]}>{blog?.post_views}</Typography>
        </IconButton>
        

      </CardActions>
      <Link to={`/detail/${blog?._id}`}> <Button variant='contained'>READ MORE</Button></Link>
      {/* <Button variant='contained' onClick={() => navigate(`/detail/${blog.id}`)}>READ MORE</Button> */}
      {/* <Button
        onClick={() => navigate(`/detail/${blog.id}`, { state: blog })}>
        View More
      </Button> */}
      </Box>
    </Card>
    ))}
    </>
  );
}

export default BlogCard