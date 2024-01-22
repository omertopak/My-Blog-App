import React from 'react'
import { useSelector } from 'react-redux'
import { Avatar, Typography, Box, Button } from "@mui/material";
import { Outlet } from 'react-router';
import { useNavigate } from 'react-router-dom';


const MyBlogs = () => {
    const { userInfo } = useSelector((state) => state.auth)
    
    const navigate = useNavigate()




    return (
        <Box elevation={3} sx={{ display: "flex", flexWrap: 'nowrap', justifyContent: 'space-evenly', alignItems: 'stretch', padding: 2, textAlign: "center", marginTop: "8rem" }}>
            <Box>
                <Box>
                    <Avatar
                        alt={`${userInfo.user.username}'s Profile`}
                        src={userInfo.user.image}
                        sx={{ width: 100, height: 100, margin: "0 auto" }}
                    />
                    <Typography sx={{ fontFamily: 'Monospace', opacity: "0.5" }} fontSize="1rem">{userInfo.user.username}</Typography>
                    <Typography sx={{ fontFamily: 'Monospace' }} variant="h5" >
                        {userInfo.user.first_name} {userInfo.user.last_name}
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: 'column', gap: "1rem", marginTop: "3rem" }}>
                    <Button sx={{ fontFamily: 'Monospace' }} variant="contained" onClick={() => { navigate("") }}>Published Blogs</Button>
                    <Button sx={{ fontFamily: 'Monospace' }} variant="contained" onClick={() => navigate("drafts")}> Draft Blogs</Button>
                </Box>
            </Box>

            <Box width="65%">
                <Outlet />
            </Box>
        </Box>
    )
}

export default MyBlogs

