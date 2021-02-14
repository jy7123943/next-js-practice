import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>테스트</p>
      <Link href='/ninjas'>
        <a>See Ninja Listing</a>
      </Link>
    </div>
  )
}
