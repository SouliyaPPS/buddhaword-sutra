import Link from 'next/link'
import styles from '../styles/Header.module.css'
import Image from 'next/image'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>Buddhaword</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/sutra">
              <a>Sutra</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
