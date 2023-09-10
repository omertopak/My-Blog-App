import React from 'react'
import { fetchFail, fetchStart, getAuthSuccess,logoutSuccess } from '../features/authSlice'
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

  const logout = async () => {
    dispatch(fetchStart())
    try {
      await axiosPublic.post(`/users/auth/logout/`)
      dispatch(logoutSuccess())
      toastSuccessNotify("logout islemi basarili")
      navigate("/")
    } catch (error) {
      console.log(error)
      dispatch(fetchFail())
      toastErrorNotify("Logout islemi basarisiz")
    }
  }

  const changePass = async (userdata)=>{
    dispatch(fetchStart())
    try {
    const {data} = await axiosPublic.post(`/users/auth/password/change/`,userdata)
    toastSuccessNotify("Password Changed Successfully")

    } catch (error) {
      toastErrorNotify("Unsuccesfull")
    }
  }

  return {login,register,logout,changePass}
}

export default useAuthCall