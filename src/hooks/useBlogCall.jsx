import { fetchFail, fetchStart, getDataSuccess } from '../features/dataSlice'
import { useDispatch } from 'react-redux'
import useAxios from './useAxios'
import { toastErrorNotify, toastSuccessNotify } from '../helper/ToastNotify'
import { useNavigate } from "react-router-dom"

const useAuthCall = () => {
  const dispatch = useDispatch()
  const { axiosPublic, axiosWithToken } = useAxios()
  const navigate = useNavigate()


  const getData = async (url) => {
    dispatch(fetchStart())
    try {
      const { data } = await axiosWithToken(`/api/${url}/`)
      dispatch(getDataSuccess({ data, url }))
      toastSuccessNotify("get data calisti")
      //console.log("get data calisti");
      // console.log(data);
      

    } catch (error) {
      dispatch(fetchFail())
      console.log(error)
      toastErrorNotify("HATA")
    }
  }
  const getViews = async (url, id) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken(`/api/${url}/${id}/`)
      // toastSuccessNotify("get data by id calisti")
      console.log("get data by id calisti");
      getData("blogs")
      

    } catch (error) {
      dispatch(fetchFail())
      console.log(error)
      toastErrorNotify("HATA")
    }
  }

  //   const logout = async () => {
  //     dispatch(fetchStart())
  //     try {
  //       await axiosPublic.post(`/users/auth/logout/`)
  //       dispatch(logoutSuccess())
  //       toastSuccessNotify("logout islemi basarili")
  //       navigate("/")
  //     } catch (error) {
  //       console.log(error)
  //       dispatch(fetchFail())
  //       toastErrorNotify("Logout islemi basarisiz")
  //     }
  //   }



  return { getData,getViews }
}

export default useAuthCall