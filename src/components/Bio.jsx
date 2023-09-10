import React from 'react'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'
const Bio = () => {
    const { userInfo } = useSelector((state) => state.auth)

    return (
        <>
            <Typography textAlign="left" mb={5}>BIOGRAPHY</Typography>
            <Typography textAlign="left" variant="body1">{userInfo.user.bio}</Typography>
        </>
    )
}

export default Bio