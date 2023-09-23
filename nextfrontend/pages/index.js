import Head from 'next/head'
// import Link from 'next/link'
import { useQuery } from 'urql'
import { BOOKS_QUERY } from '../lib/query'
import Books from '../components/Books'

export default function Home() {

  //Fetch Products from Strapi
  const [results] = useQuery({query:BOOKS_QUERY})
  const { data, fetching, error } = results

  if(fetching) return <p>Loading..</p>
  if(error) return <p>Oh no..{error.message}</p>
  const books = data.booksCollections.data
  console.log(books)

  return (
    <div>
      <Head>
        <title>BookHub | CharanHere</title>
        <meta name="description" content="Book Hub is Created by Sai Charan Venna" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello React</h1>
        {
          books.map((booksCollection)=>(
            <Books booksCollection={booksCollection} />
          ))
        }

        {/* <Link href={'/about'}> <u>About</u> </Link>*/}
        {/* {}Means JS File */}

      </main>
    </div>
  )
}
