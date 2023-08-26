import React from 'react'
import { fetchFail, fetchStart, getAuthSuccess } from '../features/authSlice'
import { useDispatch } from 'react-redux'
import useAxios from './useAxios'
import { toastErrorNotify,toastSuccessNotify } from '../helper/ToastNotify'


const useAuthCall = () => {
   const dispatch = useDispatch()
   const {axiosPublic} = useAxios() 



    const login = async (userdata)=>{
    dispatch(fetchStart())
    try {
    const data = await axiosPublic.post(`/users/auth/login/`)
    toastSuccessNotify(`Successfully logged in`)
    getAuthSuccess(data)

    } catch (error) {
      dispatch(fetchFail())
      console.log(error)
    }
  }






  return {login,}
}

export default useAuthCall