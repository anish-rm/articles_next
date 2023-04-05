import Head from 'next/head'
import About from '@/components/About'
import Meta from '@/components/Meta'

export default function about() {
  return (
    <About>
        {/* <Head>
            <title>About</title>
        </Head> */}
        {/* now we have in meta file in compiinents */}
        <Meta title='About' />
        <h1>About</h1>
    </About>
  )
}
