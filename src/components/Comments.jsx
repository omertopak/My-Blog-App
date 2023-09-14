import React, { useState } from 'react';
import { Box,Typography } from '@mui/material';
import { borderb } from '../style/theme';
const Comments = ({comments}) => {
    
    
  return (
    <Box key={1} sx={{display:"flex",flexDirection: 'column-reverse',}}>
      {comments.map((comment)=>
        <Box sx={[{width:"30rem",opacity:"1",margin:"1rem"},borderb]}>
        <Typography sx={{textAlign:"right",color:"gray"}}>{comment.user}  {comment?.time_stamp.substring(0,10)+" / "+comment?.time_stamp.substring(11,16)}</Typography>
        <Typography></Typography>
        <Typography>{comment.content}</Typography>
        </Box>)}
      
    </Box>
  );
};

export default Comments;
