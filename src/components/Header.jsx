import { AppBar, Avatar, Toolbar, Typography, styled } from '@mui/material'
import React from 'react'
import DrawIcon from '@mui/icons-material/Draw';
import { Box } from '@mui/material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import { theme } from "../style/theme"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import useAuthCall from '../hooks/useAuthCall';
import { useNavigate } from 'react-router';
import { Outlet } from 'react-router-dom'
import { Button } from '@mui/material';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { useSelector } from 'react-redux'
import { shadow, shadow2 } from '../style/theme';
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

})



const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}))

const UserBox = styled(Box)({
  display: "flex",
  justifyContent: "center",

  [theme.breakpoints.up("sm")]: {
    display: "none",

  }
})

const Header = () => {
  const [open, setOpen] = useState(false)
  const { logout } = useAuthCall()
  const navigate = useNavigate()

  const { image } = useSelector((state) => state.auth)

  return (

    <AppBar position='sticky' sx={{ minHeight: "100vh", minWidth: "100vw" }} >
      <StyledToolbar sx={{backgroundColor:"#b0bec5"}}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button onClick={() => navigate("/ink")} sx={[{ color: "black" }, shadow2]}>
            <DrawIcon fontSize='large' />
            <Typography variant='h5' >INK</Typography></Button>
        </Box>
        <Icons>
          {/* <Button onClick={() => navigate("/ink")} sx={[{ color: "black" }, shadow2]}><NewspaperIcon />
            <Typography variant='h6'>Home</Typography></Button> */}
          <Button onClick={() => navigate("/newblog")} sx={[{ color: "black" }, shadow2]}><StickyNote2Icon />
            <Typography variant='h6'>New Blog</Typography></Button>
          <Button sx={[{ color: "black" }, shadow2]}
            onClick={() => navigate("/about")}><PermIdentityIcon />
            <Typography variant='h6'>About</Typography></Button>

          <Avatar sx={shadow2} src={image} onClick={e => setOpen(true)} />
        </Icons>
        <UserBox>
          <Avatar alt='no img' src={image} onClick={e => setOpen(true)} sx={[{ width: "45px", height: "45px" }, shadow]} />
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
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
        <MenuItem >My Blogs</MenuItem>
        <MenuItem onClick={() => logout()}>Logout</MenuItem>
      </Menu>

      <Outlet />
    </AppBar>

  )
}

export default Header