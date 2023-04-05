// convention is use Capital for components and small for pages
import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Header from './Header'
import Meta from './Meta'

export default function Layout({children}) {
  return (
    <>
    <Meta />
        <Nav />
        <div className={styles.container}>
            <main className={styles.main}>
                <Header />
                {children} 
                {/* whatever is passd to this it will be rendred now we are passing from _app */}
            </main>
        </div>
    </>
   
  )
}
