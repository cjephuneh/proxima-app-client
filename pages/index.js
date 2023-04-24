import Download from '@/components/homepage/Download'
import Facts from '@/components/homepage/Facts'
import Hero from '@/components/homepage/Hero'
import Navbar from '@/components/homepage/Navbar'
import Pricing from '@/components/homepage/Pricing'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'
import Layout from '@/components/Layout'

export default function Home() {
    // const { pathname } = useRouter()
    // console.log(pathname)

    const { systemTheme, theme, setTheme } = useTheme();

    useEffect(() => {
        setTheme('dark')
    }, [])
  return (
      <div className=''>
        <Head>
          <title>Proxima AI</title>
          <meta name="description" content="The proxima client app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <main>
            <Layout>
              <Hero />
              <Facts />
              <Pricing />
              <Download />
            </Layout>
        </main>

        
      </div>
  )
}
