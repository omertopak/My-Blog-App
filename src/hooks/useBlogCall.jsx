import { fetchFail, fetchStart, getDataSuccess,getMyDataSuccess } from '../features/dataSlice'
import { useDispatch } from 'react-redux'
import useAxios from './useAxios'
import { toastErrorNotify, toastSuccessNotify } from '../helper/ToastNotify'
import { useNavigate } from "react-router-dom"

const useAuthCall = () => {
  const dispatch = useDispatch()
  const { axiosPublic, axiosWithToken } = useAxios()
  const navigate = useNavigate()
 
  const refresh = () => window.location.reload(true)

  const getData = async (url) => {
    dispatch(fetchStart())
    try {
      const { data } = await axiosWithToken(`/api/${url}/`)
      dispatch(getDataSuccess({ data, url }))
      
     
      
      

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
  const updateBlog = async (data,id) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.patch(`/api/blogs/${id}/`,data)
      toastSuccessNotify("Post Updated")
      getData("blogs")
      navigate(-1)
      

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
      dispatch(getMyDataSuccess({ data, url }))
      
      

    } catch (error) {
      dispatch(fetchFail())
      console.log(error)
      toastErrorNotify("Error!")
    }
  }
  const del = async (id) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.delete(`/api/blogs/${id}/`)
      toastSuccessNotify("Deleted")
      refresh()
    } catch (error) {
      dispatch(fetchFail())
      console.log(error)
      toastErrorNotify("Error!")
    }
  }
 
  return { getData,getViews,like ,newBlog,myBlog,updateBlog,del}
}

export default useAuthCall