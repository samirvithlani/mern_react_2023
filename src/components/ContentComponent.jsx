import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContent } from '../redux/ContentSlice'

export const ContentComponent = () => {

    const dispatch = useDispatch()
    const content = useSelector((state)=>state.content.content)
    const isLoading = useSelector((state)=>state.content.isLoading)
    const isError = useSelector((state)=>state.content.isError)

    // const state = useSelector((state)=>state.content)
    // console.log("state...",state.content)
    // console.log("isLoading...",state.isLoading)
    // console.log("isError...",state.isError)
        console.log("content...",content)
        console.log("isLoading...",isLoading)
        console.log("isError...",isError)
    
    useEffect(() => {
      
        dispatch(fetchContent())
        
      
    }, [])
    
  return (
    <div>
        <h1>CONTENT COMPONENT</h1>
    </div>
  )
}
