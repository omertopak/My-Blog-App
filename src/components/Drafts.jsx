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
import { shadow3 } from '../style/theme';
import { ellipsis1 } from '../style/theme';


const Drafts=() =>{  
  const { myBlog } = useBlogCall()
  const {userId} = useSelector((state)=>state.auth)
  useEffect(() => {
    myBlog(userId,"myblogs");
  }, [])
  const {myblogs} = useSelector((state)=>state.blog)
  const myblogsP = myblogs.filter((item)=>item.status=="d")
//   console.log(myblogs);
//   console.log(myblogsP);
  const reversed = [...myblogsP].reverse();
  return (
    <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",flexDirection: 'reverse-row',height:"30rem",overflow:"scroll"}}>
     {reversed?.map((blog)=>(
     
     <Card style={shadow3} key={blog?.id} sx={{ maxWidth: 258,margin:"9px",backgroundColor:"#eceff1",maxHeight:350}}>
      <CardHeader 
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"></Avatar>
        }
        title={blog?.author}
        subheader={blog?.publish_date.substring(0,10)+" / "+blog?.publish_date.substring(11,16) }
      />
      <CardMedia
        component="img"
        image={blog?.image}
        alt="Not found"
        sx={{objectFit:"contain",padding:"3px",marginBottom:"0.2rem",width:"15rem",height:"10rem",margin:"auto"}}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" overflow="hidden" sx={ellipsis1}>
        {blog?.content}
        </Typography>
      </CardContent>
      <Box sx={{display:"flex",alignItems:"center",marginBottom:"0.3rem" }} justifyContent="space-between"   p >
      <CardActions >
        <IconButton  aria-label="add to favorites">
          <FavoriteIcon sx={{fontSize:'1.3rem'}}  />
        </IconButton >
        <IconButton aria-label="share">
          <ShareIcon sx={{fontSize:'1.3rem'}} />
        </IconButton>
        <IconButton aria-label="share">
          <PreviewIcon sx={{fontSize:'1.3rem'}}/>
        </IconButton>
      </CardActions>
      <Link to={`/detail/${blog?.id}`}> <Button  sx={{fontSize:'0.5rem'}} variant='contained'>READ MORE</Button></Link>
      
      </Box>
    </Card>
    ))}
    </Box>
  );
}

export default Drafts