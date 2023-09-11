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
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useBlogCall from "../hooks/useBlogCall"
import { shadow } from '../style/theme';
import { ellipsis } from '../style/theme';


const Published=() =>{  
  const { myBlog } = useBlogCall()
  const {userId} = useSelector((state)=>state.auth)
  useEffect(() => {
    myBlog(userId,"myblogs");
  }, [])
  const {myblogs} = useSelector((state)=>state.blog)

  console.log(myblogs);
  
  return (
    <>
     {myblogs?.map((blog)=>(
     
     <Card style={shadow} key={blog?.id} sx={{ maxWidth: 345,margin:"15px",backgroundColor:"#eceff1",alignContent:"center" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            
          </Avatar>
        }
        title={blog?.author}
        subheader={blog?.publish_date.substring(0,10)+" / "+blog?.publish_date.substring(11,16) }
      />
      <CardMedia
        component="img"
        image={blog?.image}
        alt="Not found"
        sx={{objectFit:"contain",padding:"4px",marginBottom:"1rem",width:"20rem",height:"15rem"}}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" overflow="hidden" mb={3} sx={ellipsis}>
        {blog?.content}
        </Typography>
      </CardContent>
      <Box sx={{display:"flex",alignItems:"center",marginBottom:"0.5rem" }} justifyContent="space-between"  m p >
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
      <Link to={`/detail/${blog?.id}`}> <Button variant='contained'>READ MORE</Button></Link>
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

export default Published