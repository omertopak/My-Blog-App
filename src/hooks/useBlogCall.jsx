import { fetchFail, fetchStart, getDataSuccess,getMyDataSuccess } from '../features/dataSlice'
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
      //toastSuccessNotify("get data calisti")
      //console.log("get data calisti");
      console.log(url,data);
      

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
      getData("blogs")
      
      

    } catch (error) {
      dispatch(fetchFail())
      console.log(error)
      toastErrorNotify("HATA")
    }
  }
  const like = async (url, id) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.post(`/api/${url}/${id}/`)
      // toastSuccessNotify("get data by id calisti")
      getData("blogs")
      
      

    } catch (error) {
      dispatch(fetchFail())
      console.log(error)
      toastErrorNotify("Error!")
    }
  }

  const newBlog = async (data) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.post(`/api/blogs/`,data)
      toastSuccessNotify("New Post Created")
      getData("blogs")
      navigate("/ink")
      

    } catch (error) {
      dispatch(fetchFail())
      console.log(error)
      toastErrorNotify("Error!")
    }
  }
  const myBlog = async (id,url) => {
    dispatch(fetchStart())
    try {
      const data = await axiosWithToken.get(`/api/blogs/?author=${id}`)
      // console.log(data);
      dispatch(getMyDataSuccess({ data, url }))
      
      

    } catch (error) {
      dispatch(fetchFail())
      console.log(error)
      toastErrorNotify("Error!")
    }
  }
 
  return { getData,getViews,like ,newBlog,myBlog}
}

export default useAuthCall