import React from 'react'
import axios from "axios"
import { fetchStart } from '../features/authSlice'

const useAuthCall = () => {

  const login = async (data)=>{
    dispatch(fetchStart())
    try {
      
    } catch () {
      
    }
  }






  return (
    <div>useAuthCall</div>
  )
}

export default useAuthCall