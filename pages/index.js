import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Proxima AI</title>
        <meta name="description" content="The proxima client app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="flex h-screen w-screen items-center justify-center overflow-hidden text-4xl text-blue-500">
        Hello proxima!
      </h1>
    </>
  )
}
