import { useSelector } from "react-redux"
import axios from "axios"

const useAxios = () => {
    const {token} = useSelector((state)=>state.auth)


    const axiosWithToken = axios.create({
        baseURL: `${import.meta.env.VITE_BASE_URL}`,
        headers: { Authorization: `Token ${token}` },
      })
    
      const axiosPublic = axios.create({
        baseURL: `${import.meta.env.VITE_BASE_URL}`,
      })

      const newsWithToken = axios.create({
        baseURL: `https://newsapi.org/v2/top-headlines?language=en&pageSize=10&apiKey=${import.meta.env.VITE_SOME_KEY}`
      })
      return { axiosWithToken, axiosPublic,newsWithToken}
    }
    
    export default useAxios