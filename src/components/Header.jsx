import { AppBar, Avatar, Toolbar, Typography, styled } from '@mui/material'
import React from 'react'
import DrawIcon from '@mui/icons-material/Draw';
import { Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import {theme} from "../style/theme"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import useAuthCall from '../hooks/useAuthCall';
import { useNavigate } from 'react-router';

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center",
  
})



const Icons = styled(Box)(({theme})=>({
  display:"none",
  justifyContent:"space-between",
  alignItems:"center",
  gap:"20px",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}))

const UserBox = styled(Box)({
  display:"flex",
  justifyContent:"center",
  
  [theme.breakpoints.up("sm")]:{
    display:"none",
    
  }
})

const Header = () => {
  const [open, setOpen] = useState(false)
  const {logout} = useAuthCall()
  const navigate = useNavigate()
  return (
    <AppBar position='fixed'>
      <StyledToolbar>
        <Box sx={{display:"flex",alignItems:"center" }}>
        <DrawIcon fontSize='large'/> 
        <Typography variant='h5' >INK</Typography>
        </Box>
        <Icons>
            <DashboardIcon/>
            <Typography variant='h6' >Dashboard</Typography>
            <StickyNote2Icon/>
            <Typography variant='h6'>New Blog</Typography>
            <PermIdentityIcon/>
            <Typography variant='h6'>About</Typography>
            <Avatar onClick={e=>setOpen(true)}/>
        </Icons>
        <UserBox>
          <Avatar onClick={e=>setOpen(true)} sx={{width:"30px",height:"30px"}}/>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem onClick={()=>logout()}>Logout</MenuItem>
      </Menu>
      </AppBar>
  )
}

export default Header