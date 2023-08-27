import React from 'react'
import { fetchFail, fetchStart, getAuthSuccess } from '../features/authSlice'
import { useDispatch } from 'react-redux'
import useAxios from './useAxios'
import { toastErrorNotify,toastSuccessNotify } from '../helper/ToastNotify'
import { useNavigate } from "react-router-dom"

const useAuthCall = () => {
   const dispatch = useDispatch()
   const {axiosPublic} = useAxios() 
    const navigate = useNavigate()


    const login = async (userdata)=>{
    dispatch(fetchStart())
    try {
    const {data} = await axiosPublic.post(`/users/auth/login/`,userdata)
    navigate("/ink")
    toastSuccessNotify("Successfully logged in")
    dispatch(getAuthSuccess(data))

    } catch (error) {
      dispatch(fetchFail())
      console.log(error)
      toastErrorNotify("HATA")
    }
  }
  const register = async (userdata)=>{
    dispatch(fetchStart())
    try {
    const {data} = await axiosPublic.post(`/users/register/`,userdata)
    navigate("/ink")
    toastSuccessNotify("Successfully logged in")
    dispatch(getAuthSuccess(data))

    } catch (error) {
      dispatch(fetchFail())
      console.log(error)
      toastErrorNotify("HATA")
    }
  }





  return {login,register}
}

export default useAuthCall