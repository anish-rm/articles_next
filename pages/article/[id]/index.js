import { useRouter } from "next/router"
import Link from "next/link"
import { server } from "@/config"
import Meta from "@/components/Meta"

export default function article({article}) {

    // using useRouter we can get the details of router 
    // const router = useRouter()

    // const {id} = router.query
    // now we can use useEffect to fetch data based on this id
    // but we are going to use data fetching method provided by nextjs

  return (
    <>
      {/* we want article title to be title of page */}
      {/* description is good for seo */}
      <Meta title = {article.title} description={article.excerpt}/>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br/>
        <Link href='/'>Go Back</Link>
    </>
  )
}

// getServersideprops -> fetch the data at time of request

// export const getServerSideProps = async (context) => {
//     // this context will have details in our id
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = await res.json();
    

//     return {
//         props: {
//           article
//         }
//       }
// }

// another way

// now we have shown only 6 article in home
// but using this eve if user type in url 20 the 20th post will come
// export const getStaticProps = async (context) => {
//     // this context will have details in our id
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = await res.json();
    

//     return {
//         props: {
//           article
//         }
//       }
// }

// export const getStaticPaths = async ()=> {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//     const articles = await res.json();

//     // now we are getting all the posts 
//     // we have to return like this
//     // paths : {params: {id:'1', id:'2', ....}}

//     const ids = articles.map(article => article.id)

//     const paths = ids.map(id => ({params: {id: id.toString()}}))

//     return {
//         paths,
//         fallback : false
//     }
// }

// now we can static web site
// change in package.json in build  "build": "next build && next export",
// now when we npm run build we will get a out folder
// now install npm i -g serve


// feetching from our api

export const getStaticProps = async (context) => {
  // this context will have details in our id
  const res = await fetch(`${server}/api/articles/${context.params.id}`)

  const article = await res.json();
  

  return {
      props: {
        article
      }
    }
}

export const getStaticPaths = async ()=> {
  const res = await fetch(`${server}/api/articles`)

  const articles = await res.json();

  // now we are getting all the posts 
  // we have to return like this
  // paths : {params: {id:'1', id:'2', ....}}

  const ids = articles.map(article => article.id)

  const paths = ids.map(id => ({params: {id: id.toString()}}))

  return {
      paths,
      fallback : false
  }
}