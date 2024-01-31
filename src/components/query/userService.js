import axios from "axios"
import { useMutation, useQuery } from "react-query"
import { useNavigate } from "react-router-dom"

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

const addUserData = async (data) => {

    return axios.post("/user/user", data)
}

const useAddUserData = () =>{

    var naviage = useNavigate()
    return useMutation(addUserData,{
        onSuccess: (data) => {
            console.log("onsuccess data.",data)
            naviage("/")
        }
    })


}
export { useFetchUserData, useAddUserData }