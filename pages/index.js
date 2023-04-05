'use client'

import Head from 'next/head'
import {  useSelector } from 'react-redux'

import Login from './auth/Login'

export default function Home() {
    const user = useSelector((state) => state.auth.user)

  return (
      <>
        <Head>
          <title>Proxima AI</title>
          <meta name="description" content="The proxima client app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        {
          user ?

          <div className="flex flex-col h-screen w-screen items-center justify-center overflow-hidden">
          
          {
            user && <h1>Hi {user.name}</h1>
          }

        </div>  :

        <Login />
        }

        
      </>
  )
}
