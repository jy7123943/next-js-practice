import Head from 'next/head'

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  const paths = data.map(ninja => ({
    params: { id: ninja.id.toString() }
  }))

  return {
    paths,
    fallback: false
  }
}

const Details = () => {
  return (
    <>
      <h1>Detail Page</h1>
    </>
  )
}

export default Details
