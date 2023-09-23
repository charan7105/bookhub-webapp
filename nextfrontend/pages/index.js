import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Book Hub</title>
        <meta name="description" content="Book Hub is Created by Sai Charan Venna" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello React</h1>
        <Link href={'/about'}> <u>About</u> </Link>
      </main>
    </div>
  )
}
