import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import ArticleList from '@/components/ArticleList'
import { server } from '@/config'

const inter = Inter({ subsets: ['latin'] })

export default function Home({articles}) {
  // console.log(articles)
  return (
    <div>
        {/* just what we add in html head we can add that */}
      {/* <Head>
        <title>Anish</title>
        <meta name='keywords' content='webdevelopment, programming'></meta>
      </Head> */}

      {/* no need above becoz we have created meta file for that */}

      <ArticleList articles={articles} />
    </div>
  )
}

// to fetch data
// three methods
// 1.get static prop
// 2. get server path
// 3. get server path
// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }

// the above is one way

// another way is in our api/article we will get all data in db
// and we will request from there

export const getStaticProps = async () => {
  // const res = await fetch(`/api/articles`) it won't work we need to give entire url
  // so let us create a config folder and we will put url there
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}