import React from 'react'
import { useSelector } from 'react-redux'
import { Avatar, Typography, Box, Button } from "@mui/material";
import { Outlet } from 'react-router';
const Profile = () => {
    const {userInfo} = useSelector((state)=>state.auth)
    console.log(userInfo);
  return (
    <Box  elevation={3}  sx={{display:"flex",flexWrap: 'nowrap',justifyContent: 'space-evenly',alignItems: 'stretch', padding: 2, textAlign: "center",marginTop:"8rem"}}>
        <Box>
        <Box>
        <Avatar
        alt={`${userInfo.user.username}'s Profile`}
        src={userInfo.user.image}
        sx={{ width: 100, height: 100, margin: "0 auto" }}
      />
      <Typography fontSize="1rem" sx={{opacity:"0.5",}}>{userInfo.user.username}</Typography></Box>
      
      <Typography variant="h5" sx={{textAlign:"left"}}>
        {userInfo.user.first_name} {userInfo.user.last_name}
      </Typography>
      <Button></Button>
     
      </Box>
      <Box width="50%">
        <Outlet/>
      </Box>
    </Box>
  )
}

export default Profile



// "key": "e5ec421c010adabb3cf5ec134e7f55f7f63c212d",
//     "user": {
//         "id": 2,
//         "username": "Ink_Admin",
//         "email": "omertopak1@gmail.com",
//         "first_name": "Omer",
//         "last_name": "Topak",
//         "image": "https://previews.123rf.com/images/agnessz/agnessz1609/agnessz160900124/66083532-m%C3%A4nnlicher-avatar-mit-brille.jpg",
//         "bio": "I am a frontend developer"
//     }