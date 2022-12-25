import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import ProductFeed from '../components/ProductFeed'

export default function Home({products}) {
  return (
    <div>
      <Head>
        <title>
          Amazon clone
        </title>
      </Head>

      {/* header component */}
      <Header />

      <main className=' max-w-screen-xl mx-auto bg-gray-100'>
        {/* banner component */}
        <Banner />
        {/* products */}
        <ProductFeed products={products}/>
      </main>

    </div>


  )
}

export async function getServerSideProps(context) {

  let products = await fetch("https://fakestoreapi.com/products")
  products=await products.json()

  return {
    props: {
      products,
    }
  }

}
