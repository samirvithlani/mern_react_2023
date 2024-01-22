import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { deposit, withdraw } from '../redux/BankSlice'

export const WithdrawComponent = () => {
    const {register,handleSubmit,formState:{errors}} = useForm()
    const dispatch = useDispatch()
    const submitHandler = (data)=>{

        console.log("data...",data)
        //action call..
        dispatch(withdraw(data.amount1))
    }
    const depositHandler = (data)=>{
        console.log("data...",data)
        dispatch(deposit(data.amount2))
    }
  return (
    <div>
        <div>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <input type="text" placeholder="Enter Amount" {...register("amount1")}/>
                </div>
                <div>
                    <input type="submit" value="Withdraw" />    
                </div>
            </form>
            <form onSubmit={handleSubmit(depositHandler)}>
                <div>
                    <input type="text" placeholder="Enter Amount to deposit" {...register("amount2")}/>
                </div>
                <div>
                    <input type="submit" value="deposit" />    
                </div>
            </form>
        </div>
    </div>
  )
}
