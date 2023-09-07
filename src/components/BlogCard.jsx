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
import ShareIcon from '@mui/icons-material/Share';
import { Box, Button } from '@mui/material';
import PreviewIcon from '@mui/icons-material/Preview';
import { Link } from 'react-router-dom';
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useBlogCall from "../hooks/useBlogCall"

export default function BlogCard() 
{
  const { getData } = useBlogCall()
  const {blogs} = useSelector((state)=>state.blog)
  
  useEffect(() => {
    console.log("useEffect");
    getData("blogs")
  }, [])
  // console.log(id);
  // console.log(title);
  // console.log("umut");
  return (
    <>
     {blogs?.map((blog)=>(
    <Card key={blog.id} sx={{ maxWidth: 345,margin:"15px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            
          </Avatar>
        }
        title={blog.author}
        subheader={blog.publish_date.substring(0,10)+" / "+blog.publish_date.substring(11,16) }
      />
      <CardMedia
        component="img"
        height="194"
        image={blog.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" overflow="hidden" height="7rem">
        {blog.content}
        </Typography>
      </CardContent>
      <Box sx={{display:"flex" }} justifyContent="space-between" m p>
      <CardActions >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="share">
          <PreviewIcon />
        </IconButton>
      </CardActions>
      <Link to={`/detail/${blog.id}`}> <Button variant='contained'>READ MORE</Button></Link>
     
      </Box>
    </Card>
    ))}
    </>
  );
}
