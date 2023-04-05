'use client'

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { signin, reset } from '../../redux/slice/auth/authSlice'

function Login() {
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, isMessage } = useSelector((state) => state.auth)

    useEffect(() => {

      if(isError){
        alert(isMessage)
      }

      dispatch(reset())

    }, [user, isLoading, isError, isSuccess, isMessage, dispatch])

  return (
    <div className='h-screen flex flex-col items-center justify-center space-y-4'>
        <h1 className='text-3xl font-bol'>Login</h1>
        <button className='bg-green-500 px-4 py-1 rounded' onClick={() => dispatch(signin({name: 'kim'}))}>Login</button>
    </div>
  )
}

export default Login