import navStyles from '../styles/Nav.module.css'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav className={navStyles.nav}>
        <ul>
            <li>
                {/* using Link we can navigate to pages in next  */}
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/about'>About</Link>
            </li>
        </ul>

    </nav>
  )
}
