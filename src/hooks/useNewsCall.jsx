import { useDispatch } from 'react-redux'
import useAxios from './useAxios'
import { toastErrorNotify, toastSuccessNotify } from '../helper/ToastNotify'

import { getDataSuccess, fetchStart, fetchFail } from '../features/newsSlice'

const useNewsCall = () => {
  const dispatch = useDispatch()
  const { newsWithToken } = useAxios()



  const getNews = async () => {
    dispatch(fetchStart())
    try {
      const { data } = await newsWithToken()
      // console.log("getNews calisti");
      toastSuccessNotify("Successfully logged in")
      // console.log(data);
      dispatch(getDataSuccess(data))

    } catch (error) {
      dispatch(fetchFail())
      // console.log(error)
      toastErrorNotify("HATA")
    }
  }




  return { getNews }
}

export default useNewsCall