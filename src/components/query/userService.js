import axios from "axios"
import { useQuery } from "react-query"

const fetchUserData = async () => {

    //return axios.get("https://node5.onrender.com/user/user")
    return axios.get("/user/user")
}

const useFetchUserData = () =>{

    return useQuery("user", fetchUserData,{
        refetchOnMount: false,
        enabled: false,
        retry:10,
        retryDelay: 1000,
    })

}
export default useFetchUserData