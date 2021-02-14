import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>테스트</p>
      <Link href='/ninjas'>
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  )
}
