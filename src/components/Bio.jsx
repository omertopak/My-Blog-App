import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Typography } from '@mui/material'

const Bio = () => {
    const { userInfo } = useSelector((state) => state.auth)

    return (
        <Box sx={{color:"#37474f",}}>
            <Typography sx={{fontFamily: 'Monospace'}} textAlign="left" mb={5}>BIOGRAPHY</Typography>
            <Typography sx={{fontFamily: 'Monospace'}} textAlign="left" variant="body1">{userInfo.user.bio}</Typography>
        </Box>
    )
}

export default Bio