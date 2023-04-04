import Head from 'next/head'
import {  useDispatch, useSelector } from 'react-redux'
import { sayHelloProxima, sayHelloWorld, reset } from '@/redux/slice/testSlice'

export default function Home() {
    const greet = useSelector((state) => state.test.value)

    const dispatch = useDispatch()
  return (
      <>
        <Head>
          <title>Proxima AI</title>
          <meta name="description" content="The proxima client app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex flex-col h-screen w-screen items-center justify-center overflow-hidden">
          
          <h1 className='text-4xl text-blue-500'>{greet}</h1>

          <div className='space-x-4 mt-4'>
            <button onClick={() => dispatch(sayHelloProxima('Proxima'))} className='bg-green-400 px-4 py-1 rounded'>proxima</button>
            <button onClick={() => dispatch(sayHelloWorld('World'))} className='bg-green-400 px-4 py-1 rounded'>world</button>
            <button onClick={() => dispatch(reset())} className='bg-green-400 px-4 py-1 rounded'>reset</button>
          </div>
        </div>

        
      </>
  )
}
