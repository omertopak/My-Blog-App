import React from 'react';
import { Box,Typography } from '@mui/material';
import { borderb } from '../style/theme';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import useBlogCall from "../hooks/useBlogCall"
import  { useState } from 'react';
import { useSelector } from 'react-redux'
const Comments = ({comments,id}) => {
  const { pullComment } = useBlogCall()
    const handleClick = (commentId)=>{
      const data = {comments:commentId}
      pullComment(data,id)
      // console.log(data,id);
  }

  const [open, setOpen] = useState(false);
  const { userId } = useSelector((state) => state.auth)
  return (
    // <Box key={1} sx={{display:"flex",flexDirection: 'column-reverse',width:"100%"}}>
    <>
      {comments.map((comment)=>
        <Box  key={comment._id} sx={[{width:"100%",opacity:"1",margin:"auto"},borderb]}>
        <Typography sx={{textAlign:"right",color:"gray"}}>{comment.username}  {comment?.time_stamp.substring(0,10)+" / "+comment?.time_stamp.substring(11,16)}</Typography>
        
        <Typography sx={{overflow:"auto",wordWrap: 'break-word', width: 'auto',whiteSpace:"normal",height:"5rem",}}>{comment.content}</Typography>
        {userId==comment?.user ? <Typography sx={{textAlign:"right",color:"gray"}}>
        <IconButton aria-label="add to favorites" onClick={()=>handleClick(comment?._id)}>
          <DeleteIcon  sx={{fontSize:'1.3rem'}}   />
        </IconButton ></Typography> : ""}
        
        </Box>)}
      </>
    // </Box>
  );
};

export default Comments;
